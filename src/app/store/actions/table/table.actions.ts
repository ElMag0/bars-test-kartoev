import { createAction, props } from '@ngrx/store';
import { User } from '../../types/userState.interface';
import { ActionTypes } from '../actionTypes';

export const getUsersAction = createAction(
  ActionTypes.GET_USERS
);

export const getUsersSuccessAction = createAction(
  ActionTypes.GET_USERS_SUCCESS,
  props<{ users: User[] }>()
);

export const editUserAction = createAction(
  ActionTypes.EDIT_USER,
  props<User>()
);
