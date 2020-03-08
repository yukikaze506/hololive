import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { GetMembersResponse, SideNavHttpService } from './side-nav-http.service';
import { Members } from './side-nav-state';
import { SideNavStoreService } from './side-nav-store.service';

@Injectable({
    providedIn: 'root'
})
export class SideNavService {
    /**
     * メンバー情報
     */
    readonly member$: Observable<Members[]> = this.sideNavStoreService.members$;

    /**
     * 現在選択されているメンバー
     */
    readonly currentMember$: Observable<Members | null> = this.sideNavStoreService.currentMember$;

    constructor(private router: Router, private sideNavHttpService: SideNavHttpService, private sideNavStoreService: SideNavStoreService) {}

    /**
     * メンバー情報を取得する
     */
    fetchMembers(): void {
        this.sideNavHttpService
            .fetchMembers()
            .pipe(
                tap(members =>
                    members.members.forEach(member => {
                        member.route = this.generateRoute(member);
                        member.title = this.generateTitle(member);
                    })
                )
            )
            .subscribe((response: GetMembersResponse) => {
                this.sideNavStoreService.updateMembers(response.members);
                this.subscribeRoutingEvent(this.router, this.sideNavStoreService);
            });
    }

    /**
     * ルーティングイベントを監視し、現在選択されているメンバー情報を更新する
     * @param router Router
     * @param sideNavStoreService SideNavStoreService
     */
    private subscribeRoutingEvent(router: Router, sideNavStoreService: SideNavStoreService): void {
        router.events
            .pipe(filter((next): next is NavigationEnd => next instanceof NavigationEnd))
            .subscribe((next: NavigationEnd) => sideNavStoreService.updateCurrentMember(next.url));
        sideNavStoreService.updateCurrentMember(router.url);
    }

    /**
     * 英名からメンバーのルート情報を生成する
     * @param member 対象のメンバー
     */
    private generateRoute(member: Members): string {
        const route = member.nameAlphabet.replace(' ', '');

        return '/' + route;
    }

    /**
     * 日本語・アルファベット・中国語名をスラッシュで結合する
     * 名称未設定・重複している名称は除く
     * @param member 対象のメンバー
     */
    private generateTitle(member: Members): string {
        const title = [member.name, member.nameAlphabet, member.nameBilibili]
            .filter((x, i, self) => !!x && self.indexOf(x) === i)
            .join('/');

        return title;
    }
}
