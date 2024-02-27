import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerArticleComponent } from './banner-article.component';

describe('BannerArticleComponent', () => {
  let component: BannerArticleComponent;
  let fixture: ComponentFixture<BannerArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
