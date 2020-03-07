import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KiryuCocoRoutingModule } from './kiryu-coco-routing.module';
import { KiryuCocoComponent } from './kiryu-coco.component';

@NgModule({
    declarations: [KiryuCocoComponent],
    imports: [CommonModule, KiryuCocoRoutingModule]
})
export class KiryuCocoModule {}
