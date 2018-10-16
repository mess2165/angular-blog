import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Subject} from 'rxjs';
import {Post} from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [{
    title: 'premier post',
    content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eleifend consectetur. Aenean et nibh felis. Sed ' +
    'aliquet purus ac neque porta, a rutrum felis pellentesque. Proin euismod justo ut elit malesuada scelerisque. Nulla ' +
    'condimentum, justo et tempus molestie, neque sapien cursus dolor, non rhoncus nisi mi sit amet risus. Proin facilisis ' +
    'urna sit amet fermentum sodales. Suspendisse potenti. Nulla vestibulum nunc magna, non semper odio imperdiet ut.' +
    ' Vivamus cursus sapien vel molestie iaculis. Sed vel vehicula magna, condimentum lobortis erat. Curabitur ac libero ' +
    'commodo massa mollis tincidunt at vel diam.',
    loveIts: 0,
    createdAt : new Date('2018-10-08')
  },
    {
      title: 'SECOND post',
      content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eleifend consectetur. Aenean et nibh felis. Sed ' +
      'aliquet purus ac neque porta, a rutrum felis pellentesque. Proin euismod justo ut elit malesuada scelerisque. Nulla ' +
      'condimentum, justo et tempus molestie, neque sapien cursus dolor, non rhoncus nisi mi sit amet risus. Proin facilisis ' +
      'urna sit amet fermentum sodales. Suspendisse potenti. Nulla vestibulum nunc magna, non semper odio imperdiet ut.' +
      ' Vivamus cursus sapien vel molestie iaculis. Sed vel vehicula magna, condimentum lobortis erat. Curabitur ac libero ' +
      'commodo massa mollis tincidunt at vel diam.',
      loveIts: 0,
      createdAt : new Date('2018-10-09')
    },
    {
      title: 'DERNIER POST',
      content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eleifend consectetur. Aenean et nibh felis. Sed ' +
      'aliquet purus ac neque porta, a rutrum felis pellentesque. Proin euismod justo ut elit malesuada scelerisque. Nulla ' +
      'condimentum, justo et tempus molestie, neque sapien cursus dolor, non rhoncus nisi mi sit amet risus. Proin facilisis ' +
      'urna sit amet fermentum sodales. Suspendisse potenti. Nulla vestibulum nunc magna, non semper odio imperdiet ut.' +
      ' Vivamus cursus sapien vel molestie iaculis. Sed vel vehicula magna, condimentum lobortis erat. Curabitur ac libero ' +
      'commodo massa mollis tincidunt at vel diam.',
      loveIts: 0,
      createdAt : new Date()
    }];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    // firebase.database().ref('/posts')
    //   .on('value', (data) => {
    //     this.posts = data.val() ? data.val() : [];
    //   });

    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }
}
