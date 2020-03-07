import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NatsuiroMatsuriRoutingModule } from './natsuiro-matsuri-routing.module';
import { NatsuiroMatsuriComponent } from './natsuiro-matsuri.component';

@NgModule({
    declarations: [NatsuiroMatsuriComponent],
    imports: [CommonModule, NatsuiroMatsuriRoutingModule]
})
export class NatsuiroMatsuriModule {}
