import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YozoraMelComponent } from './yozora-mel.component';

describe('YozoraMelComponent', () => {
    let component: YozoraMelComponent;
    let fixture: ComponentFixture<YozoraMelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [YozoraMelComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YozoraMelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
