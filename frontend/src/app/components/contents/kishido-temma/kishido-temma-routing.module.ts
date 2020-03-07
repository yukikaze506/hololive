import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KishidoTemmaComponent } from './kishido-temma.component';

const routes: Routes = [
    {
        path: '',
        component: KishidoTemmaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KishidoTemmaRoutingModule {}
