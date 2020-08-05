import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-favourite',
    templateUrl: './favourite.component.html'
})
export class FavouriteComponent implements OnInit {

    @Input('isFavorite') isFavorite:boolean;

    constructor(){}

    ngOnInit(){

    }

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}