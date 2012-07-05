var create = function (productTable) {
    
    var self = Titanium.UI.createWindow({
        backgroundColor: 'white',
        title: 'Aggiungi prodotto'
    });
    
    var lblName = Titanium.UI.createLabel({
        top: '15dp',
        left: '15dp',
        text: 'Nome'
    });
    
    var inputName = Titanium.UI.createTextField({
        top: '40dp',
        left: '15dp',
        right: '15dp',
        height: '44dp',
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    
    var addButton = Titanium.UI.createButton({
        title: 'Aggiungi',
        top: '90dp',
        left: '15dp',
        right: '15dp',
        height: '44dp',
        color: 'black'
    });     
    
    self.add(lblName);
    self.add(inputName);
    self.add(addButton);
    
    addButton.addEventListener('click',function(){
        productTable.addProduct(inputName.value);
        Titanium.App.fireEvent('app:listHasChanged')
        alert('Prodotto aggiunto correttamente');
        inputName.value = null;
        inputName.blur();
    });    
    
    return self;
    
};
exports.create = create;