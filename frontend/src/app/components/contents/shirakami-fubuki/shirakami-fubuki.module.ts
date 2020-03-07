import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShirakamiFubukiRoutingModule } from './shirakami-fubuki-routing.module';
import { ShirakamiFubukiComponent } from './shirakami-fubuki.component';

@NgModule({
    declarations: [ShirakamiFubukiComponent],
    imports: [CommonModule, ShirakamiFubukiRoutingModule]
})
export class ShirakamiFubukiModule {}
