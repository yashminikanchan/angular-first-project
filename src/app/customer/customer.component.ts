import { Component } from "@angular/core";

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']

})

export class CustomerComponent {

    cName = "Yashmini";
    cClass = "10";
    cSchool = "";
    selectedColor = "Red";
    colorList = ["Red", "Blue", "Green"];
    /*  customerObject = {
         customerName: "Yashmini",
         color: ["white", "black"]
     }; */
    familyList = ["Chandan", "Kundan", "Gunjan", "Kanchan", "Choti"];

    onGoogleSearchName() {

        let fullSearchUrl = "https://www.google.com/search?q=" + this.cName;
        window.open(fullSearchUrl, "_blank");

    }

    onGoogleSearchclass() {

        let fullSearchUrl = "https://www.google.com/search?q=" + this.cClass;
        window.open(fullSearchUrl, "_blank");
    }

    onYoutubeSearchschool() {

        let fullSearchUrl = "https://www.youtube.com/results?search_query=" + this.cSchool;
        window.open(fullSearchUrl, "_blank");
    }

    onColorChange() {

        console.log("--hgghg--->>>", this.selectedColor);
    }
    onfamilyList() {
        console.log("family", this.familyList);
    }


}