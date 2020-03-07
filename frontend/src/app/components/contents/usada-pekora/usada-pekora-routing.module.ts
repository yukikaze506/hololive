import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsadaPekoraComponent } from './usada-pekora.component';

const routes: Routes = [
    {
        path: '',
        component: UsadaPekoraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsadaPekoraRoutingModule {}
