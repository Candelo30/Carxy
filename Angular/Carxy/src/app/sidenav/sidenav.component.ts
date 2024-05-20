import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(private authService: AuthService, private router: Router) { }
  ModalIsopen: boolean = false
  

  ShowElements() {
    this.ModalIsopen = !this.ModalIsopen
    
  }


  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const isModal = target.closest('.elementsView');
    const isButton = target.closest('.list-link');

    if (!isModal && !isButton) {
      this.ModalIsopen = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
