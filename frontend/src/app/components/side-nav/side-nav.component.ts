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

    /**
     * メンバー情報
     */
    members$: Observable<Members[]> = this.sideNavService.member$;

    constructor(private sideNavService: SideNavService) {}

    /**
     * 初期化
     */
    ngOnInit(): void {
        this.sideNavService.fetchMembers();
    }
}
