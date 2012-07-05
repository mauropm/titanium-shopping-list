var create = function() {
    
    var open = function() {
        var db = Titanium.Database.open('products');
        db.execute('CREATE TABLE IF NOT EXISTS products (name TEXT, quantity TEXT, price TEXT)');
        return db;
    };
    
    var close = function(db) {
        db.close();
    };
    
    var getProducts = function() {
        var db = open();
        var rows = db.execute('SELECT ROWID, name, quantity, price FROM products');
        var result = [];
        while (rows.isValidRow()){
            result.push(rows.fieldByName('name'));
            rows.next();
        }
        rows.close();
        close(db);
        return result;
    };
    
    var addProduct = function(name) {
        var db = open();
        db.execute('INSERT INTO products (name) VALUES (?)', name);
        close(db);
    };
    
    var deleteProduct = function(rowid) {
        var db = open();
        db.execute('DELETE FROM products WHERE ROWID = ?', rowid);
        close(db);
    };    
    
    var deleteAll = function() {
        var db = open();
        db.execute('DELETE FROM products');
        close(db);
    };
    
    return {
        getProducts: getProducts,
        addProduct: addProduct,
        deleteAll: deleteAll,
        deleteProduct: deleteProduct
    };
}

exports.create = create;