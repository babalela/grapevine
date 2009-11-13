// Display the content of the advertisement

var content = '<a href="{{ page.target_link }}"><img class="grapevine_image" src="{{ page.advertiser_image }}" alt="{{ page.advertiser_image_text }}" title="{{ page.advertiser_image_text }}" border="0" height="90" /></a>\n';
var content = content + '<p class="grapevine_text">{{ page.advertiser_body_copy }}</p>\n';

document.write(content);
