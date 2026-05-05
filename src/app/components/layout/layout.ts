import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {

  public isMenuCollapsed: boolean = false;
  public barsIcon: IconDefinition = faBars;

  ngOnInit(): void {

  }

  public toggleMenuCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
