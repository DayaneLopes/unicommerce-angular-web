import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu.component';


@NgModule({
    declarations: [MenuComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports:  [MenuComponent ]
})
export class MenuModule { }