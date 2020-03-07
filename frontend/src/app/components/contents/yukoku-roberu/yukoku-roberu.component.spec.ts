import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YukokuRoberuComponent } from './yukoku-roberu.component';

describe('YukokuRoberuComponent', () => {
    let component: YukokuRoberuComponent;
    let fixture: ComponentFixture<YukokuRoberuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [YukokuRoberuComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YukokuRoberuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
