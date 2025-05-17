import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-courses-mfe-entry',
  template: `<h1>Courses MFE ANGULAR</h1>`,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
