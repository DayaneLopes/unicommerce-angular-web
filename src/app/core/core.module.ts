import { NgModule } from "@angular/core";
import { HeaderComponet } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [ HeaderComponet,
                    FooterComponent ],
    exports: [ HeaderComponet,
               FooterComponent ],
    imports: [CommonModule,
              RouterModule]
})
export class CoreModule { }