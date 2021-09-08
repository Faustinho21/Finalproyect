import { Injectable } from '@angular/core';
import{HttpClient, HttpParams}from '@angular/common/http';
import{YoutubeResponse}from '../Models/videos.model';


@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private youtubeUrl ='https://www.googleapis.com/youtube/v3';
  private apiKey ='AIzaSyCk7c299rvTsMCCdUeTMTR9Ifv3qmXlXw4';
  private playlist ='UU9IKtxn9AIGelnYmwYr0Lxw';
  constructor(
    private http : HttpClient,
  ) { }
  getVideos(token:any){
  
    const urlVideos = `${this.youtubeUrl}/playlistItems`;
    if(token){
    const params = new HttpParams()
      .set('key',this.apiKey)
      .set('part','snippet')
      .set('playlistId',this.playlist)
      .set('maxResults','12')
      .set('pageToken', token)
      return this.http.get<YoutubeResponse>(urlVideos, {params});
    }
    else{
      const params = new HttpParams()
      .set('key',this.apiKey)
      .set('part','snippet')
      .set('playlistId',this.playlist)
      .set('maxResults','12')
      return this.http.get<YoutubeResponse>(urlVideos, {params});
    }
    
  }
}
