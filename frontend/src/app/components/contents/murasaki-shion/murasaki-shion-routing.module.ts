import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MurasakiShionComponent } from './murasaki-shion.component';

const routes: Routes = [
    {
        path: '',
        component: MurasakiShionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MurasakiShionRoutingModule {}
