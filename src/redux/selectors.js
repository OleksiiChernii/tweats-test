export const selectUsers = state => {
    const filter = state.filter.filter;
    const users = state.users.users;
    const following = state.users.following;
    const isFollowingPredicate = user => following.some(id => id === user.id);
    const isFollowPredicate = user => !following.some(id => id === user.id);
    if(filter === 'all'){
        return users;
    }else if(filter === 'follow'){
        return users.filter(isFollowPredicate);
    } else if(filter === 'following'){
        return users.filter(isFollowingPredicate);
    }
};
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.users.isLoading;
export const selectPage = state => state.users.page;
export const selectLoadMore = state => state.users.showLoadMore;
export const selectFollowing = state => state.users.following;