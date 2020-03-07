import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinatoAquaComponent } from './minato-aqua.component';

describe('MinatoAquaComponent', () => {
    let component: MinatoAquaComponent;
    let fixture: ComponentFixture<MinatoAquaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MinatoAquaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MinatoAquaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
