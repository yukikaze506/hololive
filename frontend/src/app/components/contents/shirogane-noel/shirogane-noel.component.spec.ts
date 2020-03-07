import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShiroganeNoelComponent } from './shirogane-noel.component';

describe('ShiroganeNoelComponent', () => {
    let component: ShiroganeNoelComponent;
    let fixture: ComponentFixture<ShiroganeNoelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShiroganeNoelComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShiroganeNoelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
