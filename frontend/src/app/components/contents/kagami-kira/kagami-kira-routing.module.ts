import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KagamiKiraComponent } from './kagami-kira.component';

const routes: Routes = [
    {
        path: '',
        component: KagamiKiraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KagamiKiraRoutingModule {}
