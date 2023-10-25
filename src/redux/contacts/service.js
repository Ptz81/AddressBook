import { createContacts, deleteContacts, fetchContacts } from "./api.js"

const arrThunk = [createContacts, deleteContacts, fetchContacts]
export const thunkFunction = (type)=>arrThunk.map(el=>el[type])
export const handlePending = (state) => {
  state.isLoading = true
}
export const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}
export const handleFulfilled = (state) => {
  state.isLoading = false
  state.error = ''
}
export const handleFulfilledGet = (state, action) => {
  const results = action.payload.results;
  state.items = results;
  
}
  export const handleFulfilledCreate = (state, action) => {
      state.items.push(action.payload)
        }
  export  const handleFulfilledDelete = (state, action) => {
      state.items = state.items.filter(item => item.id!==action.payload.id)
    }