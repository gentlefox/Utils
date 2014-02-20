Utils
=====

Utility functions autoinitialising in a Sencha Touch environment.

MyApp.Util.NAME

- getPostedTime, conversion of a date into a text duration since, ie "3 hours ago".
- unTard, uniformity in CMS encoding output, especially valuable when a right-side quotation mark can be 
```
&rsquo; &#39; or '
```
Yes, you know exactly when this is necessary - for unknown client input being delivered from server to cater for 4 levels of single quotes including embedded abbreviations.
- openLink, creates a hidden A-tag with a click event, to autofire a given href. Perfect for social links from a web app requiring an external location, avoiding issues that can occur from security and event timing.
- cookies
- localStorage
- delay, the epicly simple means to reset timeout duration for things such as onKeypress to not fire a method until a set time since last occurance. Perfect for search input ajax calls.

MyApp.config.Runtime
====================
Contains an app config Runtime, for collating variables required throughout the app. A pleasant means equating of globally accessing variables.

ie:
MyApp.config.Runtime.getMyRequiredVariable();
MyApp.config.Runtime.setMyRequiredVariable(12345);
