Ext.define('App.dashboard.Main', {

    extend: 'Ext.container.Container',

    alias: 'widget.main-dashboard',

    id: 'main-dashboard',

    requires: [
        'App.dashboard.MainViewModel',
        'App.dashboard.MainController',
        'App.kanban.Main',
        'App.status.Grid',
        'App.priority.Grid',
        'App.user.Grid',
        'App.task.Grid'
    ],

    viewModel: 'main-dashboard',

    controller: 'main-dashboard',

    layout: 'border',

    items: [
        {
            xtype: 'main-kanban',
            region: 'center'
        },
        {
            title: 'Исходные данные',
            flex: 1,
            collapsible: true,
            region: 'south',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'grid-status',
                    border: true,
                    flex: .6
                },
                {
                    xtype: 'splitter'
                },
                {
                    xtype: 'grid-priority',
                    border: true,
                    flex: .7
                },
                {
                    xtype: 'splitter'
                },
                {
                    xtype: 'grid-user',
                    border: true,
                    flex: .6
                },
                {
                    xtype: 'splitter'
                },
                {
                    xtype: 'grid-task',
                    border: true,
                    flex: 1.7
                }
            ]
        }
    ]
});
