import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostService} from './services/post.service';
import {RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent,
    NewPostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
