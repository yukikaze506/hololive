import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HoshimatiSuiseiComponent } from './hoshimati-suisei.component';

describe('HoshimatiSuiseiComponent', () => {
    let component: HoshimatiSuiseiComponent;
    let fixture: ComponentFixture<HoshimatiSuiseiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HoshimatiSuiseiComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HoshimatiSuiseiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
