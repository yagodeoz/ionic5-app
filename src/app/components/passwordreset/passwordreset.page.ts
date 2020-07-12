/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../functions.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})
export class PasswordresetPage implements OnInit {

  email = "";

  constructor(private fun: FunctionsService, private menuCtrl: MenuController) { 
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
  }

  reset(){
    if(this.fun.validateEmail(this.email)){
      this.fun.presentToast('Por favor revise su email', false, 'bottom', 2100);
    }
    else{
      this.fun.presentToast('Debe ingresar un email válido', true, 'bottom', 2100);
    }
  }

}
