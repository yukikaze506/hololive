export interface GetMembersResponse {
    members: Members[];
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
