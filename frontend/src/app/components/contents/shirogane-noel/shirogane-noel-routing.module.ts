import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiroganeNoelComponent } from './shirogane-noel.component';

const routes: Routes = [
    {
        path: '',
        component: ShiroganeNoelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShiroganeNoelRoutingModule {}
