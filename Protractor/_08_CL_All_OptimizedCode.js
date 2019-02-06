/**
 * 
 */

describe('Optimized_06_07', function(){
	/*
	 * Create a reusable function to enter and add multiple data sets on the site
	 */
	function Add(a, b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element(by.id("gobutton")).click();
	}
	/*
	 * Always remember, the reusable function always lies outside all it blocks as a separate function
	 */
	
	it('Test Script 1', function(){
		/*
		 * Open the site
		 */
		browser.get("http://juliemr.github.io/protractor-demo");
		/*
		 * Call the above method here...
		 */
		Add(2,3);
		Add(3,3);
		Add(4,3);
		Add(5,3);
		Add(6,3);
		Add(7,3);
		Add(8,3);
		
		/*
		 * Display the total number of reuslts displayed under the result column
		 */
		element.all(by.repeater("result in memory")).count().then(function(totalElements){
			console.log(totalElements);
		})
		
		/*
		 * Display all the values under the Rsult column one by one
		 */
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
	})
})