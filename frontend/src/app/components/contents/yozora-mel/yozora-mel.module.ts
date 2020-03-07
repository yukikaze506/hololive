import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YozoraMelRoutingModule } from './yozora-mel-routing.module';
import { YozoraMelComponent } from './yozora-mel.component';

@NgModule({
    declarations: [YozoraMelComponent],
    imports: [CommonModule, YozoraMelRoutingModule]
})
export class YozoraMelModule {}
