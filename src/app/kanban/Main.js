Ext.define('App.kanban.Main', {

    extend: 'Ext.panel.Panel',

    alias: 'widget.main-kanban',

    requires: [
        'App.kanban.MainController'
    ],

    controller: 'main-kanban',

    title: 'Доска',
    flex: 1.5,
    border: true,
    scrollable: 'horizontal',
    bodyPadding: 10,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    bind: {
        myStatus: '{statusData}'
    },
    setMyStatus: function (data) {
        this.fireEvent('onupdatekanbanstate', this, data);
    }
});
