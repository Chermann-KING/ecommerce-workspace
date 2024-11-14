import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  template: `
    <div class="relative group">
      <ng-content></ng-content>
      <div
        class="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-200 whitespace-nowrap z-50"
      >
        {{ text }}
      </div>
    </div>
  `,
})
export class TooltipComponent {
  @Input() text = '';
}
