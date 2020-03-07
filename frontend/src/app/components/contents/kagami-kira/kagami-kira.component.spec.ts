import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KagamiKiraComponent } from './kagami-kira.component';

describe('KagamiKiraComponent', () => {
    let component: KagamiKiraComponent;
    let fixture: ComponentFixture<KagamiKiraComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KagamiKiraComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KagamiKiraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
