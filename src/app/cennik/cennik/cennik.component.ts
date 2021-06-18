import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cennik',
  templateUrl: './cennik.component.html',
  styleUrls: ['./cennik.component.css']
})
export class CennikComponent implements OnInit {

  @ViewChild('input1') input1: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
