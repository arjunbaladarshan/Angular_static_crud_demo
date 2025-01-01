import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./first-component/first-component.component";
import { MultidimensionalarrayComponent } from "./multidimensionalarray/multidimensionalarray.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent, MultidimensionalarrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'static_crud_demo';
}
