/**
 * This file is used to run all the specs we want to execute.
 */
exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub', // This statement is
														// called as 'direct
														// connect'
	specs : [ '_08_CL_All_OptimizedCode.js' ],
	/*
	 * By default, protractor executes the test scripts in Chrome browser.
	 * However, if you want to execute the test scripts (.js files) in Firefox
	 * we have to provide follwoing code snippet in the configuration file:
	 */
	// capabilities : {
	// 'browserName' : 'firefox'
	// }
	/*
	 * Currently for Firefox, the protractor is not working (it's a raised
	 * issue). But it's currently working with Safari and this can be seen as
	 * shown below:
	 */
	// capabilities : {
	// 'browserName' : 'safari'
	// }
	/*
	 * But the problem is with safari and IE, protractor is not stable. Only with
	 * Chrome and Firefox, it is. So it's always suggested to use browser in the
	 * following pattern: Chrome -> Firefox -> Safari -> IE
	 * But commenting all the above code, as we would want to work with Chrome only
	 */
};