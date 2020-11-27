function showMenu() {
	// body...
	var title = document.getElementById('title');
	if (title != null) {
		if (title.style.display != "block") {
			title.style.display = "block";
		} 
		else {
			title.style.display = "";
		}
	}
	
}