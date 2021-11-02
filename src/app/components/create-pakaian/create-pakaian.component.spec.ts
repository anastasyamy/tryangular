import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePakaianComponent } from './create-pakaian.component';

describe('CreatePakaianComponent', () => {
  let component: CreatePakaianComponent;
  let fixture: ComponentFixture<CreatePakaianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePakaianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePakaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
