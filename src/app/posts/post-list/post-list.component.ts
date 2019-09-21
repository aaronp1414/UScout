import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  //  posts = [
  //      {title: 'First Post', content: 'This is the first post\'s content'},
  //      {title: 'Second Post', content: 'This is the second post\'s content'},
  //      {title: 'Third Post', content: 'This is the third post\'s content'},
  //  ];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(postID: string) {
    this.postsService.deletePost(postID);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
