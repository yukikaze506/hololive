import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HanasakiMiyabiComponent } from './hanasaki-miyabi.component';

const routes: Routes = [
    {
        path: '',
        component: HanasakiMiyabiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HanasakiMiyabiRoutingModule {}
