Ext.define('App.status.Grid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.grid-status',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    text: 'add last',
                    itemId: 'addLastStatus'
                },
                {
                    text: 'add first',
                    itemId: 'addFirstStatus'
                },
                {
                    text: 'del last',
                    itemId: 'delLastStatus'
                },
                {
                    text: 'del first',
                    itemId: 'delFirstStatus'
                }
            ]
        }
    ],

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
                text: 'Статус',
                flex: 1,
                minWidth: 89
            }
        ]
    },
    bind: {
        store: '{statusStore}'
    }
});
