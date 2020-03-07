import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OokamiMioComponent } from './ookami-mio.component';

const routes: Routes = [
    {
        path: '',
        component: OokamiMioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OokamiMioRoutingModule {}
