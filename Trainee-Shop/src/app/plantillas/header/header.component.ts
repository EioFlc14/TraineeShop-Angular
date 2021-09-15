import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { pink } from 'src/environments/environment';
import { orange } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pinkFront = pink;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    sessionStorage.removeItem("cedula");
    this.router.navigate(['login']);
  }

}
