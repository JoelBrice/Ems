import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    const menu = document.querySelector('.navbar-menu');
    if (menu) {
      menu.classList.toggle('show', this.menuVisible);
    }
  }
}
