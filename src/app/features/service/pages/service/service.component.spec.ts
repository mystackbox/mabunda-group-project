import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponent } from './service.component';

fdescribe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //Only modules to be imported
      ],
      declarations: [
        ServiceComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test Case: Page title
  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'our services' as title `, () => {
    expect(component.title).toEqual('our services');
  });

  it(`should render title as 'OUR SERVICES'`, () => {
    const titleDiv = fixture.nativeElement as HTMLElement;
    expect(titleDiv.querySelector('.page-title')?.textContent).toContain('OUR SERVICES');
  })

});
