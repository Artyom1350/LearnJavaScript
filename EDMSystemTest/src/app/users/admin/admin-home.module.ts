import { CommonModule} from '@angular/common';
import { AdminViewGroupJobComponent } from './pages/viewGroupsAndJob/admin.view-group-job.component';
import { AdminGroupsTableComponent } from './pages/viewGroupsAndJob/groupsTable/admin.groupstable.component';
import { AdminViewUsersComponent } from './pages/viewUsers/admin.view-users.component';
import { AdminUsersForm } from './pages/viewUsers/usersForm/admin.users-form.component';
import { AdminViewUsersTableComponent } from './pages/viewUsers/viewUsersTable/admin.view-users.table.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [AdminViewUsersTableComponent,AdminUsersForm, AdminGroupsTableComponent,AdminViewUsersComponent, AdminViewGroupJobComponent],
    exports: [AdminViewUsersTableComponent],
    imports: [FormsModule, ReactiveFormsModule,CommonModule],
})
export class AdminHomeModule{}