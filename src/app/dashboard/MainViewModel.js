Ext.define('App.dashboard.MainViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-dashboard',

    requires: [
        'App.models.Static'
    ],

    data: {
        selectedTask: null,
        statusData: []
    },
    stores: {
        staticStore: {
            autoLoad: false,
            pageSize: 0,
            storeId: 'staticStore',
            model: 'App.models.Static'
        },
        statusStore: {
            source: 'staticStore',
            storeId: 'statusStore',
            filters: {
                property: 'type',
                operator: '=',
                value: 'state'
            },
            sorters: {
                property: 'sort',
                direction: 'ASC'
            }
        },
        priorityStore: {
            source: 'staticStore',
            storeId: 'priorityStore',
            filters: {
                property: 'type',
                operator: '=',
                value: 'priority'
            },
            sorters: {
                property: 'sort',
                direction: 'ASC'
            }
        },
        userStore: {
            source: 'staticStore',
            storeId: 'userStore',
            filters: {
                property: 'type',
                operator: '=',
                value: 'user'
            },
            sorters: {
                property: 'firstName',
                direction: 'ASC'
            }
        },
        taskStore: {
            source: 'staticStore',
            storeId: 'taskStore',
            filters: {
                property: 'type',
                operator: '=',
                value: 'task'
            },
            sorters: {
                property: 'firstName',
                direction: 'ASC'
            }
        }
    },
    links: {
        // aaa: '{getStatus}'
    },
    formulas: {
        // getStatus: function(getter) {
        //     console.log(9, getter, getter('statusStore'))
        //     try {
        //         return getter('statusStore').getCount();
        //     } catch(e) {
        //         return 0;
        //     }
        // },
        // getStatus2: {
        //     bind: {
        //         bindTo: '{statusStore}',
        //         deep: true
        //     },
        //     get: function(a) {
        //         console.log(111, a)
        //         return []; // a.getRange();
        //     }
        // }

    }
});
