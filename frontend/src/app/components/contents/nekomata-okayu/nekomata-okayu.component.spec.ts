import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NekomataOkayuComponent } from './nekomata-okayu.component';

describe('NekomataOkayuComponent', () => {
    let component: NekomataOkayuComponent;
    let fixture: ComponentFixture<NekomataOkayuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NekomataOkayuComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NekomataOkayuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
