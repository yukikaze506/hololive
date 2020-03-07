import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from './side-nav-state';

@Injectable({
    providedIn: 'root'
})
export class SideNavHttpService {
    constructor(private httpClient: HttpClient) {}

    /**
     * メンバー情報を取得する
     */
    fetchMembers(): Observable<GetMembersResponse> {
        return this.httpClient.get<GetMembersResponse>('members');
    }
}

export interface GetMembersResponse {
    members: Members[];
}
