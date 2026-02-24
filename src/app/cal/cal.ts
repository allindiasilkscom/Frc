import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cal',
  imports: [CommonModule,FormsModule],
  templateUrl: './cal.html',
  styleUrl: './cal.css',
})
export class Cal {


  diameter: number = 0;
  height: number = 0;
  density: number = 0;
  quantity: number = 1;

  result: number = 0;

  calculate() {
    // Volume formula (Cylinder): π r² h
    const radius = this.diameter / 2;
    const volume = Math.PI * radius * radius * this.height;

    this.result = volume * this.density * this.quantity;
  }

  clear() {
    this.diameter = 0;
    this.height = 0;
    this.density = 0;
    this.quantity = 1;
    this.result = 0;
  }
}