Ext.define('App.mixins.StatusRender', {

    extend: 'Ext.Mixin',

    priorityMark: function (value, meta, rec) {
        var color = rec.get('color') || rec.get('priority.color');
        try {
            meta.tdStyle = 'padding-left:10px;box-shadow:10px 0 0 ' + color + ' inset;';
        } catch (e) {
        }
        return value;
    }
});
