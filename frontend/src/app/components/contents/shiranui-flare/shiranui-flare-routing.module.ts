import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiranuiFlareComponent } from './shiranui-flare.component';

const routes: Routes = [
    {
        path: '',
        component: ShiranuiFlareComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShiranuiFlareRoutingModule {}
