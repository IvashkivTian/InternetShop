import { Component, OnInit } from '@angular/core';
import { MainProgectService } from '../main-progect.service';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.scss']
})
export class SliderComponentComponent implements OnInit {

  
  constructor(private service: MainProgectService) { }

  ngOnInit() {
  }

  
  
}
