import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { AppCoreModule } from '../core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('TestDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppCoreModule, BrowserAnimationsModule],
  }));

  it('should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    const appServiceSpy = spyOn(service, 'snackbar').and.callThrough();

    // let a = service.snackbar(`yo!`);

    // expect(a).toBe(x);

    // expect(appServiceSpy).toHaveBeenCalled();
    // expect(appServiceSpy.calls.count()).toBe(1);

  });
});
