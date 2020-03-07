import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NatsuiroMatsuriComponent } from './natsuiro-matsuri.component';

const routes: Routes = [
    {
        path: '',
        component: NatsuiroMatsuriComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NatsuiroMatsuriRoutingModule {}
