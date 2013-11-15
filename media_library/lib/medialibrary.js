'use strict';

module.exports = {
	toto : function() {
		toto('titi');
	},
	tutu : function() {
		toto('tutu');
	},
};

module.exports.tata = function() {
	toto('tata');
};

function toto (text) {
	console.log(text);
}
