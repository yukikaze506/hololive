import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OokamiMioComponent } from './ookami-mio.component';

describe('OokamiMioComponent', () => {
    let component: OokamiMioComponent;
    let fixture: ComponentFixture<OokamiMioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OokamiMioComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OokamiMioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
