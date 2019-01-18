import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ArticleComponent } from './article/article.component';
import { ImgComponent } from './img/img.component';
import { LeadComponent } from './lead/lead.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ArticleComponent,
    ImgComponent,
    LeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
