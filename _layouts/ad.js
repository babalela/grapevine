// Register this request for an advertisement 

var xmlhttp;
if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
}
else {
	// code for IE6, IE5
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", "http://cgi.sfu.ca/~smaboshe/cgi-bin/register.php" , true);
xmlhttp.send(null);


// Display the content of the advertisement
var content = '<a href="{{ page.target_link }}"><img class="grapevine_image" src="{{ page.advertiser_image }}" alt="{{ page.advertiser_image_text }}" title="{{ page.advertiser_image_text }}" border="0" height="90" /></a>\n';
var content = content + '<p class="grapevine_text">{{ page.advertiser_body_copy }}</p>\n';

document.write(content);
