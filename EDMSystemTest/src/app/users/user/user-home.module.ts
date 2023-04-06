import { UserOutApplModule } from './pages/outgoingAppl/user.out-appl.module';
import { UserIncApplModule } from './pages/incomingAppl/user.inc-appl.module';
import { UserAllApplComponent } from './pages/allAppl/user.all-appl.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [UserAllApplComponent],
    imports: [UserIncApplModule, UserOutApplModule]
})
export class UserHomeModule{};