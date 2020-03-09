import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './components/member/member.component';
import { MaterialModule } from './material/material.module';

const modules = [CommonModule, FormsModule, HttpClientModule, MaterialModule, ReactiveFormsModule, RouterModule];
const components = [MemberComponent];

@NgModule({
    declarations: [...components],
    entryComponents: [],
    imports: [...modules],
    exports: [...modules, ...components],
    providers: []
})
export class SharedModule {}
