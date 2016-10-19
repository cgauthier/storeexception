Ext.define('StoreException.store.Demo', {
    extend: 'Ext.data.Store',
    fields: [{name: "name"}, {name: "phone"}, {name: "address"}],
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: {
                fn: function(proxy, request, operation) {
                    var e = {
                        statusCode: operation.error.status,
                        errMsg: operation.error.statusText
                    };
                    PUBSUB.pub("setErrMsg", {data: Ext.encode(e)});
                }
            }
        }
    },
    listeners: {
        load: function(store, records, state, operation, opts) {
            var obj;
            var errMsg = {};
            if(operation && operation._response && operation._response.responseText) {
                obj = Ext.decode(operation._response.responseText);
                if(obj.statusCode != "200") {
                    errMsg = {
                        statusCode: obj.statusCode,
                        errMsg: obj.errMsg
                    };
                    PUBSUB.pub("setErrMsg", {data: Ext.encode(errMsg)});
                } else {
                    PUBSUB.pub("clearErrMsg", {data: true});
                }
            } else {
                store.removeAll();
            }
        }
    }
});