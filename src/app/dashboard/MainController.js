Ext.define('App.dashboard.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main-dashboard',

    mixins: ['App.mixins.StatusRender'],

    listen: {
        store: {
            '#statusStore': {
                datachanged: function (store) {
                    this.getViewModel().set('statusData', store.getRange());
                }
            }

        }
    },

    control: {
        '#': {
            afterrender: {
                delay: 300,
                fn: function () {
                    try {
                        Ext.getStore('staticStore').load();
                    } catch (e) {
                        Ext.toast({
                            html: 'Ошибка при загрузке. Локальное хранилище не найдено!',
                            align: 'tr'
                        });
                    }
                }
            }
        },
        'grid-status #addLastStatus': {
            click: function () {
                this.addStatus(true);
            }
        },
        'grid-status #addFirstStatus': {
            click: function () {
                this.addStatus(false);
            }
        },
        'grid-status #delLastStatus': {
            click: function () {
                this.delStatus(true);
            }
        },
        'grid-status #delFirstStatus': {
            click: function () {
                this.delStatus(false);
            }
        }
    },

    addStatus: function (isLast) {
        var store = this.getViewModel().getStore('statusStore');
        store.add({
            id: +(Math.random() * 1000000).toFixed(),
            type: 'state',
            sort: (store.getCount() + 1) * (isLast ? 1 : -1),
            name: 'CUSTOM #' + +(Math.random() * 1000).toFixed()
        });
    },

    delStatus: function (isLast) {
        var store = this.getViewModel().getStore('statusStore');
        if (isLast) {
            store.remove(store.last());
        } else {
            store.remove(store.first());
        }
    }
});
