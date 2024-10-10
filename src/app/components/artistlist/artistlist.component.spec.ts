import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistlistComponent } from './artistlist.component';

describe('ArtistlistComponent', () => {
  let component: ArtistlistComponent;
  let fixture: ComponentFixture<ArtistlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
