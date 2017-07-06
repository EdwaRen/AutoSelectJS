# AutoSelectJS
This javascript tool was used to mass translate locations using the Alberta Township System (ATS) into latitude and longitude coordinates. This was done on the following website: https://locator.scadalink.com/dls2latlng.html

# Guide
For this to work, you would need to run external javascript on an online webpage. Custom Javascript for Websites is a nice Google Chrome extension that does this. Once that is installed, open AutoSelectJS with a text editor and fill out the array on line 3 with your own custom coordinates using ATS addresses (The addresses must be in an array format, MS Excel does a very good job doing this). Make sure that the correct HTML IDs are availible to fill. This can be done by clicking each selection box, the result box, and the action box in that order, and then pressing enter.


# Extraction
Rather than manually code an extraction tool in Javascript to display the web response, Google Chrome already has a tool for this! Go to Developer Tools, then select network and all messages to and from the webserver are recorded for your convenience.
