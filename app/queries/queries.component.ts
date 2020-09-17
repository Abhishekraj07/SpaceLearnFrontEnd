import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {
  Queries: any;


  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    if(!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getQueries()
      .subscribe( data => {
        console.log(data)
          this.Queries = data;
      });

  }

}
