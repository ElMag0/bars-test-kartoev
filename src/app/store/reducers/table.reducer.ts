import { createReducer, on } from '@ngrx/store';
import {
  editUserAction,
  getUsersAction,
  getUsersSuccessAction,
} from '../actions/table/table.actions';
import { User } from '../types/userState.interface';

const initialState: User[] = [];

export const tableReducer = createReducer(
  initialState,
  on(getUsersAction, (_) => _),
  on(getUsersSuccessAction, (_, { users }) => users),
  on(editUserAction, (state, user) => {
    const updatedUsers = [...state];

    const updatedUserIndex = updatedUsers.findIndex(
      (item) => user.id === item.id
    );

    updatedUsers[updatedUserIndex] = user;
    return updatedUsers;
  })
);
