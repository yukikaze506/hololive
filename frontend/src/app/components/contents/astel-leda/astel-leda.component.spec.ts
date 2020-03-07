import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AstelLedaComponent } from './astel-leda.component';

describe('AstelLedaComponent', () => {
    let component: AstelLedaComponent;
    let fixture: ComponentFixture<AstelLedaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AstelLedaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AstelLedaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
