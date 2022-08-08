import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import {
  getUsersAction,
  getUsersSuccessAction,
} from '../actions/table/table.actions';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';

@Injectable()
export class TableEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  public readonly getUsersEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersAction),
      switchMap(() =>
        this.apiService.getUsers().pipe(
          map((users) => {
            const sortedUsers = users.map((user) => ({
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              phone: user.phone,
            }));

            return getUsersSuccessAction({ users: sortedUsers });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
