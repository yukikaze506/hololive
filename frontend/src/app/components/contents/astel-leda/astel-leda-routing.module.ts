import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstelLedaComponent } from './astel-leda.component';

const routes: Routes = [
    {
        path: '',
        component: AstelLedaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AstelLedaRoutingModule {}
