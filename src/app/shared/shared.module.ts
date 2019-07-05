import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNoutFoundComponent } from "./page-nout-found/page-nout-found.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MsgService } from "./services/msg.service";
import { RouterModule } from "@angular/router";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    PageNoutFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  providers: [MsgService],
  imports: [CommonModule, RouterModule],
  exports: [PageNoutFoundComponent, HeaderComponent, FooterComponent, LoaderComponent]
})
export class SharedModule { }
