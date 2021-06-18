import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  iloscZdjec: number = 10;
  nrZdjecia: number = 4;

  nextimg(): void
  {
    if(this.nrZdjecia < this.iloscZdjec) this.nrZdjecia = this.nrZdjecia + 1;
    else this.nrZdjecia = 1;
  }

  backimg(): void
  {
    if(this.nrZdjecia > 1) this.nrZdjecia = this.nrZdjecia - 1;
    else this.nrZdjecia = this.iloscZdjec;
  }


}
