import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HanasakiMiyabiComponent } from './hanasaki-miyabi.component';

describe('HanasakiMiyabiComponent', () => {
    let component: HanasakiMiyabiComponent;
    let fixture: ComponentFixture<HanasakiMiyabiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HanasakiMiyabiComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HanasakiMiyabiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
