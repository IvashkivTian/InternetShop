import { Component, OnInit } from '@angular/core';
import { SliderComponentComponent } from '../slider-component/slider-component.component';
import { MainProgectService } from '../main-progect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  currentPage: string;
  constructor(
    private service: MainProgectService, 
    private router: Router ) { }

  
  ngOnInit() {
    this.router.events.subscribe(() => this.checkUrl());
    console.log(this.router.url)
  }

  checkUrl(){
    
    if(this.router.url.includes('catalog')){
      this.currentPage = 'catalog';  
    }else if(this.router.url.includes('contacts')){
      this.currentPage = 'contacts';
  }else if(this.router.url.includes('/')){
    this.currentPage = '/';
}
  }
}
