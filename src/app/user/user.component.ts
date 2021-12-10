import { templateJitUrl, templateSourceUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'user',
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"]

})

export class UserComponent {
    typedText = "";
    customerList = [""];


    onButtonClick() {
        console.log("customer", this.customerList);

        this.customerList.push(this.typedText);

    }
}