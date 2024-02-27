import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSubtotalComponent } from './cart-subtotal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from '../../services/cart.service';

describe('CartSubtotalComponent', () => {
  let component: CartSubtotalComponent;
  let fixture: ComponentFixture<CartSubtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSubtotalComponent ],
      imports: [HttpClientTestingModule],
      providers: [CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
