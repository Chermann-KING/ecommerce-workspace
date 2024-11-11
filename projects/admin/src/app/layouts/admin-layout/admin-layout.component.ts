import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-gray-50">
      <main class="p-4">
        <router-outlet />
      </main>
    </div>
  `,
})
export class AdminLayoutComponent {}
