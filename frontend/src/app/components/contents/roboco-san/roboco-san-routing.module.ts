import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobocoSanComponent } from './roboco-san.component';

const routes: Routes = [
    {
        path: '',
        component: RobocoSanComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RobocoSanRoutingModule {}
