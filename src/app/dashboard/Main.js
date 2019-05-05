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
            xtype: 'container',
            region: 'center',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'main-kanban',
                    flex: 1.7
                },
                {
                    xtype: 'form',
                    layout: 'column',
                    defaults: {
                        xtype: 'displayfield',
                        columnWidth: 0.5
                    },
                    items: [
                        {
                            bind: '{selectedTask.number}'
                        },
                        {
                            bind: '{selectedTask.name}'
                        },
                        {
                            bind: '{selectedTask.state.name}'
                        },
                        {
                            bind: {
                                hidden: '{!selectedTask.priority.color}',
                                value: '{selectedTask.priority.name}',
                                fieldStyle: '{selectedTask.priority.color:this.getPriorityColor}'
                            }
                        },
                        {
                            bind: '{selectedTask.date:this.dateFormat("d.m.Y")}'
                        },
                        {
                            bind: '{selectedTask.user.lastName}, {selectedTask.user.firstName}'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Исходные данные',
            flex: .4,
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
