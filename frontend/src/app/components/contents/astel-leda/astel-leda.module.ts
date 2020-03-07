import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AstelLedaRoutingModule } from './astel-leda-routing.module';
import { AstelLedaComponent } from './astel-leda.component';

@NgModule({
    declarations: [AstelLedaComponent],
    imports: [CommonModule, AstelLedaRoutingModule]
})
export class AstelLedaModule {}
