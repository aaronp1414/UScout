import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
    //  posts = [
    //      {title: 'First Post', content: 'This is the first post\'s content'},
    //      {title: 'Second Post', content: 'This is the second post\'s content'},
    //      {title: 'Third Post', content: 'This is the third post\'s content'},
    //  ];
    posts: Post[] = [];
    private postsSub: Subscription;
    private authStatusSub: Subscription;
    userIsAuthenticated = false;
    userId: string;
    constructor(
        public postsService: PostsService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.postsService.getPosts();
        this.userId = this.authService.getUserId();
        this.postsSub = this.postsService
            .getPostUpdateListener()
            .subscribe((posts: Post[]) => {
                this.posts = posts;
            });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
                this.userIsAuthenticated = isAuthenticated;
                this.userId = this.authService.getUserId();
            });
    }

    onDelete(postID: string) {
        this.postsService.deletePost(postID);
    }

    viewProfile(usId: string) {
        this.router.navigate(['/profile/' + usId]);
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    }
}
