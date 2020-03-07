import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmaneKanataRoutingModule } from './amane-kanata-routing.module';
import { AmaneKanataComponent } from './amane-kanata.component';

@NgModule({
    declarations: [AmaneKanataComponent],
    imports: [CommonModule, AmaneKanataRoutingModule]
})
export class AmaneKanataModule {}
