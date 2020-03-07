import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirakamiFubukiComponent } from './shirakami-fubuki.component';

const routes: Routes = [
    {
        path: '',
        component: ShirakamiFubukiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShirakamiFubukiRoutingModule {}
