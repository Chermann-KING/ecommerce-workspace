import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should toggle sidebar', () => {
    const initialState = service.isSidebarOpen;
    service.toggleSidebar();
    expect(service.isSidebarOpen).toBe(!initialState);
  });
});
