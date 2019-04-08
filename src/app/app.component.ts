import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sergio website !';

  showMovies = true;

  displayMovieList() {
    this.showMovies = !this.showMovies;
  }
}
