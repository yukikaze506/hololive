import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SakuramikoComponent } from './sakuramiko.component';

const routes: Routes = [
    {
        path: '',
        component: SakuramikoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SakuramikoRoutingModule {}
