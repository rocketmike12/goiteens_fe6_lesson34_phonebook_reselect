import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState =  [];

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: (state, action) => {
			if (state.filter((contact) => contact.name.toLowerCase() === action.payload.name.toLowerCase()).length) {
				alert(`${action.payload.name} is already in contacts`);
				return;
			}

			let name = action.payload.name
				.split(" ")
				.map((word) =>
					word
						.split("-")
						.map((el) =>
							el.includes("'")
								? el.slice(0, el.indexOf("'") + 1) + el.charAt(el.indexOf("'") + 1).toUpperCase() + el.slice(el.indexOf("'") + 2).toLowerCase()
								: el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
						)
						.join("-")
				)
				.join(" ");

			const newContact = { id: nanoid(), name: name, number: action.payload.number };

			return [...state, newContact];
		},

		deleteContact: (state, action) => {
			return state.filter((el) => el.id !== action.payload);
		}
	}
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
