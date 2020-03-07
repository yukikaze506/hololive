import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HimemoriLunaComponent } from './himemori-luna.component';

const routes: Routes = [
    {
        path: '',
        component: HimemoriLunaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HimemoriLunaRoutingModule {}
