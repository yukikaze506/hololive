import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MurasakiShionRoutingModule } from './murasaki-shion-routing.module';
import { MurasakiShionComponent } from './murasaki-shion.component';

@NgModule({
    declarations: [MurasakiShionComponent],
    imports: [CommonModule, MurasakiShionRoutingModule]
})
export class MurasakiShionModule {}
