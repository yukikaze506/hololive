import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RobocoSanComponent } from './roboco-san.component';

describe('RobocoSanComponent', () => {
    let component: RobocoSanComponent;
    let fixture: ComponentFixture<RobocoSanComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RobocoSanComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RobocoSanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
