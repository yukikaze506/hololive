import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AkaiHaatoComponent } from './akai-haato.component';

describe('AkaiHaatoComponent', () => {
    let component: AkaiHaatoComponent;
    let fixture: ComponentFixture<AkaiHaatoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AkaiHaatoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AkaiHaatoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
