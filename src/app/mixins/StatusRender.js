Ext.define('App.mixins.StatusRender', {

    extend: 'Ext.Mixin',

    priorityMark: function (value, meta, rec) {
        var color = rec.get('color') || rec.get('priority.color');
        try {
            meta.tdStyle = this.getPriorityColor(color);
        } catch (e) {
        }
        return value;
    },

    dateFormat: function(date, format) {
        return Ext.Date.format(date, format);
    },

    getPriorityColor: function (color) {
        return 'padding-left:10px;box-shadow:10px 0 0 ' + color + ' inset;';
    }
});
