import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @HostBinding('class.app-side-nav') hostClass = true;

    constructor() {}

    ngOnInit(): void {}
}
