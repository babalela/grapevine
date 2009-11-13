// Display content
var content = '<a href="{{ page.target_link }}">';
var content = content + '<img src="{{ page.advertiser_image }}" alt="{{ page.advertiser_image_text }}" title="{{ page.advertiser_image_text }}" /><br />\n';
var content = content + '</a>\n';
var content = content + '<p>{{ page.advertiser_body_copy }}</p>\n';

document.write(content);
