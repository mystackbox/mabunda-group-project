import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //Only modules to be imported
      ],
      declarations: [
        HomeComponent
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // Test Case: Component Instance
  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

   // Test Case: Title
  it(`should have 'home' as title `, () => {
    expect(component.title).toEqual('home');
  });

  it(`should render title as 'HOME'`, () => {
    const titleDiv = fixture.nativeElement as HTMLElement;
    expect(titleDiv.querySelector('.page-title')?.textContent).toContain('HOME');
  })


});
