import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=eb03df251074313f6e24c705f23a1cdc")
    .subscribe(
      {
        next:data=>{
          console.log(data)
        },
        error:err=>{
          console.log(err)
        }
      }
    )
  }

}
