import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsadaPekoraRoutingModule } from './usada-pekora-routing.module';
import { UsadaPekoraComponent } from './usada-pekora.component';

@NgModule({
    declarations: [UsadaPekoraComponent],
    imports: [CommonModule, UsadaPekoraRoutingModule]
})
export class UsadaPekoraModule {}
