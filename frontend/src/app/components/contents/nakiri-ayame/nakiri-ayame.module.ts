import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NakiriAyameRoutingModule } from './nakiri-ayame-routing.module';
import { NakiriAyameComponent } from './nakiri-ayame.component';

@NgModule({
    declarations: [NakiriAyameComponent],
    imports: [CommonModule, NakiriAyameRoutingModule]
})
export class NakiriAyameModule {}
