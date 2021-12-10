import { Component } from "@angular/core";

@Component({
    selector: 'Kundu',
    templateUrl: './kundu.component.html',
    styleUrls: ['./kundu.component.css']
})

export class KunduComponent {

    searhchedTerm = "";
    typedTerm = "";
   


    onYoutubeSearchClick() {
        let fullSearchUrl = "https://www.youtube.com/results?search_query=" + this.searhchedTerm;
        window.open(fullSearchUrl, "_blank");
    }
    onGoogleSearchClick() {
        let fullSearchUrl = "https://www.google.com/search?q=" + this.typedTerm;
        window.open(fullSearchUrl, "_blank");
    }


    onFacebookSearchClick() {
        let fullSearchUrl = "https://www.facebook.com";
        window.open(fullSearchUrl, "_blank");
    }
}



