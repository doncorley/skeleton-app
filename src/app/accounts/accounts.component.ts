import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {AccountsService} from "../services/accounts.service";
import { Accounts } from "../model/accounts";
import { Acctitem } from "../model/acctitem";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {iteratorToArray} from "@angular/animations/browser/src/util";
import {pureArrayDef} from "@angular/core/src/view";


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
 // template:`
  //  <ul>
   //   <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
   // </ul>
//    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  //  `,
  styleUrls: ['./accounts.component.css'],
  providers: [AccountsService]

})
export class AccountsComponent implements OnInit {
  accounts : Accounts[];
  showItemAccounts = true;
  selectedAccount : Accounts;

  //p: number = 1;
  //collection: any[] = someArrayOfThings;

  model: Accounts = new Accounts();
  accountsForm: FormGroup;

   constructor(formBuilder: FormBuilder, public accountsService:AccountsService) {
    this.accountsForm = formBuilder.group({
      'acctnum':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      'objcode':['', Validators.compose([Validators.maxLength(5)])],
      'acctname':['' ],
      'objname':[''],
    })

  }


  ngOnInit() {
    this.accounts = this.accountsService.getAccounts();
  }

  onClickItemAccounts() {
    this.showItemAccounts = !this.showItemAccounts;
  }
  private onAccountsClick(accounts: Accounts) {
   this.selectedAccount = accounts;

  }

  get jsonModel() {
    return JSON.stringify(this.model);
  }



  onSubmit(): void {
    alert(this.jsonModel);
  }

}
