import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

const modules = [CommonModule, FormsModule, HttpClientModule, MaterialModule, ReactiveFormsModule, RouterModule];

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [...modules],
    exports: [...modules],
    providers: []
})
export class SharedModule {}
