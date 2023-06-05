import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordionelement',
  templateUrl: './accordionelement.component.html',
  styleUrls: ['./accordionelement.component.sass'],
})
export class AccordionelementComponent {
  openAcc: boolean = false;
  arrowDirection: string = 'assets/icon-arrow-down.svg'

  @Input() titleAccChild: any;
  @Input() infoAccChild: any;


  changeAcc() {
    this.openAcc = !this.openAcc;
    if (this.openAcc) {
      this.arrowDirection = 'assets/icon-arrow-up.svg'
    } else {
      this.arrowDirection = 'assets/icon-arrow-down.svg'
    }
  }
}
