import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YuzukiChocoRoutingModule } from './yuzuki-choco-routing.module';
import { YuzukiChocoComponent } from './yuzuki-choco.component';

@NgModule({
    declarations: [YuzukiChocoComponent],
    imports: [CommonModule, YuzukiChocoRoutingModule]
})
export class YuzukiChocoModule {}
