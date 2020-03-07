import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokinoSoraRoutingModule } from './tokino-sora-routing.module';
import { TokinoSoraComponent } from './tokino-sora.component';

@NgModule({
    declarations: [TokinoSoraComponent],
    imports: [CommonModule, TokinoSoraRoutingModule]
})
export class TokinoSoraModule {}
