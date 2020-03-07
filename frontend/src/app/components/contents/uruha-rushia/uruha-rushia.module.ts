import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UruhaRushiaRoutingModule } from './uruha-rushia-routing.module';
import { UruhaRushiaComponent } from './uruha-rushia.component';

@NgModule({
    declarations: [UruhaRushiaComponent],
    imports: [CommonModule, UruhaRushiaRoutingModule]
})
export class UruhaRushiaModule {}
