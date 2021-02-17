import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [UserRoutingModule, SharedModule],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
