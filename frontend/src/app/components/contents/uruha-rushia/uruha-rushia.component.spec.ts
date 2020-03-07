import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UruhaRushiaComponent } from './uruha-rushia.component';

describe('UruhaRushiaComponent', () => {
    let component: UruhaRushiaComponent;
    let fixture: ComponentFixture<UruhaRushiaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UruhaRushiaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UruhaRushiaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
