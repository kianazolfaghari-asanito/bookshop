import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartablComponent } from './cartabl.component';

describe('CartablComponent', () => {
  let component: CartablComponent;
  let fixture: ComponentFixture<CartablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartablComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
