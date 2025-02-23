import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  titulo : string = '';
  contenido : string = '';
  fecha : string = '';
  url : string = '';
  noticias: Noticia[] = [
    {
      titulo: 'Nueva Moto 2027',
      contenido: 'La nueva moto 2027 ha sido lanzada con características innovadoras y un diseño impresionante. Esta moto cuenta con un motor de última generación que ofrece un rendimiento excepcional y una eficiencia de combustible mejorada. Además, su diseño aerodinámico y elegante no solo mejora su apariencia, sino que también contribuye a una mejor estabilidad y manejo en la carretera. Los materiales utilizados en su construcción son de alta calidad, lo que garantiza durabilidad y resistencia. La nueva moto 2027 también está equipada con tecnología avanzada, incluyendo un sistema de navegación integrado, conectividad Bluetooth, y una pantalla táctil de alta resolución. Sin duda, esta moto está diseñada para ofrecer una experiencia de conducción inigualable.',
      fecha: '2023-10-01',
      url: 'https://imgs.search.brave.com/3w8Q1aYBkiofRFm9AwRB73X9a2YU04RinmaVUzqClik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/Mi5tb3RvcnNwb3J0/LmNvbS9pbWFnZXMv/YW1wL3AydzhOWmJZ/L3MxMDAwL21vdG9n/cC1yZWdlbG4tMjAy/Ny1kaWUtd2ljaHRp/Z3N0ZW4tYWVuZGVy/dW5nZW4tYXVmLWVp/bmVuLWJsaWNrLTI0/MDYyMzAyLmpwZw'
    },
    {
      titulo: 'Competencia de Motos',
      contenido: 'La competencia de motos de este año ha sido un gran éxito con la participación de los mejores pilotos del mundo. Los espectadores fueron testigos de emocionantes carreras y maniobras impresionantes que mantuvieron a todos al borde de sus asientos. Los pilotos demostraron habilidades excepcionales y un gran dominio de sus motocicletas, lo que resultó en una competencia reñida y llena de adrenalina. Además de las carreras, el evento también incluyó exhibiciones de motos clásicas y modernas, así como stands de venta de accesorios y equipos para motociclistas. La competencia de motos no solo fue un espectáculo deportivo, sino también una celebración de la cultura y la pasión por las motocicletas.',
      fecha: '2023-10-02',
      url: 'https://imgs.search.brave.com/uQcsAyxzxtNYrtufj6vayXcFM2Mgk4MPlyPeNUs1j_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NTExNTQwNS9waG90/by90b3BzaG90LWR1/Y2F0aS1zcGFuaXNo/LXJpZGVyLWpvcmdl/LW1hcnRpbi1sZWFk/cy10aGUtcGFjay1k/dXJpbmctdGhlLXRo/ZS1pdGFsaWFuLW1v/dG9ncC1yYWNlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1u/UkVwTGc0TjI3cTY1/LTR1SkpBS3pEQXBu/eXAwVHRDdV9JUXFI/U3RPTWQ0PQ'
    }
  ];
  agregarNoticia(titulo: string, contenido: string, fecha: string, url: string) {
    
    if (titulo && contenido && fecha && url) {
      this.noticias.push({
      titulo: titulo,
      contenido: contenido,
      fecha: fecha,
      url: url
      });
      this.titulo = '';
      this.contenido = '';
      this.fecha = '';
      this.url = '';
    } else {
      alert('Todos los campos son obligatorios.');
    }
  }
}
