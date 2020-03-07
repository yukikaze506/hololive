import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KishidoTemmaRoutingModule } from './kishido-temma-routing.module';
import { KishidoTemmaComponent } from './kishido-temma.component';

@NgModule({
    declarations: [KishidoTemmaComponent],
    imports: [CommonModule, KishidoTemmaRoutingModule]
})
export class KishidoTemmaModule {}
