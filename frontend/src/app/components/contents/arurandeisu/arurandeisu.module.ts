import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArurandeisuRoutingModule } from './arurandeisu-routing.module';
import { ArurandeisuComponent } from './arurandeisu.component';

@NgModule({
    declarations: [ArurandeisuComponent],
    imports: [CommonModule, ArurandeisuRoutingModule]
})
export class ArurandeisuModule {}
