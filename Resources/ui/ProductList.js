var populateTable = function(productTable, tableView) {

    var data = productTable.getProducts();
    var tableRows = [];

    for(var i in data){
        var row = Titanium.UI.createTableViewRow({
            title: data[i]
        });
        tableRows.push(row);
    }

    tableView.setData(tableRows);
};

var create = function (productTable) {
    
    var self = Titanium.UI.createWindow({
        backgroundColor: 'white',
        title: 'Lista della spesa'
    });
    var tableView = Titanium.UI.createTableView();
   
    self.add(tableView);
    
    Titanium.App.addEventListener('app:listHasChanged', function(){
        populateTable(productTable, tableView);
    });
    
    populateTable(productTable, tableView);
    return self;
    
};

exports.create = create;