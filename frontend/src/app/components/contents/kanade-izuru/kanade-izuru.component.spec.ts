import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KanadeIzuruComponent } from './kanade-izuru.component';

describe('KanadeIzuruComponent', () => {
    let component: KanadeIzuruComponent;
    let fixture: ComponentFixture<KanadeIzuruComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KanadeIzuruComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KanadeIzuruComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
