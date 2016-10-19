Ext.application({
    name: 'StoreException',
    extend: 'StoreException.Application',
    autoCreateViewport: 'StoreException.view.main.Main',
	stores: ["Demo"],
	requires: ['StoreException.util.PUBSUB']
});
