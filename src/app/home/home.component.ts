import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  title = 'Sample Application';

  constructor(private router: Router) { }
  onTap() {
    //alert("Tapped  times!");
    let navigationExtras = {
      queryParams: { 'name': 'student.Name' }
    }
    this.router.navigate(["dashboard"]);
  
}
  ngOnInit() {
  }
}
