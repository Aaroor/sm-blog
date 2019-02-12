import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThemeComponent } from './blog-theme.component';

describe('BlogThemeComponent', () => {
  let component: BlogThemeComponent;
  let fixture: ComponentFixture<BlogThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
