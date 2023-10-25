import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createContacts, deleteContacts, fetchContacts } from "./api.js";
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./service.js";

const initialState = {
      items: [],
      isLoading: false,
      error: null
}

export const contactsSlice = createSlice({
  name: 'table',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled,handleFulfilledGet)
      .addCase(createContacts.fulfilled, handleFulfilledCreate)
      .addCase(deleteContacts.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(
        ...thunkFunction('fulfilled')
      ), handleFulfilled
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('pending')
      ), handlePending
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('rejected')
      ), handleRejected
    )
  }
});
export const tableReducer = contactsSlice.reducer;