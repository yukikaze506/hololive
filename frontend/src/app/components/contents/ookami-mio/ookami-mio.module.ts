import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OokamiMioRoutingModule } from './ookami-mio-routing.module';
import { OokamiMioComponent } from './ookami-mio.component';

@NgModule({
    declarations: [OokamiMioComponent],
    imports: [CommonModule, OokamiMioRoutingModule]
})
export class OokamiMioModule {}
