import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArurandeisuComponent } from './arurandeisu.component';

const routes: Routes = [
    {
        path: '',
        component: ArurandeisuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArurandeisuRoutingModule {}
