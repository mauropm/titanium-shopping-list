var create = function (productTable) {
    
    var productListModule = require('ui/ProductList');
    var productListWindow = productListModule.create(productTable);
    var productAddModule = require('ui/AddProduct');
    var productAddWindow = productAddModule.create(productTable);
    
    var main = Titanium.UI.createTabGroup();
    
    var productListTab = Titanium.UI.createTab({
        title: 'Lista della spesa',
        window: productListWindow
    });

    var productAddTab = Titanium.UI.createTab({
        title: 'Aggiungi prodotto',
        window: productAddWindow
    });
    
    main.addTab(productListTab);
    main.addTab(productAddTab);
    
    Titanium.Gesture.addEventListener('shake',function(e){
        if(main.getActiveTab() == productListTab){
            productTable.deleteAll();
            Titanium.App.fireEvent('app:listHasChanged')
        };
    });    
    
    return main;
    
};

exports.create = create;