import { AuthLeaveComponent } from './users/auth/auth-leave.component';
import { QuestGuard } from './users/auth/guards/quest.guard';
import { AdminGuard } from './users/auth/guards/admin.guard';
import { UserGuard } from './users/auth/guards/user.guard';
import { UserIncApplComponent } from './users/user/pages/incomingAppl/user.inc-appl.component';
import { UserOutApplComponent } from './users/user/pages/outgoingAppl/user.out-appl.component';
import { UserAllApplComponent } from './users/user/pages/allAppl/user.all-appl.component';
import { AdminViewUsersComponent } from './users/admin/pages/viewUsers/admin.view-users.component';
import { AdminViewGroupJobComponent } from './users/admin/pages/viewGroupsAndJob/admin.view-group-job.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found.component';
import { AuthComponent } from './users/auth/auth.component';
import { AdminHomeComponent } from './users/admin/admin-home.component';
import { UserHomeComponent } from './users/user/user-home.component';



const childrenAdminRoutes: Routes=[
  {path:'groupsJob', component: AdminViewGroupJobComponent},
  {path:'users', component: AdminViewUsersComponent}
]

const childrenUserRoutes: Routes=[
  {path:'allApll',component:UserAllApplComponent},
  {path:'incApll',component:UserIncApplComponent},
  {path:'outApll',component:UserOutApplComponent}
]

const appRoutes: Routes=[
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {
    path: 'user',
    component:UserHomeComponent,
    children: childrenUserRoutes,
    canActivate: [UserGuard]
  },
  {
    path: 'admin',
    component:AdminHomeComponent,
    children: childrenAdminRoutes,
    canActivate: [AdminGuard]
  },
  {
    path: 'login',
    component:AuthComponent,
    canActivate: [QuestGuard]
    
  },
  {
    path: 'leave',
    component: AuthLeaveComponent
  },
  {path: '**',component:NotFoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
