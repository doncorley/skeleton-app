import { Injectable } from '@angular/core';
import {Accounts} from "../model/accounts";
import {ACCOUNTS, MYACCOUNTS} from "../model/mock-accounts";

@Injectable()
export class AccountsService {
  constructor() {}
  public getAccounts() : Accounts[]{
      return ACCOUNTS;
  }

  public getMyAccounts() : Accounts[] {
    return MYACCOUNTS;
  }

}
