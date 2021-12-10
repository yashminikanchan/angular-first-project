import { Component } from "@angular/core";

@Component({

    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class movieComponent {
    movieName: any = "";
    actorName: any = "";
    movieList: any = [];


    onAddClick() {
        console.log(this.movieName);
        console.log(this.actorName);
        let newMovieObject = { movieName: this.movieName, actorName: this.actorName, isEditVisible:true };
        this.movieList.push(newMovieObject);
        this.movieName = "";
        this.actorName = "";
    
    }

    onDeleteClick(index: any) {

        this.movieList.splice(index, 1);
    }
    onEditClick(index: any) {
        this.movieName = this.movieList[index].movieName;
        this.actorName = this.movieList[index].actorName;
        this.movieList[index].isEditVisible = false;
        
    

    }
    onUpdateClick(index: any) {
        this.movieList[index].movieName = this.movieName;
        this.movieList[index].actorName = this.actorName;
        this.movieName = "";
        this.actorName = "";
        this.movieList[index].isEditVisible=true;

    }
}