import { NgModule } from "@angular/core";
import { HeaderComponet } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ HeaderComponet ],
    exports: [ HeaderComponet ],
    imports: [CommonModule,
              RouterModule]
})
export class CoreModule { }