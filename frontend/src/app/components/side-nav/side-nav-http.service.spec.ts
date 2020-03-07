import { TestBed } from '@angular/core/testing';
import { SideNavHttpService } from './side-nav-http.service';

describe('SideNavHttpService', () => {
    let service: SideNavHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SideNavHttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
