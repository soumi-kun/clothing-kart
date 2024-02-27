import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusive-banner',
  templateUrl: './exclusive-banner.component.html',
  styleUrls: ['./exclusive-banner.component.css']
})
export class ExclusiveBannerComponent implements OnInit {
  @Input() bannerImageUrl: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
