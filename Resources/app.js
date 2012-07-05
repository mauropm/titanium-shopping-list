(function() {
    var productTableModule = require('model/productTable');
    var productTable = productTableModule.create();

    var mainModule = require('ui/Main');
    var mainWindow = mainModule.create(productTable);

    mainWindow.open();    
})();