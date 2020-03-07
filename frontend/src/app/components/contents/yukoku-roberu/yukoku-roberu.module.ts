import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YukokuRoberuRoutingModule } from './yukoku-roberu-routing.module';
import { YukokuRoberuComponent } from './yukoku-roberu.component';

@NgModule({
    declarations: [YukokuRoberuComponent],
    imports: [CommonModule, YukokuRoberuRoutingModule]
})
export class YukokuRoberuModule {}
