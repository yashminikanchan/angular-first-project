import { Component } from "@angular/core";

@Component({
    selector: 'googlecopy',
    templateUrl: './googlecopy.component.html',
    styleUrls: ['./googlecopy.component.css']
})

export class googleCopyComponent {
    isBiopicVisible = false;

    onSearchClick() {
         this.isBiopicVisible = true;
      /*   if (this.isBiopicVisible == true) {
            this.isBiopicVisible = false;
        } else {

            this.isBiopicVisible = true;

        } */
    }

    onCancelClick() {

        this.isBiopicVisible = false;
    }


}