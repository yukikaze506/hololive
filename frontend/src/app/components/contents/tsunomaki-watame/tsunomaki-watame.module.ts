import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TsunomakiWatameRoutingModule } from './tsunomaki-watame-routing.module';
import { TsunomakiWatameComponent } from './tsunomaki-watame.component';

@NgModule({
    declarations: [TsunomakiWatameComponent],
    imports: [CommonModule, TsunomakiWatameRoutingModule]
})
export class TsunomakiWatameModule {}
