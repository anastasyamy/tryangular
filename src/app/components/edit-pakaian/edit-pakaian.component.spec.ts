import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPakaianComponent } from './edit-pakaian.component';

describe('EditPakaianComponent', () => {
  let component: EditPakaianComponent;
  let fixture: ComponentFixture<EditPakaianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPakaianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPakaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
