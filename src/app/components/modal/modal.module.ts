import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal.component';

@NgModule({
    imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule],
    declarations: [ModalComponent],
})
export class EditUserDataModule {}
