export interface GetMembersResponse {
    members: ExtendsMembers[];
}

interface ExtendsMembers extends Members {
    youtube: Youtube;
}

export interface Members {
    id: string;
    name: string;
    nameAlphabet: string;
    nameBilibili: string | null;
    debutDate: Date;
    birthday: string | null;
    twitterAccount: string;
    bilibiliAccount: string | null;
}

export interface Youtube {
    membersId: string;
    channelId: string;
    channelName: string;
    subscriberCount: number;
    viewCount: number;
    bannerImageUrl: string;
    bannerImageUrlMobile: string;
    userIcon: string;
    lastUpdated: Date;
}
