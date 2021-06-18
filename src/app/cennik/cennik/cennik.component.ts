import { ConditionalExpr } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cennik',
  templateUrl: './cennik.component.html',
  styleUrls: ['./cennik.component.css']
})
export class CennikComponent implements OnInit {

  constructor() {}

  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  @ViewChild('input5') input5!: ElementRef;
  @ViewChild('input6') input6!: ElementRef;

  cena1: number = 25;
  cena2: number = 40;
  cena3: number = 35;
  cena4: number = 30;
  cena5: number = 20;
  cena6: number = 60;

  ngOnInit(): void {
  }

  oblicz1(): void
  {
    console.log(this.input1!.nativeElement.value);

  }
  oblicz2(): void
  {
    console.log(this.input2!.nativeElement.value);

  }
  oblicz3(): void
  {
    console.log(this.input3!.nativeElement.value);

  }
  oblicz4(): void
  {
    console.log(this.input4!.nativeElement.value);

  }
  oblicz5(): void
  {
    console.log(this.input5!.nativeElement.value);

  }
  oblicz6(): void
  {
    console.log(this.input6!.nativeElement.value);

  }




}
