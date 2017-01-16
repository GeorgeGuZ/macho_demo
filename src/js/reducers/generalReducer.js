export default function reducer (
	state={menuItems: [], contactUs: 0, downloadApp: 0}, action
	){
	switch (action.type) {
		case "FETCH_GENERAL_INFO": {
			state = {...state, menuItems: action.payload.menuItems,};
			break;
		}
		case "DOWNLOAD_APP_CLICKED": {
			state.downloadApp++;
			break;
		}
		case "CONTACT_US_CLICKED": {
			state.contactUs++;
			break;
		}
	}
	return state;
}