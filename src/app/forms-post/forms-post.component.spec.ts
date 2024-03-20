import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPostComponent } from './forms-post.component';

describe('FormsPostComponent', () => {
  let component: FormsPostComponent;
  let fixture: ComponentFixture<FormsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
