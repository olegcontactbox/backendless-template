import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { INews } from 'src/app/core/models/interfaces/news';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // postId$: Observable<any>;
  // post: INews;
  post;


  constructor(
    public sanitizer: DomSanitizer,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    // console.log('sm');
    // this.route.paramMap.pipe(
    //   map((params: ParamMap) => {
    //     const id = params.get('id');
    //     const post = this.firebaseService.getPost(id);
    //     return post;
    //   }
    //   )
    // );

    // const id = this.route.snapshot.paramMap.get('id');


    /////////////////////

    // this.firebaseService.getPost(this.route.snapshot.paramMap.get('id'))
    //   .toPromise()
    //   .then(res => {
    //     console.log(res.data());
    //     this.post = res.data();
    //   });

    ///////////////////////////

    this.store.select(store => store.newsState).subscribe(newsState => {
      const id = this.route.snapshot.paramMap.get('id');
      this.post = newsState.news.find(n => n.id === id);
      console.log(`post from store`, this.post);
      if (!this.post) {
        this.firebaseService.getPost(this.route.snapshot.paramMap.get('id'))
          .toPromise()
          .then(res => {
            console.log(`post from fs`, res.data());
            this.post = res.data();
          });
      }
    });
  }

}
