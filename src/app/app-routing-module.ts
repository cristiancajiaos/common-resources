import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home-module').then((m) => m.HomeModule) },
  { path: 'posts', loadChildren: () => import('./modules/posts/posts-module').then((m) => m.PostsModule) },
  {
    path: 'albums',
    loadChildren: () => import('./modules/albums/albums-module').then((m) => m.AlbumsModule),
  },
  {
    path: 'photos',
    loadChildren: () => import('./modules/photos/photos-module').then((m) => m.PhotosModule),
  },
  { path: 'todos', loadChildren: () => import('./modules/todos/todos-module').then((m) => m.TodosModule) },
  { path: 'users', loadChildren: () => import('./modules/users/users-module').then((m) => m.UsersModule) },
  {
    path: 'comments',
    loadChildren: () => import('./modules/comments/comments-module').then((m) => m.CommentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
