import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokoyamiTowaComponent } from './tokoyami-towa.component';

const routes: Routes = [
    {
        path: '',
        component: TokoyamiTowaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TokoyamiTowaRoutingModule {}
