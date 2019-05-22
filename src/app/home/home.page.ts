import { Component } from '@angular/core';
import { ChewbaccaPage } from "../chewbacca/chewbacca.page";
import { DarthVaderPage } from "../darth-vader/darth-vader.page";
import { PadmeAmidalaPage } from "../padme-amidala/padme-amidala.page";
import { GeneralGrievusPage } from "../general-grievus/general-grievus.page";
import { YodaPage } from "../yoda/yoda.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
chewbacca = ChewbaccaPage;
darth_vader = DarthVaderPage;
padme_amidala = PadmeAmidalaPage;
general_grievus = GeneralGrievusPage;
yoda = YodaPage;

}
