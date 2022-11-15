import { Dataimg } from './../dataimg';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  img: string = "";
  name: string = "";
  showandHide: boolean = true;


  imgData: Dataimg[] =
    [
      { img: "https://routeegypt.com/start-angular/assets/img/portfolio/cabin.png",name:"cake" },
      { img: "https://routeegypt.com/start-angular/assets/img/portfolio/cake.png",name:"cake1"  },
      { img: "https://routeegypt.com/start-angular/assets/img/portfolio/circus.png",name:"cake2"  },
      { img: "https://routeegypt.com/start-angular/assets/img/portfolio/game.png",name:"cake3"  },
      { img: "https://routeegypt.com/start-angular/assets/img/portfolio/safe.png",name:"cake4"  },
      { img: "https://routeegypt.com/start-angular/assets/img/portfolio/submarine.png",name:"cake8"  }
    ];
  
  test(x:string , y:string) {
    this.img = x;
    this.showandHide = false;
    this.name = y;
  }
  change() {
    this.showandHide = true;

}
 
}
