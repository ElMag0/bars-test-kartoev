import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUsersAction } from 'src/app/store/actions/table/table.actions';
import { getSelectUsers } from 'src/app/store/selectors/table.selectors';
import { User } from 'src/app/store/types/userState.interface';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  isLoading$: Observable<boolean>;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];

  dataSource$: Observable<User[]> = this.store.select(getSelectUsers);

  constructor(
    private store: Store<{ users: User[] }>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getUsersAction());
  }

  changeTableUserData(data: User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.data = data;

    this.dialog.open(ModalComponent, dialogConfig);
  }
}
