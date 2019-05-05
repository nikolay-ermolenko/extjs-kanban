<?php
usleep(800 * 1000);
header('Content-Type: text/html; charset=utf-8');

$user = array();
$user_uniq_map = array();
$user_count_limit = 5;
$user_start_id = 6000;
$user_first_name = array(
    'Александр',
    'Алексей',
    'Борис',
    'Виктор',
    'Григорий',
    'Дмитрий',
    'Евгений',
    'Николай',
    'Пётр',
    'Юрий'
);
$user_last_name = array(
    'Иванов',
    'Петров',
    'Сидоров',
    'Алексеев',
    'Горбунков',
    'Сухоруков'
);

echo '{"success":true,"data":{';
ob_start();

for ($i = 0; $i < $user_count_limit; $i++) {
    if ($i === count($user_first_name) * count($user_last_name)) {
        $i = $user_count_limit + 1;
    }
    $first_name = $user_first_name[rand(0, count($user_first_name) - 1)];
    $last_name = $user_last_name[rand(0, count($user_last_name) - 1)];

    $uniq = $first_name . $last_name;
    if (!in_array($uniq, $user_uniq_map)) {
        array_push(
            $user,
            array(
                'id' => $user_start_id + $i,
                'firstName' => $first_name,
                'lastName' => $last_name
            )
        );
        array_push(
            $user_uniq_map,
            $uniq
        );
    } else {
        --$i;
    }
}
echo '"user":' . json_encode($user);
ob_end_flush();


$state = json_decode('{"state":[
            {"id":4000,"sort":0,"name":"PLAN"},
            {"id":4003,"sort":3,"name":"TESTING"},
            {"id":4001,"sort":1,"name":"IN PROGRESS"},
            {"id":4004,"sort":4,"name":"DONE"}
        ]}', true);
$state = $state['state'];
ob_start();
echo ',"state":' . json_encode($state);
ob_end_flush();


$priority = json_decode('{"priority": [
            {"id":5000,"sort":0,"name":"MUST","color":"red"},
            {"id":5001,"sort":1,"name":"SHOULD","color":"orange"},
            {"id":5002,"sort":2,"name":"COULD","color":"lime"}
        ]}', true);
$priority = $priority['priority'];
ob_start();
echo ',"priority":' . json_encode($priority);
ob_end_flush();


$task = array();
$task_uniq_map = array();
$task_count_limit = 24;
$task_start_id = 7000;
$task_action = array(
    'Создание',
    'Разработка',
    'Модернизация',
    'Переработка',
    'Утилизация'
);
$task_attr1 = array(
    'бессистемного',
    'ударного',
    'боевого',
    'пессимистичного',
    'унылого',
    'меланхоличного',
    'мизантропного',
    'завывающего'
);
$task_attr2 = array(
    'комплекса',
    'корыта',
    'забора',
    'аппарата',
    'топорища',
    'молотка',
    'рубанка'
);
$task_code = array(
    'ЛЕШИЙ',
    'БАРАМАЛЕЙ',
    'ЗАКУТОК',
    'ЧЕКУШКА',
    'БАБА-ЯГА',
    'КАЩЕЙ',
    'СПОТЫКАЧ',
    'БУРАТИНО',
    'ЁХАН ПАЛЫЧ',
    'ЗОПУХ'
);
ob_start();


for ($i = 0; $i < $task_count_limit; $i++) {
    if ($i === count($task_attr1) * count($task_attr2)) {
        $i = $task_count_limit + 1;
    }
    $action = $task_action[rand(0, count($task_action) - 1)];
    $attr1 = $task_attr1[rand(0, count($task_attr1) - 1)];
    $attr2 = $task_attr2[rand(0, count($task_attr2) - 1)];
    $code = $task_code[rand(0, count($task_code) - 1)];
    $mod = iconv('CP1251', 'UTF-8', chr(rand(192, 208))) . '-' . rand(10, 99);

    $uniq = $attr1 . $attr2;
    $name = "{$action} {$attr1} {$attr2} {$code} {$mod}";

    $task_user = $user[rand(0, count($user) - 1)];
    $task_state = $state[rand(0, count($state) - 1)];
    $task_priority = $priority[rand(0, count($priority) - 1)];
    if (!in_array($uniq, $task_uniq_map)) {
        array_push(
            $task,
            array(
                'id' => $task_start_id + $i,
                'name' => $name,
                'number' => 'TSK-' . rand(1000, 9999),
                'user' => $task_user,
                'state' => $task_state,
                'priority' => $task_priority,
                'date' => date('Y-m-d', (mktime() - rand(100000, 9999999)))
            )
        );
        array_push(
            $task_uniq_map,
            $uniq
        );
    } else {
        --$i;
    }
}
echo ',"task":' . json_encode($task);
ob_end_flush();
echo '}}';