Ext.define('App.priority.Grid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.grid-priority',

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
                dataIndex: 'sort',
                text: 'Сорт.',
                width: 83
            },
            {
                dataIndex: 'name',
                text: 'Приор.',
                flex: 1,
                minWidth: 89
            },
            {
                dataIndex: 'color',
                text: 'Цвет',
                renderer: 'priorityMark'
                // renderer: function (value, meta) {
                //     meta.tdStyle = 'padding-left:10px;box-shadow:10px 0 0 ' + value + ' inset;';
                //     return value;
                // }
            }
        ]
    },
    bind: {
        store: '{priorityStore}'
    }
});
