import {Component, Input, OnInit} from '@angular/core';

import {PostService} from '../services/post.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLike() {
    ++this.post.loveIts;
    this.postService.updateLoveIt(this.post);
  }

  onDislike() {
    --this.post.loveIts;
    this.postService.updateLoveIt(this.post);
  }

  onRemove(post: Post) {
    this.postService.removePost(post);
    this.postService.emitPosts();
  }
}
