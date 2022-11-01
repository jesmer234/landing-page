import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  show:boolean = false;

  toggle() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

  faBars = faBars
}
