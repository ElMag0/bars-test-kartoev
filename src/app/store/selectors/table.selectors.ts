import { createSelector } from "@ngrx/store";
import { User, UserState } from "../types/userState.interface";


export const selectUsers = (state: UserState) => state.users;

export const getSelectUsers = createSelector(
    selectUsers,
    (users: User[]) => users
);


