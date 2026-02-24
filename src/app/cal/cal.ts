import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';   // ✅ ADD THIS

@Component({
  selector: 'app-cal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cal.html',
  styleUrl: './cal.css',
})
export class Cal {

  constructor(private router: Router) {}   // ✅ ADD THIS

  shape: string = 'round';
  unit: string = 'inch';

  diameter: number = 0;
  length: number = 0;
  width: number = 0;
  height: number = 0;

  quantity: number = 1;
  rate: number = 2140;

  totalSqft: number = 0;
  totalCost: number = 0;
  dieCost: number = 0;
  perPieceCost: number = 0;

  convertToInch(value: number): number {
    if (this.unit === 'cm') return value / 2.54;
    if (this.unit === 'mm') return value / 25.4;
    return value;
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  calculate(): void {

    let totalArea = 0;

    if (this.shape === 'round') {
      const dia = this.convertToInch(this.diameter);
      const h = this.convertToInch(this.height);
      const circumference = 3.14 * dia;
      totalArea = (circumference * h * this.quantity) / 144;
    }

    if (this.shape === 'square') {
      const l = this.convertToInch(this.length);
      const w = this.convertToInch(this.width);
      const h = this.convertToInch(this.height);

      const sideArea = 4 * l * h;
      const bottomArea = l * w;

      totalArea = ((sideArea + bottomArea) * this.quantity) / 144;
    }

    this.totalSqft = totalArea;
    this.totalCost = totalArea * this.rate;
    this.dieCost = this.totalCost;
    this.perPieceCost = this.quantity > 0
      ? this.totalCost / this.quantity
      : 0;
  }

  clear(): void {
    this.shape = 'round';
    this.unit = 'inch';
    this.diameter = 0;
    this.length = 0;
    this.width = 0;
    this.height = 0;
    this.quantity = 1;
    this.rate = 2140;
    this.totalSqft = 0;
    this.totalCost = 0;
    this.dieCost = 0;
    this.perPieceCost = 0;
  }

  logout(): void {
    localStorage.removeItem('pinVerified');
    this.router.navigate(['/landingpage']);
  }
}