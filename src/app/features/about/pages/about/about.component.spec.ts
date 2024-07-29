import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        AboutComponent
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   // Test Case: Page title
   it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'About Us' as title `, () => {
    expect(component.title).toEqual('about us');
  });

  it(`should render title as 'ABOUT US'`, () => {
    const titleDiv = fixture.nativeElement as HTMLElement;
    expect(titleDiv.querySelector('.page-title')?.textContent).toContain('ABOUT US');
  })

});
