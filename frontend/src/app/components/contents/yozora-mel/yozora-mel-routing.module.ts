import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YozoraMelComponent } from './yozora-mel.component';

const routes: Routes = [
    {
        path: '',
        component: YozoraMelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YozoraMelRoutingModule {}
