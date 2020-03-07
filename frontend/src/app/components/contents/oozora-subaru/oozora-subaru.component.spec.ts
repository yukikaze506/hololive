import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OozoraSubaruComponent } from './oozora-subaru.component';

describe('OozoraSubaruComponent', () => {
    let component: OozoraSubaruComponent;
    let fixture: ComponentFixture<OozoraSubaruComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OozoraSubaruComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OozoraSubaruComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
