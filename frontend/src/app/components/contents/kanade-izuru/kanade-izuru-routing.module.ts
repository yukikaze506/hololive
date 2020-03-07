import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanadeIzuruComponent } from './kanade-izuru.component';

const routes: Routes = [
    {
        path: '',
        component: KanadeIzuruComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KanadeIzuruRoutingModule {}
