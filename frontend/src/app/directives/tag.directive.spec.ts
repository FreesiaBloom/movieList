import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagDirective } from './tag.directive';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { provideMockStore } from '@ngrx/store/testing';

@Component({
  template: `<span appTag>test</span>`
})
class TestTagDirectiveComponent { }

describe('TagDirective', () => {
  let fixture: ComponentFixture<TestTagDirectiveComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestTagDirectiveComponent, TagDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
      imports:      [ RouterTestingModule, HttpClientTestingModule ],
      providers:    [ provideMockStore({}) ]
    })
    .createComponent(TestTagDirectiveComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have grey background <span>', () => {
    const span: HTMLElement = fixture.nativeElement.querySelector('span');
    const bgColor = span.style.backgroundColor;
    expect(bgColor).toBe('rgb(224, 224, 224)');
  });
});
