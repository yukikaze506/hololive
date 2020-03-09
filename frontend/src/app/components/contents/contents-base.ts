import { Observable } from 'rxjs';
import { Members } from '../side-nav/side-nav-state';
import { SideNavService } from '../side-nav/side-nav.service';

export class ContentsBase {
    /**
     * 選択されているメンバー情報
     */
    readonly member$: Observable<Members | null> = this.sideNavService.currentMember$;

    constructor(protected sideNavService: SideNavService) {}
}
