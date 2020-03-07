import { TestBed } from '@angular/core/testing';
import { SideNavStoreService } from './side-nav-store.service';

describe('SideNavStoreService', () => {
    let service: SideNavStoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SideNavStoreService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
