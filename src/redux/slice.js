import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, loadMore, updateUsers } from './operations';

const initialState = {
  users: [],
  following: [],
  isLoading: false,
  page: 1,
  showLoadMore: true,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.users = action.payload;
      state.page++;
      state.isLoading = false;
    },
    [fetchUsers.rejected](state) {
      state.isLoading = false;
    },
    [updateUsers.fulfilled](state, action) {
      const index = state.following.indexOf(action.payload.data.id);
      action.payload.isFollowed
        ? state.following.splice(index, 1)
        : state.following.push(action.payload.data.id);
      state.users = state.users.map(user =>
        user.id === action.payload.data.id ? action.payload.data : user
      );
    },
    [loadMore.pending](state) {
      state.isLoading = true;
    },
    [loadMore.fulfilled](state, action) {
      action.payload.length < 3 ? (state.showLoadMore = false) : state.page++;
      state.users = [...state.users, ...action.payload];
      state.isLoading = false;
    },
  },
});

export const usersReducer = usersSlice.reducer;
