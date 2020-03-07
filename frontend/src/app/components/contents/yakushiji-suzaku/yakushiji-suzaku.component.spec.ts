import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YakushijiSuzakuComponent } from './yakushiji-suzaku.component';

describe('YakushijiSuzakuComponent', () => {
    let component: YakushijiSuzakuComponent;
    let fixture: ComponentFixture<YakushijiSuzakuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [YakushijiSuzakuComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YakushijiSuzakuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
