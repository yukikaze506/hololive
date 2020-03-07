import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YakushijiSuzakuComponent } from './yakushiji-suzaku.component';

const routes: Routes = [
    {
        path: '',
        component: YakushijiSuzakuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YakushijiSuzakuRoutingModule {}
