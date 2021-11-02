import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPakaianComponent } from './list-pakaian.component';

describe('ListPakaianComponent', () => {
  let component: ListPakaianComponent;
  let fixture: ComponentFixture<ListPakaianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPakaianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPakaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
