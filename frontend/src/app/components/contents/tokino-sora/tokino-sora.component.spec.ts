import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokinoSoraComponent } from './tokino-sora.component';

describe('TokinoSoraComponent', () => {
  let component: TokinoSoraComponent;
  let fixture: ComponentFixture<TokinoSoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokinoSoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokinoSoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
