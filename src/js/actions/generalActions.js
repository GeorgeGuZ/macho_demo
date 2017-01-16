export function fetchGeneralInfo (dispatch){
	return {
		type: "FETCH_GENERAL_INFO", 
		payload: {
			menuItems: ["Products", "Works", "Team", "About", "Contact Us"]
		}
	};
}

export function downloadAppClicked () {
	return {
		type: "DOWNLOAD_APP_CLICKED"
	};
}

export function contactUsClicked () {
	return {
		type: "CONTACT_US_CLICKED"
	};
}