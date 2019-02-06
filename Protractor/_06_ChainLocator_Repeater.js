/**
 * When an element is located using "ng-repeat", the the locator is known as "repeater" and is provided as 
 * shown below:
 * 	element(By.repeat("repeat_value"));
 * When you provide the above statement, the scope of element finding will be confined to the section of the
 * element having "ng-repeat" attribute only and not on the enteire page.
 * 
 * As a result, if there are multiple elements on the page, that has, let's say the same css locator value,
 * then using this way, we can locate that specific element that is specific (or a child) of the repeater 
 * locator only and not related to the entiere page
 * 
 * Thus, in such cases, repeater locator can be used efficiently.
 */

describe('Chain Locators', function(){
	it('Test Script 1', function(){
		
		/*
		 * Get navigated to the following site: http://juliemr.github.io/protractor-demo
		 */
		browser.get("http://juliemr.github.io/protractor-demo");
		
		/*
		 * Enter first operand in the first text field
		 */
		element(by.model("first")).sendKeys("2");
		
		/*
		 * Enter second operand in the second text field
		 */
		element(by.model("second")).sendKeys("3");
		
		/*
		 * Click on the Go button
		 */
		element(by.id("gobutton")).click(); 
		
		/*
		 * NEW:
		 * Wait for the results to be calculated and displayed under the "Result" column of the table present
		 * below the calculation part on the page, fetch the result from the that place and display it on hte 
		 * screen.
		 */
		
		/*
		 * For this we will use repeater concept as shown below:
		 */
		/*
		 * 01. Inspect the "Reuslt" element form the table from where we would like to show the value on the
		 * screen.
		 * 02. Click on the element having "ng-repeat" attribute (its parent) on the source code.
		 * 03. Locate the "result" elemnt using repeater locator and work on it accordingly as shown below:
		 */
		//element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
		
		/*
		 * The problem is the above line won't work because, we are performing a get operation on the browser
		 * and whenever we are performing a get oeprtiona on the browser, we have to RESOLVE THE PROMISE. Thus
		 * the above statement should be modified to be worked upon as shown below:
		 */
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})
		
		/*
		 * NOTE: 
		 * For using the chain locators, the "repeater" locator is not always necessarily used.
		 * 
		 * The Chain locators, as the name suggests, refers to chaining multiple elements to get to a particular
		 * element on the page and work with it.
		 * However, a "repeater" is nothing but one of the locators (like css, id, model)that is to be used with
		 * "by" class and whenever the attribute name itself is "ng-repeat"
		 * 
		 * For eg: to select the multiply operator from the dropdonw, we can locate the same by chaining the
		 * locators as shown below:
		 * 
		 * element(by.model("operator")).element(by.css("option:nth-value(4)")).click();
		 * 
		 * And one more key takeaway is that, using the concept of chain locator we can locate one of many elemnets
		 * of the page that has the same css value on the enteire page.
		 */
	})
})