import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from '../components/content/movie-list/movie-list.component';
import { TagDirective } from './tag.directive';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { provideMockStore } from '@ngrx/store/testing';

describe('TagDirective', () => {
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ MovieListComponent, TagDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
      imports:      [ RouterTestingModule, HttpClientTestingModule ],
      providers:    [ provideMockStore({}) ]
    })
    .createComponent(MovieListComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have #e0e0e0 <span>', () => {
    const span: HTMLElement = fixture.nativeElement.querySelector('span');
    const bgColor = span.style.backgroundColor;
    expect(bgColor).toBe('#e0e0e0');
  });
});
