import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TokinoSoraRoutingModule } from './tokino-sora-routing.module';
import { TokinoSoraComponent } from './tokino-sora.component';

@NgModule({
    declarations: [TokinoSoraComponent],
    imports: [CommonModule, SharedModule, TokinoSoraRoutingModule]
})
export class TokinoSoraModule {}
