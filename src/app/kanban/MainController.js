Ext.define('App.kanban.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main-kanban',

    requires: [
        'App.kanban.Grid',
        'App.kanban.DataView'
    ],

    mixins: ['App.mixins.StatusRender'],

    control: {
        '#': {
            'onupdatekanbanstate': 'updateKanbanState'
        },
        'data-view-kanban dataview': {
            viewready: function (view) {
                view.dragZone = new Ext.dd.DragZone(view.getEl(), {
                    getDragData: function (e) {
                        var sourceEl = e.getTarget(view.itemSelector, 10);
                        if (sourceEl) {
                            var d = sourceEl.cloneNode(true);
                            d.id = Ext.id();
                            return {
                                ddel: d,
                                sourceEl: sourceEl,
                                repairXY: Ext.fly(sourceEl).getXY(),
                                sourceStore: view.store,
                                draggedRecord: view.getRecord(sourceEl)
                            }
                        }
                    },
                    getRepairXY: function () {
                        return this.dragData.repairXY;
                    }
                });
                view.dropZone = new Ext.dd.DropZone(view.getEl(), {
                    getTargetFromEvent: function () {
                        return view.getEl();
                    },
                    onNodeDrop: function (target, dd, e, data) {
                        var currentStateId = data.draggedRecord.get('state.id'),
                            sourceStateId = null;
                        try {
                            sourceStateId = Ext.getCmp(target.getAttribute('id'))
                                .lookupViewModel()
                                .get('stateId');
                        } catch (e) {
                        }

                        if (sourceStateId !== null && currentStateId !== sourceStateId) {
                            var stateData = Ext.StoreManager
                                .get('statusStore')
                                .getById(sourceStateId);
                            data.draggedRecord.set('state.id', sourceStateId);
                            data.draggedRecord.set(
                                'state',
                                Ext.copyTo({}, stateData.getData(), 'id,sort,name'));
                            data.draggedRecord.commit();
                        }
                    }
                });
            }
        }
    },

    'updateKanbanState': function (panel, data) {
        for (var i = 0, l = Ext.max([data.length, panel.items.length]); i < l; i++) {

            if (panel.items.getAt(i) !== undefined && data[i] !== undefined) {

                var vm = panel.items.getAt(i).getViewModel();
                vm.set('title', data[i].get('name'));
                vm.set('stateId', data[i].get('id'));

            } else if (panel.items.getAt(i) === undefined && data[i] !== undefined) {

                panel.add({
                    xtype: 'data-view-kanban',
                    viewModel: {
                        data: {
                            title: data[i].get('name'),
                            stateId: data[i].get('id')
                        },
                        stores: {
                            localTaskStore: {
                                source: 'taskStore',
                                filters: {
                                    property: 'state.id',
                                    operator: '=',
                                    value: '{stateId}'
                                },
                                sorters: [
                                    {
                                        property: 'user.firstName',
                                        direction: 'ASC'
                                    },
                                    {
                                        property: 'user.lastName',
                                        direction: 'ASC'
                                    },
                                    {
                                        property: 'priority.sort',
                                        direction: 'ASC'
                                    }
                                ]
                            }
                        }
                    },
                    bind: {
                        title: '{title}'
                    }
                });

            } else if (panel.items.getAt(i) !== undefined) {

                panel.remove(panel.items.getAt(i), true);

            }
        }
    }
});
