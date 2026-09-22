import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Flechinder } from './flechinder';

describe('Flechinder', () => {
  let component: Flechinder;
  let fixture: ComponentFixture<Flechinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flechinder]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Flechinder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
