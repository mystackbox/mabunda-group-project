import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideBarComponent } from './side-bar.component';

fdescribe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //Only modules to be imported
      ],
      declarations: [
        SideBarComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test Case: Component Instance
  it('should create an instance of this component', () => {
    expect(component).toBeTruthy();
  });

  // Test Case: Title
  it(`should have 'sidebar' as title `, () => {
    expect(component.title).toEqual('sidebar');
  });

  it(`should render title as 'SIDEBAR'`, () => {
    const titleDiv = fixture.nativeElement as HTMLElement;
    expect(titleDiv.querySelector('.sidebar-title')?.textContent).toContain('SIDEBAR');
  })

});
