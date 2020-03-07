import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShiroganeNoelRoutingModule } from './shirogane-noel-routing.module';
import { ShiroganeNoelComponent } from './shirogane-noel.component';

@NgModule({
    declarations: [ShiroganeNoelComponent],
    imports: [CommonModule, ShiroganeNoelRoutingModule]
})
export class ShiroganeNoelModule {}
