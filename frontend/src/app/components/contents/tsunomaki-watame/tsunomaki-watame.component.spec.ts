import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TsunomakiWatameComponent } from './tsunomaki-watame.component';

describe('TsunomakiWatameComponent', () => {
    let component: TsunomakiWatameComponent;
    let fixture: ComponentFixture<TsunomakiWatameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TsunomakiWatameComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TsunomakiWatameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
