import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstabelecimentosListaPage } from './estabelecimentos-lista.page';

describe('EstabelecimentosListaPage', () => {
  let component: EstabelecimentosListaPage;
  let fixture: ComponentFixture<EstabelecimentosListaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabelecimentosListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstabelecimentosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
