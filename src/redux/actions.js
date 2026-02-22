import { nanoid } from "nanoid";

export const addContact = (name, number) => {
	if (!name || !number) return;

	name = name
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

	const newContact = { id: nanoid(), name: name, number: number };

	return { type: "contacts/add", payload: newContact };
};

export const deleteContact = (id) => {
	return { type: "contacts/delete", payload: id };
};

export const setFilter = (filterValue) => {
	return { type: "filter", payload: filterValue };
};
