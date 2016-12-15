//require ORM
var orm = require('../config/orm.js');

var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burger = require('../models/burger.js');

//EXPORTING object = BURGER.
var burger = {

		selectAll: function (table, callback){
					var queryString = 'SELECT * FROM' + table + ';';

					connection.query(queryString, function (err, result){
						if (err) throw err;
						callback(result);
					});
		},
		
}
