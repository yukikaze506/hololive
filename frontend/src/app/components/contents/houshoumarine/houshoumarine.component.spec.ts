import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HoushoumarineComponent } from './houshoumarine.component';

describe('HoushoumarineComponent', () => {
    let component: HoushoumarineComponent;
    let fixture: ComponentFixture<HoushoumarineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HoushoumarineComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HoushoumarineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
