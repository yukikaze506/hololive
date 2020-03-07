import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokinoSoraComponent } from './tokino-sora.component';

const routes: Routes = [
    {
        path: '',
        component: TokinoSoraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TokinoSoraRoutingModule {}
