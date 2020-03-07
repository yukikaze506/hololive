import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SakuramikoComponent } from './sakuramiko.component';

describe('SakuramikoComponent', () => {
    let component: SakuramikoComponent;
    let fixture: ComponentFixture<SakuramikoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SakuramikoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SakuramikoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
