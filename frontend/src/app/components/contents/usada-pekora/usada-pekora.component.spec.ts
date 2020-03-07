import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsadaPekoraComponent } from './usada-pekora.component';

describe('UsadaPekoraComponent', () => {
    let component: UsadaPekoraComponent;
    let fixture: ComponentFixture<UsadaPekoraComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsadaPekoraComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsadaPekoraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
