import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinatoAquaRoutingModule } from './minato-aqua-routing.module';
import { MinatoAquaComponent } from './minato-aqua.component';

@NgModule({
    declarations: [MinatoAquaComponent],
    imports: [CommonModule, MinatoAquaRoutingModule]
})
export class MinatoAquaModule {}
