import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SakuramikoRoutingModule } from './sakuramiko-routing.module';
import { SakuramikoComponent } from './sakuramiko.component';

@NgModule({
    declarations: [SakuramikoComponent],
    imports: [CommonModule, SakuramikoRoutingModule]
})
export class SakuramikoModule {}
