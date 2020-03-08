export interface SideNavState {
    /**
     * メンバー情報
     */
    members: Members[];

    /**
     * 現在選択されているメンバー
     */
    currentMember: Members | null;
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
    route: string;
    title: string;
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
    members: [],
    currentMember: null
};
