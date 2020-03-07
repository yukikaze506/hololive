import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzkiComponent } from './azki.component';

const routes: Routes = [
    {
        path: '',
        component: AzkiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AZKiRoutingModule {}
