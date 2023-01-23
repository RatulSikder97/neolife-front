import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data;
  length;
  ngOnInit(): void {
    window["HomeComponent"] = this;
    this.data = JSON.parse(window["ANDROID"].renderAllTask());
  }
  showTask() {
    this.length = this.data.length;
  }

  showArray(arr) {
    alert(arr);
  }
}
