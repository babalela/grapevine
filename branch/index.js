// Generate the XHTML <script>...</script> block

var current_date = new Date();
var day = current_date.getDate();

var base_url = 'http://pencilcasestudios.github.com/grapevine';
var advertisement_link = base_url + '/ad/2009/11/01/ad' + day + '/';
var script = '<script type="text/javascript" src="' + advertisement_link + '"></script>\n';
var content = script;

document.write(content);
