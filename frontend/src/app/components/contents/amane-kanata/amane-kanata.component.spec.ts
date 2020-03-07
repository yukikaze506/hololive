import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AmaneKanataComponent } from './amane-kanata.component';

describe('AmaneKanataComponent', () => {
    let component: AmaneKanataComponent;
    let fixture: ComponentFixture<AmaneKanataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AmaneKanataComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AmaneKanataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
