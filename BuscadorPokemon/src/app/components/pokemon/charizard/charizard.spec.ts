import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Charizard } from './charizard';

describe('Charizard', () => {
  let component: Charizard;
  let fixture: ComponentFixture<Charizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Charizard]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Charizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
