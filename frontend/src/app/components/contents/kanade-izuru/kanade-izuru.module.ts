import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KanadeIzuruRoutingModule } from './kanade-izuru-routing.module';
import { KanadeIzuruComponent } from './kanade-izuru.component';

@NgModule({
    declarations: [KanadeIzuruComponent],
    imports: [CommonModule, KanadeIzuruRoutingModule]
})
export class KanadeIzuruModule {}
