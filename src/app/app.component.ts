import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriété title, qui ressemble à une variable.
  title = 'This is my title from Typescript';

  nb = 0;


  // Méthode alert() qui ressemble a une fonction.
  alert() {
    // OOn peut déclarer des constantes et des variables dans des méthodes.
    const message = "This is a message";
    // On peut utiliser tous les outils de Javacript dans les méthodes
    console.log(message);


    this.nb = this.nb + 1;
    console.log('You\'ve clicked:',this.nb + 'times')

    //'Ancienne' méthode, qui va sortir un prompt
    alert(message)
  }
}
