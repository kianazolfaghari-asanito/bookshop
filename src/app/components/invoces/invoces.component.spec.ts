import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocesComponent } from './invoces.component';

describe('InvocesComponent', () => {
  let component: InvocesComponent;
  let fixture: ComponentFixture<InvocesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvocesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
