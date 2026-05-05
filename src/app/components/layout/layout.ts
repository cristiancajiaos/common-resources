import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {

  public isMenuCollapsed: boolean = true;

  ngOnInit(): void {

  }

  public toggleMenuCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
