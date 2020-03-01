import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [MatFormFieldModule, MatIconModule, MatTooltipModule];

@NgModule({
    imports: [...modules],
    exports: [...modules],
    providers: []
})
export class MaterialModule {}
