import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RikkaRoutingModule } from './rikka-routing.module';
import { RikkaComponent } from './rikka.component';

@NgModule({
    declarations: [RikkaComponent],
    imports: [CommonModule, RikkaRoutingModule]
})
export class RikkaModule {}
