import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkaiHaatoComponent } from './akai-haato.component';

const routes: Routes = [
    {
        path: '',
        component: AkaiHaatoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AkaiHaatoRoutingModule {}
