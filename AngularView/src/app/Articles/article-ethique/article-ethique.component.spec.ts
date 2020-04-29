import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEthiqueComponent } from './article-ethique.component';

describe('ArticleEthiqueComponent', () => {
  let component: ArticleEthiqueComponent;
  let fixture: ComponentFixture<ArticleEthiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEthiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEthiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
