import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RikkaComponent } from './rikka.component';

describe('RikkaComponent', () => {
    let component: RikkaComponent;
    let fixture: ComponentFixture<RikkaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RikkaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RikkaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
