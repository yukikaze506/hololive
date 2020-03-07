import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShirakamiFubukiComponent } from './shirakami-fubuki.component';

describe('ShirakamiFubukiComponent', () => {
    let component: ShirakamiFubukiComponent;
    let fixture: ComponentFixture<ShirakamiFubukiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShirakamiFubukiComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShirakamiFubukiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
