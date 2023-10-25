import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.table.items;
export const getFilter = state => state.filter;
export const getError = state => state.table.error;
export const getIsLoading = state => state.table.isLoading;

export const filteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

