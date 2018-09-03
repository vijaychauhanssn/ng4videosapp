import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/index';
import { Video } from '../../models/index';
import { UserService } from '../../services/index';
import { VideoService } from '../../services/index';
import { AlertService } from '../../services/index';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    @ViewChild('videoPlayer') videoplayer: any;
    currentUser: User;
    users: User[] = [];
    videos: Video[] = [];
    mp4: string;
    video:any;
    image:string;
    //vs : Array<{mp4: string, image:string}>;
    constructor(private userService: UserService,
     private videoService:VideoService,
     private nativeElement:ElementRef,
     private router: Router,
     private alertService: AlertService
     ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.videos = JSON.parse(localStorage.getItem('videos'));
       }

    toggleVideo(event:any)
    {
      this.videoplayer.nativeElement.pause();

      if(this.video !== 1)
      {
        alert("Not Play Video");
      }
      else{
      alert("Play Video");
      }
    }    

   
    ngOnInit() {
        this.loadAllUsers();
        this.loadAllVideos();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    
     private loadAllVideos() {
        this.videoService.getAll().subscribe(videos => { this.videos = videos; });
    }
    login(){
     this.router.navigate(['./login']);
    }
    
    vs = [
        {
           "mp4" : "video-1.mp4",
           "image": "logo.png"
        },
        {
          "mp4" : "video-2.mp4",
          "image": "logo.png"
        },
        {
          "mp4" : "video-3.mp4",
          "image": "logo.png"
        },
        {
          "mp4" : "video-4.mp4",
          "image": "logo.png"
        },
        {
          "mp4" : "video-5.mp4",
          "image": "logo.png"
        },
        {
          "mp4" : "video-6.mp4",
          "image": "logo.png"
        }
        ];
    

}
