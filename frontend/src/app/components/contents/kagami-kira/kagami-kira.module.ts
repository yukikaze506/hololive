import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KagamiKiraRoutingModule } from './kagami-kira-routing.module';
import { KagamiKiraComponent } from './kagami-kira.component';

@NgModule({
    declarations: [KagamiKiraComponent],
    imports: [CommonModule, KagamiKiraRoutingModule]
})
export class KagamiKiraModule {}
