import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HimemoriLunaRoutingModule } from './himemori-luna-routing.module';
import { HimemoriLunaComponent } from './himemori-luna.component';

@NgModule({
    declarations: [HimemoriLunaComponent],
    imports: [CommonModule, HimemoriLunaRoutingModule]
})
export class HimemoriLunaModule {}
