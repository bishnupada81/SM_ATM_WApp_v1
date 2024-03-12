import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranctionInfoComponent } from './tranction-info.component';

describe('TranctionInfoComponent', () => {
  let component: TranctionInfoComponent;
  let fixture: ComponentFixture<TranctionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranctionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranctionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
