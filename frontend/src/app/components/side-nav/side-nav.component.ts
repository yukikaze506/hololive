import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from './side-nav-state';
import { SideNavService } from './side-nav.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @HostBinding('class.app-side-nav') hostClass = true;

    members$: Observable<Members[]> = this.sideNavService.member$;

    constructor(private sideNavService: SideNavService) {}

    ngOnInit(): void {
        this.sideNavService.fetchMembers();
    }

    /**
     * 日本語・アルファベット・中国語名をスラッシュで結合する
     * 名称未設定・重複している名称は除く
     * @param member 対象のメンバー
     */
    generateTitle(member: Members): string {
        return [member.name, member.nameAlphabet, member.nameBilibili].filter((x, i, self) => !!x && self.indexOf(x) === i).join('/');
    }

    generateRoute(member: Members): string {
        return member.nameAlphabet.replace(' ', '');
    }
}
