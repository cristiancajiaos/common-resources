import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  public modules: string[] = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
  ngOnInit(): void {

  }
}
