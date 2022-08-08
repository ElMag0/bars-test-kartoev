import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TableEffects } from './effects/table.effects';
import { tableReducer } from './reducers/table.reducer';

@NgModule({
  imports: [
    EffectsModule.forRoot([TableEffects]),
    StoreModule.forRoot({ users: tableReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class CustomStoreModule {}
