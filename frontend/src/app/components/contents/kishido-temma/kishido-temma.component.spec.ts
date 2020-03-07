import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KishidoTemmaComponent } from './kishido-temma.component';

describe('KishidoTemmaComponent', () => {
    let component: KishidoTemmaComponent;
    let fixture: ComponentFixture<KishidoTemmaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KishidoTemmaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KishidoTemmaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
