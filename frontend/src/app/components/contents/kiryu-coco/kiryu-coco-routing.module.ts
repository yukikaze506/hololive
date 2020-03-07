import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KiryuCocoComponent } from './kiryu-coco.component';

const routes: Routes = [
    {
        path: '',
        component: KiryuCocoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KiryuCocoRoutingModule {}
