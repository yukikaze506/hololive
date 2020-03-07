import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OozoraSubaruComponent } from './oozora-subaru.component';

const routes: Routes = [
    {
        path: '',
        component: OozoraSubaruComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OozoraSubaruRoutingModule {}
