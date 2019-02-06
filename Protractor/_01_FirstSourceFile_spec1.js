	/**
	 * describe(<TestSuiteName>,<Function>(){<ThisBlockWillHaveAllTestsieItBlocks>});
	 * it(<TestCaseName>,<Function>(){<LogicOfCorrespondingTestCaseInsideTheItBlock>});
	 */
describe('Protractor Baby Steps', function(){
	it('Open Angular JS Website', function(){
		/*
		 * In Protractor, if you want to land on a specific website, use the follwonig statemetn:
		 */
		browser.get("https://angularjs.org");
		/*
		 * Next Question will be "Which browser it will open??". So by default, Protractor runs on the
		 * chrome browser, unless you mention a different browser in the "configurtaion.file"
		 */
		
		/*
		 * Run the test as shown above using the following steps:
		 * Start the protractor server by providing the following command: sudo webdriver-manager start
		 * Click on Run > Configuations 
		 * Under "Node Application", you will finde ProtractTestRunner file in it. 
		 * Run the file.
		 */
		
		/*
		 * Now let's put one more site to open. Make sure you use this site only and not any non
		 * angular site such as "google.com". Otherwise it will throw an error saying, "you need to add
		 * one more configuration file ... and so on"
		 */
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			/*
			 * Initially, this code was outside the function block as we wanted to understand the prob
			 * of asynchronicity. But since we have achieved synchronicity (execute the block only after
			 * executing the above line, thus commening the browser.sleep(9000) line...
			 */
			/*
			 * Now let's wait for 9 seconds and then print something in the console
			 */
//			browser.sleep(9000);
			console.log("I am the last step to execute");
		})
		
		
		
		/*
		 * Now run the test: Run > Run Configurations... > ProtractorTestRunner > Run
		 */
		
		/*
		 * You realise that the output "I am the last.." got executed first, even without the first site
		 * being loaded. Then, even the second site did not wait for 9 seconds and got loaded before the 
		 * time. However after loading both sites, the control waits for the entire 9 secs we provided,
		 * but the execution got over.
		 * 
		 * This is because we are using Javascript in our test script and JS is ASYNCHRONOUS.
		 * 
		 * That is why you never know in which order the steps will execute.
		 * 
		 * That is why it become very tough to write test scripts in JS as when we write the test scripts
		 * we first expected the first instruction to be executed, followed by 2nd instruction and so on...
		 * 
		 */
	})
	
	it('Close the browser', function(){
		//Raw protractor code
	})
	
	/*
	 * As you have seen in the output "2 specs" got executed instead of 1. Because in Jasmine framework,
	 * each "it" block is considered as a "spec".
	 */
})