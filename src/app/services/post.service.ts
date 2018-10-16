import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Subject} from 'rxjs';
import {Post} from '../models/Post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];

        this.posts.forEach(
          (postToUpdate: Post) => {
            postToUpdate.createdAt = new Date(postToUpdate.createdAtFormatted);
          }
        );

        this.emitPosts();
      });
  }

  removePost(postToRemove: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postElement) => {
        if (postElement === postToRemove) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  createPost(title: string, content: string) {
    this.getPosts();
    const newPost = new Post(title, content);
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  updateLoveIt(postToUpdate: Post) {
    const postIndexToUpdate = this.posts.findIndex(
      (postElement) => {
        if (postElement === postToUpdate) {
          return true;
        }
      }
    );

    this.posts[+postIndexToUpdate].loveIts = postToUpdate.loveIts;
    this.savePosts();
    this.emitPosts();
  }
}
