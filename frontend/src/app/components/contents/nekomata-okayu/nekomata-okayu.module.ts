import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NekomataOkayuRoutingModule } from './nekomata-okayu-routing.module';
import { NekomataOkayuComponent } from './nekomata-okayu.component';

@NgModule({
    declarations: [NekomataOkayuComponent],
    imports: [CommonModule, NekomataOkayuRoutingModule]
})
export class NekomataOkayuModule {}
