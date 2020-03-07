import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HimemoriLunaComponent } from './himemori-luna.component';

describe('HimemoriLunaComponent', () => {
    let component: HimemoriLunaComponent;
    let fixture: ComponentFixture<HimemoriLunaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HimemoriLunaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HimemoriLunaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
