import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://63eca9df32a08117239f52cb.mockapi.io';
axios.defaults.baseURL = BASE_URL;

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/users?page=1&limit=3');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const loadMore = createAsyncThunk(
  'users/fetchNext',
  async(page, thunkApi) => {
    try{
      const response = await axios.get(`/users?page=${page}&limit=3`);
      return response.data;
    }catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const updateUsers = createAsyncThunk(
  'users/update',
  async (credentials, thunkApi) => {
    try {
      const { user, isFollowed } = credentials;
      const { data } = await axios.put(`/users/${user.id}`, {followers: user.followers});
      return { data, isFollowed };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
