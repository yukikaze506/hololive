import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YuzukiChocoComponent } from './yuzuki-choco.component';

const routes: Routes = [
    {
        path: '',
        component: YuzukiChocoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YuzukiChocoRoutingModule {}
