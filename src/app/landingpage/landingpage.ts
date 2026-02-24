import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule,FormsModule],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {

  pin: string = '';
  error: string = '';

  constructor(private router: Router) {}
verifyPin() {
  const correctPin = '1234';

  if (this.pin === correctPin) {
    this.error = '';

    // Save login status
    localStorage.setItem('pinVerified', 'true');

    this.router.navigate(['/formulapage']);
  } else {
    this.error = 'Invalid PIN';
  }
}
}