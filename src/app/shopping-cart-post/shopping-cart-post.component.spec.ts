import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPostComponent } from './shopping-cart-post.component';

describe('ShoppingCartPostComponent', () => {
  let component: ShoppingCartPostComponent;
  let fixture: ComponentFixture<ShoppingCartPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
