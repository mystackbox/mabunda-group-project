import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //Only modules to be imported
      ],
      declarations: [
        ContactComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test Case: Page title
  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'contact us' as title `, () => {
    expect(component.title).toEqual('contact us');
  });

  it(`should render title as 'CONTACT US'`, () => {
    const titleDiv = fixture.nativeElement as HTMLElement;
    expect(titleDiv.querySelector('.page-title')?.textContent).toContain('CONTACT US');
  })
});
