import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummaryComponent } from './cart-summary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from '../../services/cart.service';

describe('CartSummaryComponent', () => {
  let component: CartSummaryComponent;
  let fixture: ComponentFixture<CartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSummaryComponent ],
      imports: [HttpClientTestingModule],
      providers: [CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
