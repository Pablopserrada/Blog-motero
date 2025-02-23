import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de que la ruta sea correcta
import { BlogComponent } from './components/blog/blog.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, BlogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'actividad_5';
}
