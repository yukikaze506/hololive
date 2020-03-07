import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TokoyamiTowaComponent } from './tokoyami-towa.component';

describe('TokoyamiTowaComponent', () => {
    let component: TokoyamiTowaComponent;
    let fixture: ComponentFixture<TokoyamiTowaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TokoyamiTowaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TokoyamiTowaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
