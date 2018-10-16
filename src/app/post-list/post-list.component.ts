import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe() ;
  }
}
