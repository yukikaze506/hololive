import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from '../../side-nav/side-nav-state';
import { SideNavService } from '../../side-nav/side-nav.service';

@Component({
    selector: 'app-tokino-sora',
    templateUrl: './tokino-sora.component.html',
    styleUrls: ['./tokino-sora.component.scss']
})
export class TokinoSoraComponent implements OnInit {
    readonly member$: Observable<Members | null> = this.sideNavService.currentMember$;

    constructor(private sideNavService: SideNavService) {}

    ngOnInit(): void {}
}
