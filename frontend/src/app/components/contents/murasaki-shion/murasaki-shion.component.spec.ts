import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MurasakiShionComponent } from './murasaki-shion.component';

describe('MurasakiShionComponent', () => {
    let component: MurasakiShionComponent;
    let fixture: ComponentFixture<MurasakiShionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MurasakiShionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MurasakiShionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
