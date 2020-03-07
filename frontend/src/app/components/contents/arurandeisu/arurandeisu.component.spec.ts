import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArurandeisuComponent } from './arurandeisu.component';

describe('ArurandeisuComponent', () => {
    let component: ArurandeisuComponent;
    let fixture: ComponentFixture<ArurandeisuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArurandeisuComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArurandeisuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
