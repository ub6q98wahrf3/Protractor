/**
 * More Assertions: https://jasmine.github.io/2.0/introduction.html
 * TEST SCRIPT:
 * 01. Open chrome browser
 * 02. Go to the following site: http://juliemr.github.io/protractor-demo
 * 03. Enter 2 in the first text field
 * 04. Enter 4 in the second text field
 * 05. Click on Add button
 * 06. NEW: Assert that the value should be 6 (4+2)
 * 07. Also get the result on the console
 * 08. Close the browser (NOTE: This step is not required as protractor does this step automatically)
 */

describe('Jasmine Feature: Assertions', function(){
	it('Test Script 1', function(){
		/* 01, 02 */
		browser.get("http://juliemr.github.io/protractor-demo")
		
		/* 03 */
		element(by.model("first")).sendKeys("2");
		
		/* 04 */
		element(by.model("second")).sendKeys("4");
		
		/* 05 */
		element(by.id("gobutton")).click();
		
		/* 06 */
		/*
		 * NOTE: Promise need not be resolved on the Jasmine feature, it's already been resolved by
		 * the framework itself over the code.
		 */
		expect(element(by.css("h2.ng-binding")).getText()).toBe("6");
		/* 07 */
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		})
	})
	it('Test Script 2: Close Browser', function(){
		/* 08 */
		browser.close().then(function(){
			console.log("Browser successfully closed");
		})
	})
})