import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormComponent } from './recipe-form.component';
import { By } from '@angular/platform-browser';

describe('RecipeFormComponent', () => {
  let component: RecipeFormComponent;
  let fixture: ComponentFixture<RecipeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//phone died one sec
//okey
//1. give it some id
  function getRecipeNameInput() { return fixture.debugElement.query(By.css('#test-id'))}

  //2. run the test again. it shd fail

  //3. Expected null to be truthy

  //4. so now we have to set the id of the html element

  //5. TOTAL: 1 SUCCESS

  //6. our test passed verifying that the element exist

  fit('should display the recipe name field', () => {
    expect(getRecipeNameInput()).toBeTruthy()
  })
});
