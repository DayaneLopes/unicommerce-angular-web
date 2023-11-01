import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ClienteFormComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ ClienteFormComponent ]
})
export class ClienteFormModule { }