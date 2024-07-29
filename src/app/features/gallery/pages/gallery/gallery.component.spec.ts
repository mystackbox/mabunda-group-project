import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';

fdescribe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //Only modules to be imported
      ],
      declarations: [
        GalleryComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   // Test Case: Page title
   it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'gallery' as title `, () => {
    expect(component.title).toEqual('gallery');
  });

  it(`should render title as 'GALLERY'`, () => {
    const titleDiv = fixture.nativeElement as HTMLElement;
    expect(titleDiv.querySelector('.page-title')?.textContent).toContain('GALLERY');
  })

});
