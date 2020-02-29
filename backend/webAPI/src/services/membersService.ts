import { Service } from '@tsed/common';
import { Members } from '../interfaces/responses/members';
import { DB } from './db';

@Service()
export class MembersService {
    constructor(private db: DB) {}

    async selectMembers(): Promise<Members[]> {
        const conn = await this.db.getConnection();
        const membersList: Members[] = await conn.query(`
            SELECT
                id,
                name,
                name_alphabet,
                name_bilibili,
                debut_date,
                birthday,
                twitter_account,
                bilibili_account
            FROM
                members;
        `);

        return membersList;
    }
}
