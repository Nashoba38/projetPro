import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePhotographierReptilesComponent } from './article-photographier-reptiles.component';

describe('ArticlePhotographierReptilesComponent', () => {
  let component: ArticlePhotographierReptilesComponent;
  let fixture: ComponentFixture<ArticlePhotographierReptilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePhotographierReptilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePhotographierReptilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
