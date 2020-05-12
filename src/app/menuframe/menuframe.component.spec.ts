import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuframeComponent } from './menuframe.component';

describe('MenuframeComponent', () => {
  let component: MenuframeComponent;
  let fixture: ComponentFixture<MenuframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
