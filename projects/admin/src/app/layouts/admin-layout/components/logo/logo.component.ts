import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="flex items-center gap-2">
      <span class="text-xl font-bold text-gray-900 dark:text-white"
        >Admin E-commerce</span
      >
    </div>
  `,
})
export class LogoComponent {}
