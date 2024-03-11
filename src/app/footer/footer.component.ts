import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public autores: string[] = ['Cristina del Castillo', 'Ioan Bobinca', 'Danny Rodas', 'José Moreno', 'Beatríz Torija'];
}
