import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RobocoSanRoutingModule } from './roboco-san-routing.module';
import { RobocoSanComponent } from './roboco-san.component';

@NgModule({
    declarations: [RobocoSanComponent],
    imports: [CommonModule, RobocoSanRoutingModule]
})
export class RobocoSanModule {}
