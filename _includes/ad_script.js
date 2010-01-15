function zeroPaddedValue(value) {
	if (value < 10) {
		value = '0' + value;
	}
	return value;
}

function generateTwoDigitRandomIndex(limit) {
	var advertisementIndex = zeroPaddedValue(Math.floor(Math.random() * limit) + 1);
	return advertisementIndex;
}

// Grapevine ad schedules begin on Sunday
function getFirstSundayOfThisWeek() {
	date = new Date(); // Today
	day = date.getDay();
	switch(day) {
		case 0: // Sunday
			// Do nothing
			break;
		case 1: // Monday
			date.setDate(date.getDate() - 1); // Sunday was 1 day ago
			break;
		case 2: // Tuesday
			date.setDate(date.getDate() - 2); // Sunday was 2 days ago
			break;
		case 3: // Wednesday
			date.setDate(date.getDate() - 3); // Sunday was 3 days ago
			break;
		case 4: // Thursday
			date.setDate(date.getDate() - 4); // Sunday was 4 days ago
			break;
		case 5: // Friday
			date.setDate(date.getDate() - 5); // Sunday was 5 days ago
			break;
		case 6: // Saturday
			date.setDate(date.getDate() - 6); // Sunday was 6 days ago
			break;
	}
	return date;
}

function generateEmbedScript() {
	var maxiumumAdvertisementSlots = 7;
	var advertisementIndex = generateTwoDigitRandomIndex(maxiumumAdvertisementSlots);
	
	var date = getFirstSundayOfThisWeek();				
	var year = date.getFullYear();				
	var month = zeroPaddedValue(date.getMonth() + 1);
	var day = zeroPaddedValue(date.getDate());
	
	//var baseUrl = 'http://pencilcasestudios.github.com/grapevine';
	var baseUrl = 'http://grapevine.site';
	var link = baseUrl + '/ad/' + year + '/' + month + '/' + day + '/' + 'ad' + advertisementIndex + '/';
	var script = '<script type="text/javascript" src="' + link + '"\>\</script\>\n';

	return script;
}

document.write(generateEmbedScript());
