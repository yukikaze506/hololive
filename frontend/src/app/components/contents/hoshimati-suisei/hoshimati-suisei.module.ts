import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoshimatiSuiseiRoutingModule } from './hoshimati-suisei-routing.module';
import { HoshimatiSuiseiComponent } from './hoshimati-suisei.component';

@NgModule({
    declarations: [HoshimatiSuiseiComponent],
    imports: [CommonModule, HoshimatiSuiseiRoutingModule]
})
export class HoshimatiSuiseiModule {}
