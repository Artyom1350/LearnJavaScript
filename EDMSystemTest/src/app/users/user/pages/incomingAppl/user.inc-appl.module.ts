import { UserInclApplModalView } from './incomingApplView/user.incl-appl.modal-view.compoment';
import { UserInclApplTableComponent } from './incomingApplTable/user.inc-appl.table.component';
import { UserIncApplComponent } from './user.inc-appl.component';
import { NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


@NgModule({
    declarations: [UserIncApplComponent, UserInclApplTableComponent,UserInclApplModalView],
    exports: [UserInclApplTableComponent, UserInclApplModalView],
    imports: [NgFor, NgIf, FormsModule]
})
export class UserIncApplModule{}