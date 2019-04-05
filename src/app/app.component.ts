import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sergio website !';

  showMovies = true;

  displayMovieList() {
    this.showMovies = !this.showMovies;
  }
}
