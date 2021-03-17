import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFleursHiverComponent } from './article-fleurs-hiver.component';

describe('ArticleFleursHiverComponent', () => {
  let component: ArticleFleursHiverComponent;
  let fixture: ComponentFixture<ArticleFleursHiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFleursHiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFleursHiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
