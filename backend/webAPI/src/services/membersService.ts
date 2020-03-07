import { Service } from '@tsed/common';
import { Members, Youtube } from '../interfaces/responses/members';
import { DB } from './db';

@Service()
export class MembersService {
    constructor(private db: DB) {}

    async selectMembers(): Promise<{ members: Members; youtube: Youtube }[]> {
        const conn = await this.db.getConnection();
        const membersList: { members: Members; youtube: Youtube }[] = await conn
            .query({
                nestTables: true,
                sql: `
            SELECT
                members.id,
                members.name,
                members.name_alphabet,
                members.name_bilibili,
                members.debut_date,
                members.birthday,
                members.twitter_account,
                members.bilibili_account,
                youtube.members_id,
                youtube.channel_id,
                youtube.channel_name,
                youtube.subscriber_count,
                youtube.view_count,
                youtube.banner_image_url,
                youtube.banner_image_url_mobile,
                youtube.user_icon,
                youtube.last_updated
            FROM
                members
                INNER JOIN
                    youtube
                ON
                    members.id = youtube.members_id;
        `
            })
            .finally(() => conn.end());

        return membersList;
    }
}
