import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicStore } from 'src/app/classes/basic-store';
import { Members, sideNavInitialSteta, SideNavState } from './side-nav-state';

@Injectable({
    providedIn: 'root'
})
export class SideNavStoreService extends BasicStore<SideNavState> {
    /**
     * メンバー情報
     */
    readonly members$: Observable<Members[]> = this.select<Members[]>((state: SideNavState) => state.members);

    /**
     * 現在選択されているメンバー
     */
    readonly currentMember$: Observable<Members | null> = this.select<Members | null>((state: SideNavState) => state.currentMember);

    constructor() {
        super(sideNavInitialSteta);
    }

    /**
     * メンバー情報を更新する
     * @param members 新しいメンバー情報
     */
    updateMembers(members: Members[]): void {
        this.update((state: SideNavState) => ({ ...state, members }));
    }

    /**
     * 現在のメンバーを更新する
     * @param currentRoute 現在のルート
     */
    updateCurrentMember(currentRoute: string): void {
        this.update((state: SideNavState) => {
            const currentMember: Members | undefined = state.members.find(member => member.route === currentRoute);

            return { ...state, currentMember: !!currentMember ? currentMember : null };
        });
    }
}
