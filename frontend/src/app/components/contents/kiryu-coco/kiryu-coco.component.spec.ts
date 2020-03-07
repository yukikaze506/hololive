import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KiryuCocoComponent } from './kiryu-coco.component';

describe('KiryuCocoComponent', () => {
    let component: KiryuCocoComponent;
    let fixture: ComponentFixture<KiryuCocoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KiryuCocoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KiryuCocoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
