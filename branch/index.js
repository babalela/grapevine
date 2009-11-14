// Select a random advertisement for this month and generate the appropriate XHTML <script>...</script> block

var available_slots = 7;

// Generate a random index between 1 and available_slots
var advertisement_index = (Math.floor(Math.random() * available_slots)) + 1;

// Generate a two digit advertisement index if necessary
// -- I really should use a function for this code!
if (advertisement_index < 10) {
	advertisement_index = '0' + advertisement_index;
}

var current_date = new Date();
var year = current_date.getFullYear();
var month = current_date.getMonth() + 1;
var day = '01'; // The first of the month marks the start of a new advertisement cycle

// Generate two digit months if necessary e.g. January is month '01'
if (month < 10) {
	month = '0' + month;
}

// var base_url = 'http://pencilcasestudios.github.com/grapevine';
var base_url = 'http://grapevine.site';

var advertisement_link = base_url + '/ad/' + year + '/' + month + '/' + day + '/ad' + advertisement_index + '/';
var script = '<script type="text/javascript" src="' + advertisement_link + '"></script>\n';
var content = script;

document.write(content);
