import { Component } from '@angular/core';

import {NgModule} from '@angular/core';
import { AccountsComponent } from './accounts/accounts.component';
import {BrowserModule} from '@angular/platform-browser';
// import {NgxPaginationModule} from "ngx-pagination"; <------ changed this
import {Ng2PaginationModule} from 'ng2-pagination'; /// <-------added this


@NgModule({
  imports: [BrowserModule, Ng2PaginationModule], // <-- include it in your app module ***// NgxPaginationModule has been changed to Ng2...
  declarations: [AccountsComponent],
  bootstrap: [AccountsComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USC Account Translator';

}
