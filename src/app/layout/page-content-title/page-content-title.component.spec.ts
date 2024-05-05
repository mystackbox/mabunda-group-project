import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentTitleComponent } from './page-content-title.component';

describe('PageContentTitleComponent', () => {
  let component: PageContentTitleComponent;
  let fixture: ComponentFixture<PageContentTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageContentTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageContentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
