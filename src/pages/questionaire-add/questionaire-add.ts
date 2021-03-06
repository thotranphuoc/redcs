import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LangService } from '../../services/lang.service';
import { LocalService } from '../../services/local.service';

/**
 * Generated class for the QuestionaireAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionaire-add',
  templateUrl: 'questionaire-add.html',
})
export class QuestionaireAddPage {
   // FOR LANGUAGES UPDATE
  // 1. Set initialize EN
  LANG = 'EN';
  // 2. set initialized LANGUAGES
  LANGUAGES = {
    TITLE: { EN: 'Questionaires Add', VI: 'Thêm bảng câu hỏi' },
  };
  pageId = 'QuestionaireAddPage';

  width: number;
  h: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private platform: Platform,
    private langService: LangService,
    private localService: LocalService
    
    ) {
    platform.ready().then((readySource) => {
      this.width = platform.width();
      this.h = platform.height();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionaireAddPage');
    if (this.localService.BASIC_INFOS) {
      // 3. Get selected EN/VI
      this.LANG = this.langService.LANG;
      // 4. Get LANGUAGES from DB
      this.LANGUAGES = this.langService.getLanguagesObjectFromPageId(this.pageId);
      console.log(this.LANGUAGES);
    } else {
      this.navCtrl.setRoot('HomePage');
    }
  }
  

}
