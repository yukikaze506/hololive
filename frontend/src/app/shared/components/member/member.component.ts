import { Component, Input, OnInit } from '@angular/core';
import { Members } from 'src/app/components/side-nav/side-nav-state';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
    @Input()
    member!: Members;

    constructor() {}

    ngOnInit(): void {}
}
