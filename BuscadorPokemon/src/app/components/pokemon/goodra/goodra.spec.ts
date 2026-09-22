import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Goodra } from './goodra';

describe('Goodra', () => {
  let component: Goodra;
  let fixture: ComponentFixture<Goodra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goodra]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Goodra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
