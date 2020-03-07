import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AkaiHaatoRoutingModule } from './akai-haato-routing.module';
import { AkaiHaatoComponent } from './akai-haato.component';

@NgModule({
    declarations: [AkaiHaatoComponent],
    imports: [CommonModule, AkaiHaatoRoutingModule]
})
export class AkaiHaatoModule {}
