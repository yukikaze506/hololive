export interface SideNavState {
    members: Members[];
}

export interface Members {
    id: string;
    name: string;
    nameAlphabet: string;
    nameBilibili: string | null;
    debutDate: string;
    birthday: string | null;
    twitterAccount: string;
    bilibiliAccount: string | null;
    youtube: Youtube;
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
    lastUpdated: string;
}

export const sideNavInitialSteta: SideNavState = {
    members: []
};
