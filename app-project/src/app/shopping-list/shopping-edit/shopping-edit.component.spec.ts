import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ReactiveFormsModule} from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit.component';
import { By } from '@angular/platform-browser';

fdescribe('ShoppingEditComponent', () => {
  let component: ShoppingEditComponent;
  let fixture: ComponentFixture<ShoppingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingEditComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

function getNameInput(){return fixture.debugElement.query(By.css('#name'))}

  fit('show display shopping list', () =>{
    expect(getNameInput()).toBeTruthy()
  })

  function getAddBtn() {
    return fixture.debugElement.query(By.css('#add-btn'))
  }

  fit('shd display addBtn', () => {
    expect(getAddBtn()).toBeTruthy();
  })

  fit('shd emit add event when button is clicked', () => {
    spyOn(component.add, 'emit');
    getAddBtn().nativeElement.click();
    fixture.detectChanges()
    expect(component.add.emit).toHaveBeenCalled();
  })
});
