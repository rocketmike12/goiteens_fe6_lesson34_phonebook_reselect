const contacts = JSON.parse(localStorage.getItem("phonebookContacts")) || [];

const initialState = {
	contacts: contacts,
	filter: ""
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "contacts/add":
			if (contacts.filter((contact) => contact.name.toLowerCase() === action.payload.name.toLowerCase()).length) {
				alert(`${action.payload.name} is already in contacts`);
				return;
			}

			localStorage.setItem("phonebookContacts", JSON.stringify([...state.contacts, action.payload]));
			return { ...state, contacts: [...state.contacts, action.payload] };

		case "contacts/delete":
			localStorage.setItem("phonebookContacts", JSON.stringify(state.contacts.filter((el) => el.id !== action.payload)));
			return { ...state, contacts: state.contacts.filter((el) => el.id !== action.payload) };

		case "filter":
			return { ...state, filter: action.payload };

		default:
			return state;
	}
};
