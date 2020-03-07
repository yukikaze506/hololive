import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HanasakiMiyabiRoutingModule } from './hanasaki-miyabi-routing.module';
import { HanasakiMiyabiComponent } from './hanasaki-miyabi.component';

@NgModule({
    declarations: [HanasakiMiyabiComponent],
    imports: [CommonModule, HanasakiMiyabiRoutingModule]
})
export class HanasakiMiyabiModule {}
