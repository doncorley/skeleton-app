import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ImportAcctComponent } from './import-acct/import-acct.component';
import { ExportAcctComponent } from './export-acct/export-acct.component';
import { AccountItemComponent } from './account-item/account-item.component';

@NgModule({
  declarations: [
    AppComponent,

    AccountsComponent,
    HomeComponent,
    ImportAcctComponent,
    ExportAcctComponent,
    AccountItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
