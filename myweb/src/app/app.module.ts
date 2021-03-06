import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage';
import { FooterModule } from './shared/footer/footer';
import { RouterModule } from '@angular/router';
import { ComponentPageTitle } from './pages/page-title/page-title';
import { NavBarModule } from './shared/navbar/navbar';
import { ProjectsModule } from './pages/projects/projects';
import { BlogModule } from './pages/blog/blog';
import { TyperModule } from './shared/typer/typer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomepageModule,
    FooterModule,
    NavBarModule,
    ProjectsModule,
    BlogModule,
    TyperModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ComponentPageTitle
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
