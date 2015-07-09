$( function () {
	// Display not all unimportant in project
	$("#calendar > div.fc-toolbar > div.fc-left > h2,\
		#calendar > div.fc-view-container > div > table > tbody > tr > td > div.fc-day-grid").css("display", "none");

	var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	$("#calendar > div.fc-view-container > div > table > thead > tr > td > div > table > thead > tr > th.fc-day-header").each( function (i) {
		$(this).html(day[i]);
	});
})