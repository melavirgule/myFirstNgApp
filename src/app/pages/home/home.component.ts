import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayImages = ['sunset.jpg', 'sea.jpg', 'road.jpg'];

  jsonImages = [
  {
    title: 'sunset',
    url: 'sunset.jpg', 
    author: 'Bob'
  },
  {
    title: 'Ocean',
    url: 'sea.jpg', 
    author: 'Irma'
  },
  {
    title: 'Route',
    url: 'road.jpg', 
    author: 'Jacques'
  } 
];
  
  randomIndex = Math.floor(Math.random()*this.arrayImages.length); //J'ai indiqué que la source de mon image est un des index de mon tableau
  
  sourceImage = this.arrayImages[this.randomIndex];//arrondi au chiffre le plus proche, on utilise this parce qu'on est dans une class

  //Méthode qui est liée à ma classe
  console(str:string){
    console.log(str);
  }

  changeRandom(){
    this.randomIndex = Math.floor(Math.random()*this.arrayImages.length);
    this.console('randomIndex' + this.randomIndex);
  }

  valColor = 'purple';
  textWarning = false;
  displayParag = true;

  displaySwitch = 1;

  incSwitch(){
    this.displaySwitch++;
    this.displaySwitch = this.displaySwitch> 3 ? 1 : this.displaySwitch;
    // Equivalent de: if (this.displaySwitch>3){ this.displaySwitch = 1} else { this.displaySwitch = this.displaySwitch}
  }

  displayCarousel = 1;
  
  plusCarousel(){
    this.displayCarousel++;
    this.displayCarousel = this.displayCarousel> 3 ? 1 : this.displayCarousel;
  }

  moinsCarousel(){
    this.displayCarousel--;
    this.displayCarousel = this.displayCarousel< 1 ? 3 : this.displayCarousel;
  }


  constructor() { }

  //Pour lancer des méthodes au démarrage
  //A accès au cycle de vie de mon composant
  // Pour déclencher les choses qu démarrage, nous permet de faire des tests.
  ngOnInit(): void { //Cette méthode ngOnInit() ne retourne rien, c'est pour ça qu'on met void, mais il ne sert que d'indication, ça fonctionne aussi sans le void.
    console.log('randomIndex', this.randomIndex);
    console.log('sourceImage', this.sourceImage);
    console.log('jsonImagesRandom', this.jsonImages[this.randomIndex].title);
  }

}
