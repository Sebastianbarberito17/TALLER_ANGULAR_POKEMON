import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragonite } from './dragonite';

describe('Dragonite', () => {
  let component: Dragonite;
  let fixture: ComponentFixture<Dragonite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dragonite]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Dragonite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
