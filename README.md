# storeexception
ExtJS store exception strategy and implementation

app.framework.version=5.1.1.451
app.cmd.version=6.2.0.103

This demo will work in version 6.x of ExtJS.

The purpose is to deal with exceptions which may arise when a store is loading data via a proxy.

There are many scenarios which can arise, most favorable is that your data loads.

But if you get exceptions or timeouts, there are ways of dealing with such issues and have a smooth UI interaction.

In the case where your services may function correctly (returning a status of 200) but within the service there were issues and you wish to deal with this smoothly, then this sample code provides a suggestive approach.

The app is easy to use, we have 3 scenarios.

1) data loads
2) the service call is a 200, but it suffered an internal error which would stop data from loading
3) a bad call is made

The live version of code is available here: http://www.claudegauthier.net/demos/StoreException/


