import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clinica-psicologia';
  showMenu = false;


  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  // menuAberto = false;

  // toggleMenu() {
  //   this.menuAberto = !this.menuAberto;
  // }




}

