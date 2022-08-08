import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { TableComponent } from './table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserDataModule } from '../modal/modal.module';

@NgModule({
  imports: [
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    EditUserDataModule,
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
