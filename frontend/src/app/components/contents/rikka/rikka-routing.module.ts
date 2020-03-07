import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RikkaComponent } from './rikka.component';

const routes: Routes = [
    {
        path: '',
        component: RikkaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RikkaRoutingModule {}
