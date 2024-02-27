import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneComponent } from './phone-book.component';

describe('PhoneBookComponent', () => {
  let component: TelefoneComponent;
  let fixture: ComponentFixture<TelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelefoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
