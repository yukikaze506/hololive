import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AzkiComponent } from './azki.component';

describe('AzkiComponent', () => {
    let component: AzkiComponent;
    let fixture: ComponentFixture<AzkiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AzkiComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AzkiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
