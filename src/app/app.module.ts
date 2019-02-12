import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogTitleComponent } from './blog-title/blog-title.component';
import { BlogThemeComponent } from './blog-theme/blog-theme.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    BlogHeaderComponent,
    BlogTitleComponent,
    BlogThemeComponent,
    BlogFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
