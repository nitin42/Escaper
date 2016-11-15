var chai = require("chai");
var expect = chai.expect;

var scape = require("../index");

var escape = scape.escape;
var unescape = scape.unescape;

describe("Escape characters", () => {
	it("converts & to &amp;", () => {
		expect(escape("&")).to.equal("&amp;");
	});

	it("converts \"  to &quot;", () => {
		expect(escape("\"")).to.equal("&quot;");
	});

	it("converts ' to &#27;", () => {
		expect(escape("'")).to.equal("&#27;");
	});

	it("converts < to &lt;", () => {
		expect(escape("<")).to.equal("&lt;");
	});

	it("converts > to &gt;", () => {
		expect(escape(">")).to.equal("&gt;");
	});

	it("converts / to &#x2F;", () => {
		expect(escape("/")).to.equal("&#x2F;");
	});	

	it("converts * into &times; ", () => {
		expect(escape("*")).to.equal("&times;");
	});	

	it("converts . into &sdot; ", () => {
		expect(escape(".")).to.equal("&sdot;");
	});	

	it("converts ! into &not; ", () => {
		expect(escape("!")).to.equal("&not;");
	});	

	it("Returns empty string if no value or falsy value", () => {
		expect(escape("")).to.equal("");
	});

});

describe("Unescape characters", () => {
	it("converts &amp; into & ", () => {
		expect(unescape("&amp;")).to.equal("&");
	});

	it("converts &quot; into \" ", () => {
		expect(unescape("&quot;")).to.equal("\"");
	});

	it("converts &#27; into ' ", () => {
		expect(unescape("&#27;")).to.equal("'");
	});

	it("converts &lt; into < ", () => {
		expect(unescape("&lt;")).to.equal("<");
	});

	it("converts &gt; into > ", () => {
		expect(unescape("&gt;")).to.equal(">");
	});

	it("converts &#x2F; into / ", () => {
		expect(unescape("&#x2F;")).to.equal("/");
	});

	it("converts &times; into * ", () => {
		expect(unescape("&times;")).to.equal("*");
	});

	it("converts &sdot; into . ", () => {
		expect(unescape("&sdot;")).to.equal(".");
	});

	it("converts &not; into ! ", () => {
		expect(unescape("&not;")).to.equal("!");
	});	

	it("Returns empty string if no value or falsy value", () => {
		expect(unescape("")).to.equal("");
	});


});
