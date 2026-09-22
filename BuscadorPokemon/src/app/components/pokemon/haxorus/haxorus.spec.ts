import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Haxorus } from './haxorus';

describe('Haxorus', () => {
  let component: Haxorus;
  let fixture: ComponentFixture<Haxorus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Haxorus]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Haxorus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
