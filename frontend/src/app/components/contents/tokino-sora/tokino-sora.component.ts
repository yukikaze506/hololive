import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../side-nav/side-nav.service';
import { ContentsBase } from '../contents-base';

@Component({
    selector: 'app-tokino-sora',
    templateUrl: './tokino-sora.component.html',
    styleUrls: ['./tokino-sora.component.scss']
})
export class TokinoSoraComponent extends ContentsBase implements OnInit {
    constructor(sideNavService: SideNavService) {
        super(sideNavService);
    }

    ngOnInit(): void {}
}
