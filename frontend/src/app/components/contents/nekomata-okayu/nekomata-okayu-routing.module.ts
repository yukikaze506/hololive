import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NekomataOkayuComponent } from './nekomata-okayu.component';

const routes: Routes = [
    {
        path: '',
        component: NekomataOkayuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NekomataOkayuRoutingModule {}
