var chai = require("chai");
var expect = chai.expect;

var scape = require("../index");

var escape = scape.escape;
var unescape = scape.unescape;

describe("Escape characters", function(){
	it("converts & to &amp;", function(){
		expect(escape("&")).to.equal("&amp;");
	});

	it("converts \"  to &quot;", function(){
		expect(escape("\"")).to.equal("&quot;");
	});

	it("converts ' to &#27;", function(){
		expect(escape("'")).to.equal("&#27;");
	});

	it("converts < to &lt;", function(){
		expect(escape("<")).to.equal("&lt;");
	});

	it("converts > to &gt;", function(){
		expect(escape(">")).to.equal("&gt;");
	});

	it("converts / to &#x2F;", function(){
		expect(escape("/")).to.equal("&#x2F;");
	});	

	it("converts * into &times; ", function(){
		expect(escape("*")).to.equal("&times;");
	});	

	it("converts . into &sdot; ", function(){
		expect(escape(".")).to.equal("&sdot;");
	});	

	it("converts ! into &not; ", function(){
		expect(escape("!")).to.equal("&not;");
	});	

	it("Returns empty string if no value or falsy value", function(){
		expect(escape("")).to.equal("");
	});

});

describe("Unescape characters", function(){
	it("converts &amp; into & ", function(){
		expect(unescape("&amp;")).to.equal("&");
	});

	it("converts &quot; into \" ", function(){
		expect(unescape("&quot;")).to.equal("\"");
	});

	it("converts &#27; into ' ", function(){
		expect(unescape("&#27;")).to.equal("'");
	});

	it("converts &lt; into < ", function(){
		expect(unescape("&lt;")).to.equal("<");
	});

	it("converts &gt; into > ", function(){
		expect(unescape("&gt;")).to.equal(">");
	});

	it("converts &#x2F; into / ", function(){
		expect(unescape("&#x2F;")).to.equal("/");
	});

	it("converts &times; into * ", function(){
		expect(unescape("&times;")).to.equal("*");
	});

	it("converts &sdot; into . ", function(){
		expect(unescape("&sdot;")).to.equal(".");
	});

	it("converts &not; into ! ", function(){
		expect(unescape("&not;")).to.equal("!");
	});	

	it("Returns empty string if no value or falsy value", function(){
		expect(unescape("")).to.equal("");
	});


});
