import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AllComponent } from './all/all.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:"all",
        component:AllComponent
      },
      {
        path:"add",
        component:AddComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
