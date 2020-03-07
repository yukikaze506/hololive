import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NakiriAyameComponent } from './nakiri-ayame.component';

describe('NakiriAyameComponent', () => {
    let component: NakiriAyameComponent;
    let fixture: ComponentFixture<NakiriAyameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NakiriAyameComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NakiriAyameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
