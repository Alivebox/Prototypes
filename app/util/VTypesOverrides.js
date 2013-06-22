Ext.define('Prototypes.util.VTypesOverrides',{

    statics: {

        init: function(){
            Ext.override(Ext.form.field.VTypes,{
                time: function(val, field) {
                    var timeTest = /^([1-9]|1[0-9]):([0-5][0-9])(\s[a|p]m)$/i;
                    return timeTest.test(val);
                },
                // vtype Text property: The error text to display when the validation function returns false
                timeText: 'Not a valid time.  Must be in the format "12:34 PM".',
                // vtype Mask property: The keystroke filter mask
                timeMask: /[\d\s:amp]/i
            })
        }

    }

});
