import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AkiRosenthalComponent } from './aki-rosenthal.component';

describe('AkiRosenthalComponent', () => {
    let component: AkiRosenthalComponent;
    let fixture: ComponentFixture<AkiRosenthalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AkiRosenthalComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AkiRosenthalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
