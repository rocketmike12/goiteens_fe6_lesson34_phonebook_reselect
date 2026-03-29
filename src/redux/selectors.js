import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filter;
export const selectContacts = (state) => state.contacts;

export const getContacts = createSelector([selectFilter, selectContacts], (filter, contacts) =>
	contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.toLowerCase().includes(filter))
);
