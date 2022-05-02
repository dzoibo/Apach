import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductService } from './services/Product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from "primeng/dialog";
import {CarouselModule} from 'primeng/carousel';
import { MessageComponent } from './message/message.component';
import { FilterComponent } from './filter/filter.component';
import { DetailsComponent } from './details/details.component';
import{PlatformModule} from '@angular/cdk/platform';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';
import { MessageService } from 'primeng/api';
import { LoginService } from './services/login.service';
import { ConnectionService } from 'ng-connection-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'message', component:MessageComponent },
  { path:'message/:id', component:MessageComponent },
  { path:'home', component:HomepageComponent },
  { path:'Filter', component:FilterComponent },
  { path:'Details', component:DetailsComponent },
  { path: '**', redirectTo: 'home' }
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
    PlatformModule,
    BrowserModule,
    DialogModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    CarouselModule,
    RouterModule.forRoot(appRoutes),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    ConnectionService,
    ProductService,
    CookieService,
    AuthService,
    MessageService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
