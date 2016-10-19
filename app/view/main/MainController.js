/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('StoreException.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [],
    alias: 'controller.main',
    init: function(view) {
        var ctrl = this;
        var v = view;
        ctrl.control({
            "button": {
                "click": {
                    fn: function(btn) {
                        var view, store, proxy, urlTpl, url;
                        if(btn.action != "hide") {
                            view = this.view;
                            store = view.getStore();
                            proxy = store.getProxy();
                            urlTpl = "resources\\data\\{0}.json";
                            url = Ext.String.format(urlTpl, btn.action);
                            proxy.url = url;
                            store.setProxy(proxy);
                            store.load();    
                        } else {
                            PUBSUB.pub("clearErrMsg", {data: true});
                        }
                    },
                    scope: {
                        view: v,
                        ctrl: ctrl
                    }
                }
            }
        });
    }

});
