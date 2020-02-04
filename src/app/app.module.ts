import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatIconModule, 
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatSidenavModule,MatStepperModule,MatListModule,MatExpansionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {  ToastrModule } from 'ngx-toastr';
import { NgxLoadingModule } from 'ngx-loading';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MatIconModule, 
    MatToolbarModule, 
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatStepperModule,
    MatExpansionModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule.forRoot({
      size:'medium',
      color: 'green',
      defaultBgColor: 'red',
      defaultBoColor : 'white',
      checkedLabel: ' Yes ',
      uncheckedLabel: ' No '
    }),
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut:5000,
      positionClass:"toast-bottom-center"
    }),
    NgxLoadingModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
