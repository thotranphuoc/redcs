import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LocalService } from './local.service';
import { CrudService } from './crud.service';
import { iUser } from '../interfaces/user.interface';
import { AppService } from './app.service';
import { LoadingService } from './loading.service';
import { LoginModel} from '../model/loginModel';
import { HomeModel} from '../model/homeModel';

@Injectable()


export class LangService {
    index: any = 0;
    //login layout
    title:any;
    password: any;
    email: any;
    btnLogin: any;
    btnCancel: any;
    //login layout end

    //home layout
    title_home:any;
    btnContinue: any;
    btnSignOut: any;
    btnLoginHome: any;
    btnSignUp: any;
    //home layout end


    constructor(
    private loginModel: LoginModel,
    private homeModel: HomeModel,

    ) {
       this.title = this.loginModel.tittle[this.index];
       this.password=this.loginModel.password[this.index];
       this.email=this.loginModel.email[this.index];
       this.btnLogin=this.loginModel.btnLogin[this.index];
       this.btnCancel=this.loginModel.btnCancel[this.index];

       this.title_home = this.homeModel.tittle[this.index];
       this.btnContinue=this.homeModel.btnContinue[this.index];
       this.btnSignOut=this.homeModel.btnSignOut[this.index];
       this.btnLoginHome=this.homeModel.btnLogin[this.index];
       this.btnSignUp=this.homeModel.btnSignUp[this.index];

       
       console.log("log title" + this.title);
       
     }

     getTitle()
     {
        //return this.loginModel.getTitle[this.index];
     }
}