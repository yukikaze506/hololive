import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YukokuRoberuComponent } from './yukoku-roberu.component';

const routes: Routes = [
    {
        path: '',
        component: YukokuRoberuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YukokuRoberuRoutingModule {}
