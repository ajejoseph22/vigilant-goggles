import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../../shared/shared.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  imports: [UserRoutingModule, SharedModule, NzCheckboxModule],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
