import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NatsuiroMatsuriComponent } from './natsuiro-matsuri.component';

describe('NatsuiroMatsuriComponent', () => {
    let component: NatsuiroMatsuriComponent;
    let fixture: ComponentFixture<NatsuiroMatsuriComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NatsuiroMatsuriComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NatsuiroMatsuriComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
