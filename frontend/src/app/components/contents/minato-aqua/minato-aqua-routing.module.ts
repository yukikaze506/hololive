import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinatoAquaComponent } from './minato-aqua.component';

const routes: Routes = [
    {
        path: '',
        component: MinatoAquaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MinatoAquaRoutingModule {}
