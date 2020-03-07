import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YuzukiChocoComponent } from './yuzuki-choco.component';

describe('YuzukiChocoComponent', () => {
    let component: YuzukiChocoComponent;
    let fixture: ComponentFixture<YuzukiChocoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [YuzukiChocoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YuzukiChocoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
