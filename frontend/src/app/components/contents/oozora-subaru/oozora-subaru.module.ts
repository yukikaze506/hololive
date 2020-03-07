import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OozoraSubaruRoutingModule } from './oozora-subaru-routing.module';
import { OozoraSubaruComponent } from './oozora-subaru.component';

@NgModule({
    declarations: [OozoraSubaruComponent],
    imports: [CommonModule, OozoraSubaruRoutingModule]
})
export class OozoraSubaruModule {}
