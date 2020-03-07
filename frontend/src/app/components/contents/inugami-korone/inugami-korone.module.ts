import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InugamiKoroneRoutingModule } from './inugami-korone-routing.module';
import { InugamiKoroneComponent } from './inugami-korone.component';

@NgModule({
    declarations: [InugamiKoroneComponent],
    imports: [CommonModule, InugamiKoroneRoutingModule]
})
export class InugamiKoroneModule {}
