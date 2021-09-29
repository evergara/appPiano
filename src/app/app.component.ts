import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appPiano';

  aplicandoSonido(idAudio: number): void {
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + idAudio + '.wav';
    audio.load();
    audio.play();
  }
}
