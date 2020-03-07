import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YakushijiSuzakuRoutingModule } from './yakushiji-suzaku-routing.module';
import { YakushijiSuzakuComponent } from './yakushiji-suzaku.component';

@NgModule({
    declarations: [YakushijiSuzakuComponent],
    imports: [CommonModule, YakushijiSuzakuRoutingModule]
})
export class YakushijiSuzakuModule {}
