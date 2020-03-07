import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InugamiKoroneComponent } from './inugami-korone.component';

describe('InugamiKoroneComponent', () => {
    let component: InugamiKoroneComponent;
    let fixture: ComponentFixture<InugamiKoroneComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InugamiKoroneComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InugamiKoroneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
