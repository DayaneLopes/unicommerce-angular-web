import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ClienteFormComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        VMessageModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [ ClienteFormComponent ]
})
export class ClienteFormModule { }