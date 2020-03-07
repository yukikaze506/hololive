import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NakiriAyameComponent } from './nakiri-ayame.component';

const routes: Routes = [
    {
        path: '',
        component: NakiriAyameComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NakiriAyameRoutingModule {}
