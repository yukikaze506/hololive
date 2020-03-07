import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsunomakiWatameComponent } from './tsunomaki-watame.component';

const routes: Routes = [
    {
        path: '',
        component: TsunomakiWatameComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TsunomakiWatameRoutingModule {}
