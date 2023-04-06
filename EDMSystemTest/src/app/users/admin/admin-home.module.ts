import { AdminViewGroupJobComponent } from './pages/viewGroupsAndJob/admin.view-group-job.component';
import { AdminGroupsTableComponent } from './pages/viewGroupsAndJob/groupsTable/admin.groupstable.component';
import { AdminJobTableComponent } from './pages/viewGroupsAndJob/jobTable/admin.jobtable.component';
import { AdminViewUsersComponent } from './pages/viewUsers/admin.view-users.component';
import { AdminUsersForm } from './pages/viewUsers/usersForm/admin.users-form.component';
import { AdminViewUsersTableComponent } from './pages/viewUsers/viewUsersTable/admin.view-users.table.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AdminViewUsersTableComponent,AdminUsersForm, AdminJobTableComponent, AdminGroupsTableComponent,AdminViewUsersComponent, AdminViewGroupJobComponent],
    exports: [AdminViewUsersTableComponent]
})
export class AdminHomeModule{}