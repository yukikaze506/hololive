import { Injectable } from '@angular/core';
import { GetMembersResponse, SideNavHttpService } from './side-nav-http.service';
import { SideNavStoreService } from './side-nav-store.service';

@Injectable({
    providedIn: 'root'
})
export class SideNavService {
    /**
     * メンバー情報
     */
    readonly member$ = this.sideNavStoreService.members$;

    constructor(private sideNavHttpService: SideNavHttpService, private sideNavStoreService: SideNavStoreService) {}

    /**
     * メンバー情報を取得する
     */
    fetchMembers(): void {
        this.sideNavHttpService
            .fetchMembers()
            .subscribe((response: GetMembersResponse) => this.sideNavStoreService.updateMembers(response.members));
    }
}
