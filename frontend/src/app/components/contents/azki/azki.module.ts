import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AZKiRoutingModule } from './azki-routing.module';
import { AzkiComponent } from './azki.component';

@NgModule({
    declarations: [AzkiComponent],
    imports: [CommonModule, AZKiRoutingModule]
})
export class AZKiModule {}
