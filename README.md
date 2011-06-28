DateGenerator
========

DateGenerator is a simple date input generator. It takes a hidden field, creates three select boxes (month, date, year), and changes the value of that hidden field upon user interaction.

Usage
-----

Using DateGenerator is simple. Just create a hidden field, then pass that as the first argument in dateGenerator.

	<input type="hidden" name="some_name" value="" id="foo" />
	
	// call the dateGenerator method
	dateGenerator(document.getElementById('foo'))
	
Options
-----

DateGenerator accepts an options object as it's second argument. Below are the available options:

**month** *string*

`"numbers"` Use numbers for month, ie 1, 2, 3

`"abbreviated"` Use abbreviated month names, ie Jan, Feb, Mar

**validation** *object* Run a check whenever a complete date is given from the user

`min` *int* optional, check for minimum age

`max` *int* optional, check for maximum age

`callback` *function* optional, what to do if validation is triggered

Supported Browsers
------------------

  * Firefox 3.5+
  * Google Chrome
  * Internet Explorer 7+
  * Safari 3+
  * Mobile Safari
  * Android

Other browsers probably work, but I haven't tested them.

License
-------

Copyright (c) 2011 Donald Cook (donald.cook@dachisgroup.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.