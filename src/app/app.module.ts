import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcceuilService } from './services/acceuil.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from "primeng/dialog";
import {CarouselModule} from 'primeng/carousel';
import { MessageComponent } from './message/message.component';
import { FilterComponent } from './filter/filter.component';
import { DetailsComponent } from './details/details.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'message', component:MessageComponent },
  { path:'home', component:HomepageComponent },
  { path: '**', redirectTo: '/message' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MessageComponent,
    FilterComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule.forRoot(appRoutes),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    AcceuilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
