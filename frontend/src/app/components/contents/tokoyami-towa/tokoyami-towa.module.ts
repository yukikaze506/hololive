import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokoyamiTowaRoutingModule } from './tokoyami-towa-routing.module';
import { TokoyamiTowaComponent } from './tokoyami-towa.component';

@NgModule({
    declarations: [TokoyamiTowaComponent],
    imports: [CommonModule, TokoyamiTowaRoutingModule]
})
export class TokoyamiTowaModule {}
