import { Component, OnInit } from '@angular/core';
import {VideosService}from '../../Services/videos.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  NToken: any[]=[];
  position: number = 0;
  videos: any[] = [];
  constructor(
    private videoServ : VideosService,
    ) {}

  ngOnInit(): void{
    this.videoServ.getVideos(0)
      .subscribe(resp=>{
        console.log(resp);
        this.videos.push(...resp.items);
        this.NToken[this.position+1] = resp.nextPageToken;
        this.NToken[0] = "CAoQAA";
      });
    }

  Gonext(): void{
    this.position = this.position + 1;
    this.videos=[];
      this.videoServ.getVideos(this.NToken[this.position])
        .subscribe(resp=>{
          this.videos.push(...resp.items);
          this.NToken[this.position + 1] = resp.nextPageToken;
        });
  }
  Goback(): void{
    this.position = this.position -1;
    this.videos = [];
    this.videoServ.getVideos(this.NToken[this.position])
      .subscribe(resp=>{
        this.videos.push(...resp.items);
      });
  }
  verVideo(video:any){
    Swal.fire({
      title: `<strong>${video.snippet.title}</strong>`,
      html:
        `<iframe width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/${video.snippet.resourceId.videoId}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowfullscreen>
          </iframe>`
      
    });
  }

}
