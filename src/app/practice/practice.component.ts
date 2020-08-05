import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  // show = false;
  // practiceArrays = [];
  post = {
    title : "glyphicon",
    isFavorite : true

  }

  constructor() { }

  ngOnInit(): void {
  }

  // toggle(){
  //   this.show = true;
  //   this.practiceArrays.push(new Date());
  // }

}
