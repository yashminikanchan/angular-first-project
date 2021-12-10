import { Component } from "@angular/core";

@Component({

    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css']

})


export class IconComponent {

    // facebook : string = "";
    // instagram = "";
    // youtube = "";
    // selectedIcon = "";
    searchTypedText = "";

    socialMedia = ["facebook", "instagram", "youtube", "google"]

    onIconChange(selectedIcon: any) {
        // console.log("---clickedicon", selectedIcon);
        if (selectedIcon == 'facebook') {

            this.onFacebookClick();

        } else if (selectedIcon == "instagram") {

            this.onInstagramClick();

        } else if (selectedIcon == "youtube"){

            this.onYoutubeClick();
        }else {

            this.onGoogleClick();
        }

        // selectedIcon = ["facebook", "instagram", "youtube"]
    }

    onFacebookClick() {
        let fullSearchUrl = "http://www.facebook.com";
        window.open(fullSearchUrl, "_blank")


    }

    onInstagramClick() {
        let fullSearchUrl = "https://www.instagram.com";
        window.open(fullSearchUrl, "-blank")


    }
    onYoutubeClick() {
        let fullSearchUrl = "https://www.youtube.com/results?search_query=" + this.searchTypedText;
        window.open(fullSearchUrl, "-blank")

    }

    onGoogleClick() {
        let fullSearchUrl = "https://www.google.com/search?q=" + this.searchTypedText;
        window.open(fullSearchUrl, "-blank")
    }


}
