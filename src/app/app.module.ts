import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { LoaderComponent } from './Component/loader/loader.component';
import { AboutComponent } from './Component/about/about.component';
import { NavigatorComponent } from './Component/navigator/navigator.component';
import { SkillsComponent } from './Component/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    AboutComponent,
    NavigatorComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
