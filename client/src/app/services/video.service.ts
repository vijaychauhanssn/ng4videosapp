import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Video } from '../models/index';

@Injectable()
export class VideoService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/videos').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/videos/' + _id).map((response: Response) => response.json());
    }

}