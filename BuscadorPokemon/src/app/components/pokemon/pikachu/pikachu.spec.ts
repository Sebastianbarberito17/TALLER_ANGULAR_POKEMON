import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pikachu } from './pikachu';

describe('Pikachu', () => {
  let component: Pikachu;
  let fixture: ComponentFixture<Pikachu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pikachu]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Pikachu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
