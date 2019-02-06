/**
 * We have a method, called as "all" that we will see in this code
 */

describe('All Method Implementation', function(){
	it('Test Script 1', function(){
		/*1*/
		browser.get("http://juliemr.github.io/protractor-demo");
		
		/*2*/
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("3");
		
		element(by.id("gobutton")).click();
		
		/*3*/
		element(by.model("first")).sendKeys("4");
		element(by.model("second")).sendKeys("5");
		
		element(by.id("gobutton")).click();
		
		/*4*/
		element(by.model("first")).sendKeys("6");
		element(by.model("second")).sendKeys("7");
		
		element(by.id("gobutton")).click();
		
		/*5. NEW
		 * Get the results of all the 3 calculations from the result table column and display how many values
		 * are getting displayed in the result column.
		 */
		element.all(by.repeater("result in memory")).count().then(function(totalElements){
			console.log(totalElements);
		})
		
		/*6. NEW
		 * Display all the 3 results of the column one by one on the screen
		 */
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
		
	})
})