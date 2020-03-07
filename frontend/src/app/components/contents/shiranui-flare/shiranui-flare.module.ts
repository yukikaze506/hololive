import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShiranuiFlareRoutingModule } from './shiranui-flare-routing.module';
import { ShiranuiFlareComponent } from './shiranui-flare.component';

@NgModule({
    declarations: [ShiranuiFlareComponent],
    imports: [CommonModule, ShiranuiFlareRoutingModule]
})
export class ShiranuiFlareModule {}
