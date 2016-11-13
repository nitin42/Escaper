/**
 * @author Nitin Tulswani <tulswani19@gmail.com>
 */

/* 
* Escape the special characters in the given string of html to prevent XSS attack.
* 
* @param {String} html
* return {String}
*/
module.exports = {
	escape: function(html){    // '<h1>Hello World</h1>'
		return String(html)    // <h1>Hello World</h1>
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#27;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/\*/, '&times;')
			.replace(/\./g, '&sdot;')
			.replace(/!/g, '&not;')
			.replace(/\//g, '&#x2F;')
			.replace(/1\/2/g, '&frac12;');

	},

	/* 
	* Unscape the special characters in the given string of html.
	* 
	* @param {String} html
	* return {String}
	*/

	unescape: function(html){
		return String(html)
			.replace(/&amp;/g, '&')
			.replace(/&quot;/g, '"')
			.replace(/&#27;/g, "'")
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&times;/, '*')
			.replace(/&sdot;/g, '.')
			.replace(/&not;/g, '!')
			.replace(/&#x2F;/g, '/')
			.replace(/&frac12;/g, '1/2');
	}

}; 


