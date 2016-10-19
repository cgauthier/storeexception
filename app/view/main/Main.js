Ext.define('StoreException.view.main.Main', {
    extend: 'Ext.grid.Panel',
    requires: [
        'StoreException.view.main.MainController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.Label'
    ],
    xtype: 'app-main',
    controller: 'main',
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
    },
    initComponent: function() {
        var me = this;
        
        me.title = "Demo Grid for dealing with Exceptions";
        
        PUBSUB.sub("setErrMsg", "setErrMsg", me.setErrMsg, me);
        PUBSUB.sub("clearErrMsg", "clearErrMsg", me.clearErrMsg, me);
        
        me.store = "Demo";
        
        me.columns = [{
            dataIndex: "name",
            flex: 1,
            text: "Name"
        }, {
            dataIndex: "address",
            flex: 1,
            text: "Address"
        }, {
            dataIndex: "phone",
            flex: 1,
            text: "Phone"
        }];
        
        me.bbar = {
            xtype: "toolbar",
            items: [{ xtype: "tbfill" }, {
                xtype: "button",
                action: "normal",
                text: "Successful load of data"
            }, {
                xtype: "button",
                action: "not200",
                text: "Service returns a statusCode within a 200"
            }, {
                xtype: "button",
                action: "bad",
                text: "The call is messed up"
            }]
        };
   
        me.tbar = {
            xtype: "toolbar",
            action: "errMsg",
            hidden: true,
            items: [{
                xtype: "label",
                action: "msg"
            }, {
                xtype: 'tbfill'
            }, {
                xtype: "button",
                action: "hide",
                text: "X"
            }]
        };
        
        me.callParent(arguments);
    },
    setErrMsg: function(data) {
        var me = this;
        var toolbar = me.down('toolbar[action="errMsg"]');
        var label = toolbar.down('label');
        var data = data.data;
        toolbar.show();
        label.setText(data);
    },
    clearErrMsg: function(data) {
        var me = this;
        var toolbar = me.down('toolbar[action="errMsg"]');
        var label = toolbar.down('label');
        label.setText('');
        toolbar.hide();
    }
    
});