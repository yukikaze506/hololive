import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UruhaRushiaComponent } from './uruha-rushia.component';

const routes: Routes = [
    {
        path: '',
        component: UruhaRushiaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UruhaRushiaRoutingModule {}
