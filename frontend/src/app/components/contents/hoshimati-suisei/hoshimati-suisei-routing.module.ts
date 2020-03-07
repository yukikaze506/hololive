import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoshimatiSuiseiComponent } from './hoshimati-suisei.component';

const routes: Routes = [
    {
        path: '',
        component: HoshimatiSuiseiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HoshimatiSuiseiRoutingModule {}
