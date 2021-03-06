/**
 * OFFICIAL REFERENCE:
 * https://www.protractortest.org/#/timeouts
 * 
 * When you want to work with Non Angular apps (websites) using Protractor, you simply can't provide the 
 * url of the non anguar site on the browser.get method.
 * 
 * The reason is because when you provide the url of a site to protracotr, the protractor has it's own 
 * algorithm to first load all the elemnts of that site (considering it to be angular)
 * 
 * Thus, if u simply give the url of the non angular site, it will wait for sometime for all the elements to
 * be loaded, considering them to be angular and after some time, it will simply halt the execution, becuase
 * it won't be able to find any element on the site.
 * 
 * NOTE: When you see the tags have attributes containing the "ng" keyword, it means that the site is angular.
 * 
 * Thus to work with non angular site, you have to use a concept of protractor, called as "timeouts" to let
 * the tool know that it is working with a non angular site and thus, it doesn't have to wait for any angulalr
 * element to be loaded and instead work with non angualar site elements.
 * 
 * As a result of this, we should not invoke a non angular site with an angular site using protractor because,
 * it will get confused and thus won't be able to provide us with the results.
 * 
 * The following code will demonstrate as to how to work with non angular site using Protractor:
 */

describe('Non Angular Site Handling', function(){
	it('Test Script 1: invoking non angular site', function(){
	
		//NEW
		browser.waitForAngularEnabled(false);
		
		browser.get("http://www.yahoo.com");
		
		//Work with rest of the code...
	})
	
	it('Close the browser', function(){
		browser.close();
	})
})