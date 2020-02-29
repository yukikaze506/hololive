import { Controller, Get } from '@tsed/common';
import { GetMembersResponse, Members } from '../interfaces/responses/members';
import { MembersService } from '../services/membersService';

@Controller('/members')
export class MembersController {
    constructor(private membersService: MembersService) {}

    @Get()
    async getMembers(): Promise<GetMembersResponse> {
        const members: Members[] = await this.membersService.selectMembers();

        return {
            members
        };
    }
}
