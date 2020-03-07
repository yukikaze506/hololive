import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoushoumarineComponent } from './houshoumarine.component';

const routes: Routes = [
    {
        path: '',
        component: HoushoumarineComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HoushoumarineRoutingModule {}
