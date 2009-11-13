// Generate the XHTML <script>...</script> block

var current_date = new Date();
var day = current_date.getDate();

advertisement_link = 'http://grapevine.site/ad/2009/11/01/ad' + day + '/';
var script = '<script type="text/javascript" src="' + advertisement_link + '"></script>\n';
var content = script;

document.write(content);
