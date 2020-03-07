import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmaneKanataComponent } from './amane-kanata.component';

const routes: Routes = [
    {
        path: '',
        component: AmaneKanataComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmaneKanataRoutingModule {}
