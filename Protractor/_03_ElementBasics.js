/**
 * STEPS:
 * 01. Go to the following site: juliemr.github.io/protractor-demo/
 * 
 * If you want to automate any angular website, you just can't pick the random one. The reason behind
 * is after 4 times you run a script, you will be displayed with the msg stating "Site is not allowing
 * you to load the page" because it detected some robotic or automation script. It says that "we have
 * received some traffic that is either not authenticated or robotic in nature, thus we are blocking
 * your execution.
 * 
 * In that case you will not be allowed to automate that site probably for 24 hrs.
 * 
 * This happens because there is a feature in angular site where you can listen to the robotic traffic
 * and detect it. Thus after working for 3-4 times, the site will not be working for you.
 * 
 * Because of this, we have developed one eCommerce website where you can practice and play around 
 * there.
 * 
 * But before going there, first we should be clared with all the protractor concepts.
 * 
 * Thus we will be using the website mentinoed above for practice our concept.
 * 
 * Then you may have the doubt stating why the trainer is using such an easy website for practice. But
 * that's not true, once you done with next 6 to 8 lectures you will realise as to how complex this page
 * is.
 * 
 * This site is provided to us by protractor site, and they say that if you can automate this site, then
 * you can automate any angular website.
 */

/**
 * Now, let's start of with basic operation first.
 * 02. Enter 3 in the first text field.
 * 
 * But before that if you see the following page: https://www.protractortest.org/#/api-overview
 * You will understand that, protractor by default exports the following "Global Variables" to our 
 * spec file:
 * - browser
 * - element
 * - by
 * - protractor
 * 
 * A "browser" is a wrapper around the instance of WebDriver that is used for navigation and page-
 * wide information
 * 
 * An "element" is a method for finding and interacting with the DOM elements on the page. It searches
 * for the element on the page. But for searching, it requires one parameter, known as the "locator
 * strategy" for locating the element.
 * Thus now our challenge is to how to find the locator strategy.
 * 
 * The "by" is a collection of all element locator strategies.
 * 
 * The "protractor" is the namespace that wraps the WebDriver namespace.
 */

/**
 * Now let's see how to create a locator strategy.
 * - Go to the following site: https://www.protractortest.org/#/locators
 * 
 * here you will understand that a locator tells protractor as to how to find certain DOM elements.
 * THe main thing is the Protractor supports all the locators that are supported by selenium. In addition,
 * it also supports its own version of methods for angular sites
 * 
 * NOTE: Whenever you see "ng" in your code, that means it's an angular.js website code and you have to 
 * use Protractor for stable operation.
 * 
 * We can use any locator that is mentioned on their official site. However, the most common ones that
 * are to be used as suggested by the angular guys are as follows:
 * CSS (eg. by.css(''))
 * ID (eg. by.id(''))
 * Name (eg. by.name(''))
 * model (only for angularJS apps) (eg. by.model(''))
 * binding (only for AngularJS apps) (eg. by.binding(''))
 */

/**
 * Now with all the above knowledge, let's understand how to perform Step 02 above.
 */

describe('Protractor Elements Demo', function(){
	it('Locators', function(){
		//Get navigated to the site
		browser.get("http://juliemr.github.io/protractor-demo/");
		//Identify the edit box where 3 is to be entered and enter 3 in the text field
		element(by.model("first")).sendKeys("3");
		//Identify the edit box where 4 is to be entered and enter 4 in the text field
		element(by.model("second")).sendKeys("4");
		//Click on the "Go" button
		element(by.id("gobutton")).click();
//		.then(function(){
//			browser.sleep(5000);
//		})
		//Fetch the value of the result using css and display on the console:
		
	//console.log(element(by.css("h2[class='ng-binding']")).getText());
		
		//But with the above line, you will not be able to see the output (desried). AN error iwll be
		//displayed.
		//The reason, getText() will return a promise. But we are not resolving the promise (using then)
		//Thus, real output will be displayed on when you resolve the promise 
		//And protractor resolves promise 90% of the times
		//If promise is not resolved, then there could be 2 potential problems.
		//1. Sequence is not guaranteed
		//THus the above statement should be written in the following way:
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){ //getText text is stored in the function's argument "text"
			console.log(text);
		})
	})
})

/**
 * Now after writing the above program:
 * 01. Go to configuration.js file
 * 02. Change the file name under "specs" to "ElementBasics.js"
 * 03. Right click "configuration.js" file
 * 04. Run Configurations...
 * 05. Select Protractor TestRunner.
 * 06. Make sure the configuration file name is entered under "Arguments" tab
 * 07. Run the protractor (webdriver-manager) server on the terminal (using the command:
 * 		sudo webdriver-manager start
 * 08. Then click on "Run" button on the "configuration.js" file's "Test Runner" dialog.
 */

/**
 * But the problem with the above execution is that, the speed will be very fast and you won't be
 * able to see the things getting entered on the screen.
 * 
 * So to see the entering of hte text in the field, we will pass 5 second wait as shown in the above
 * test script.
 */

/** Session 32 */

/**
 * - Next, click on the "GO" Button on the site in the above code.
 * 
 * Remember, you are asked to enter hte values click on the button but is not asked to get the display
 * result value.
 * 
 * If that is the case, then we have to first wait for the reasult ot be displayed,
 * grab the result and display it on the consoel.
 * 
 * Let's also write teh script to grab the value and display on the screen.
 * 
 * But the problem with the result value is that, the corresondin elemnt is not having any specific
 * locator using which we can locate the element (except class='ng-binding' and "binding" concept 
 * we will understand later...)
 * Thus we can make use of the cssSelector. 
 * 
 * It should be rememebtered that we can locate any elemnt using cssSeelctor on the page and css will
 * define the object based on the properties of hte corresponding elemnt (object)
 */

/**
 * NOTE: Protractor guys have simply told us to avoid using xpath for locating elements on the angular
 * sites. You can still use, it's not like it will fail, but they say it's little slow when we use
 * xpath.
 * 
 * There is one more powerful locator, called as "Repeater" that we will use later.
 */

/**
 * Thus, remember, you need not provide any sleep or synchronization in the script. The protractor
 * is intelligent enough to take care of it. However, the promise should be resolved for all the test
 * steps. That's it.
 */
