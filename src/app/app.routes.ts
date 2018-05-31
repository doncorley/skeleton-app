import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {ImportAcctComponent} from "./import-acct/import-acct.component";
import {ExportAcctComponent} from "./export-acct/export-acct.component";
import {ModuleWithProviders} from "@angular/core";
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'import-acct',
    component: ImportAcctComponent
  },
  {
    path: 'export-acct',
    component: ExportAcctComponent
  }
];
