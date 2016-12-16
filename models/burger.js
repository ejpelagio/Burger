//require ORM
var orm = require('../config/orm.js');


//EXPORTING object = BURGER.
var burger = {

		selectAll: function (callback){
					//selecAll function is use to load an display with DB data.
					orm.selecAll('burgers', function(result){
						callback(result)
					
					});
		}, //END selectAll function
		insertOne: function(table, cols, vals, callback){
			// insertOne function
			orm.insertOne('burgers', cols,vals, function(result){
				// Call back is passed 
				callback(result)
			});

		},
		updateOne: function(table, colName, burgerId, callback){
			orm.updateOne('burgers', colName, burgerId,function(result){
				callback(result);
			});
		},

		deleteOne: function(table, burgerId, callback){
				orm.deleteOne('burgers',id,function(result){
					callback(result);
				})
		}

		
}
module.exports = burger;