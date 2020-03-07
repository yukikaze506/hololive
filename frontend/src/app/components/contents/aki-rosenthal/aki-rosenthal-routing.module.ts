import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkiRosenthalComponent } from './aki-rosenthal.component';

const routes: Routes = [
    {
        path: '',
        component: AkiRosenthalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AkiRosenthalRoutingModule {}
