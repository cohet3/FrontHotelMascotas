import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.contraerMenu();
        }, 100);
      }
    });
  }
  
  hacerClic(evento: Event) {
    evento.preventDefault(); 
    const elementoClickeado = evento.target as HTMLLinkElement;
    if (elementoClickeado.hasAttribute('routerLink')) {
      const ruta = elementoClickeado.getAttribute('routerLink')!; 
      this.router.navigateByUrl(ruta);
    } else {
      console.log('El elemento clickeado no tiene un atributo `routerLink`');
    }
    setTimeout(() => {
      this.contraerMenu();
    }, 100);
  }
 contraerMenu() {
    const collapseElement = document.querySelector('#navbarToggleExternalContent');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (collapseElement?.classList.contains('show')) {
      collapseElement.classList.remove('show');
      navbarToggler?.setAttribute('aria-expanded', 'false');
  }
}
}

