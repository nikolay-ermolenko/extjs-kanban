Ext.define('App.task.Grid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.grid-task',

    columns: {
        defaults: {
            sortable: false
        },
        items: [
            {
                dataIndex: 'id',
                text: 'ID',
                width: 55
            },
            {
                dataIndex: 'state.id',
                text: 'St. ID',
                width: 75
            },
            {
                dataIndex: 'priority.id',
                text: 'Prio. ID',
                width: 75,
                renderer: 'priorityMark'
            },
            {
                dataIndex: 'user.id',
                text: 'User. ID',
                width: 75
            },
            {
                dataIndex: 'number',
                text: 'Номер',
                width: 110
            },
            {
                dataIndex: 'name',
                text: 'Задача',
                flex: .7,
                minWidth: 80
            },
            {
                xtype: 'datecolumn',
                dataIndex: 'date',
                format: 'd.m.Y',
                text: 'Дата',
                width: 110
            }
            // {
            //     dataIndex: 'firstName',
            //     text:'Имя',
            //     flex: .7,
            //     minWidth: 80
            // },
            // {
            //     dataIndex: 'lastName',
            //     text:'Фамилия',
            //     flex: 1,
            //     minWidth: 80
            // }
        ]
    },
    bind: {
        store: '{taskStore}'
    }
});
