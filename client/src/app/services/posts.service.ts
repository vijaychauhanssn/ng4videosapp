import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

   // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

}
