Ext.define('App.user.Grid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.grid-user',

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
                dataIndex: 'firstName',
                text: 'Имя',
                flex: .7,
                width: 83
            },
            {
                dataIndex: 'lastName',
                text: 'Фамилия',
                flex: 1,
                minWidth: 89
            }
        ]
    },
    bind: {
        store: '{userStore}'
    }
});
