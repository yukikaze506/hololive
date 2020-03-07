import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AkiRosenthalRoutingModule } from './aki-rosenthal-routing.module';
import { AkiRosenthalComponent } from './aki-rosenthal.component';

@NgModule({
    declarations: [AkiRosenthalComponent],
    imports: [CommonModule, AkiRosenthalRoutingModule]
})
export class AkiRosenthalModule {}
