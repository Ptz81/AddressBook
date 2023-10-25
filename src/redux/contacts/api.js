import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';
export const fetchContacts = createAsyncThunk(
  'table/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/table/');
      return response.data;
      
    } catch (error) {
   
      return thunkAPI.rejectWithValue(error.message);
    }
  }
 
);


export const createContacts = createAsyncThunk(
  'table/createContact',
  async (table, thunkAPI) => {
    try {
      const response = await axios.post('/table/', table);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'table/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/table/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);