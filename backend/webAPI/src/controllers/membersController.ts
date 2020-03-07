import { Controller, Get } from '@tsed/common';
import { GetMembersResponse, Members, Youtube } from '../interfaces/responses/members';
import { MembersService } from '../services/membersService';

@Controller('/members')
export class MembersController {
    constructor(private membersService: MembersService) {}

    @Get()
    async getMembers(): Promise<GetMembersResponse> {
        const members: { members: Members; youtube: Youtube }[] = await this.membersService.selectMembers();

        return {
            members: members.map(member => ({
                ...member.members,
                youtube: member.youtube
            }))
        };
    }
}
