import { UserInclApplModalView } from './incomingApplView/user.incl-appl.modal-view.compoment';
import { UserInclApplTableComponent } from './incomingApplTable/user.inc-appl.table.component';
import { UserIncApplComponent } from './user.inc-appl.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [UserIncApplComponent, UserInclApplTableComponent,UserInclApplModalView],
    exports: [UserInclApplTableComponent, UserInclApplModalView]
})
export class UserIncApplModule{}