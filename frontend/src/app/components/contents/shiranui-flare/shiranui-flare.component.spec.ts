import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShiranuiFlareComponent } from './shiranui-flare.component';

describe('ShiranuiFlareComponent', () => {
    let component: ShiranuiFlareComponent;
    let fixture: ComponentFixture<ShiranuiFlareComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShiranuiFlareComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShiranuiFlareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
