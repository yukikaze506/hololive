import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoushoumarineRoutingModule } from './houshoumarine-routing.module';
import { HoushoumarineComponent } from './houshoumarine.component';

@NgModule({
    declarations: [HoushoumarineComponent],
    imports: [CommonModule, HoushoumarineRoutingModule]
})
export class HoushoumarineModule {}
