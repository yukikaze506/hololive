export interface YoutubeApiResult {
    kind: string;
    pageInfo: { totalResults: number; resultsPerPage: number };
    items: {
        id: string;
        kind: string;
        brandingSettings: {
            channel: YoutubeChannel;
            image: YoutubeBanner;
            hints: YoutubeHint[];
        };
        statistics: Statistics;
        etag: string;
    }[];
    etag: string;
}

interface YoutubeBanner {
    bannerImageUrl: string;
    bannerMobileImageUrl: string;
    bannerTabletLowImageUrl: string;
    bannerTabletImageUrl: string;
    bannerTabletHdImageUrl: string;
    bannerTabletExtraHdImageUrl: string;
    bannerMobileLowImageUrl: string;
    bannerMobileMediumHdImageUrl: string;
    bannerMobileHdImageUrl: string;
    bannerMobileExtraHdImageUrl: string;
    bannerTvImageUrl: string;
    bannerTvLowImageUrl: string;
    bannerTvMediumImageUrl: string;
    bannerTvHighImageUrl: string;
}

interface YoutubeChannel {
    title: string;
    description: string;
    keywords: string;
    defaultTab: string;
    trackingAnalyticsAccountId: string;
    moderateComments: boolean;
    showRelatedChannels: boolean;
    showBrowseView: boolean;
    featuredChannelsTitle: string;
    featuredChannelsUrls: string[];
    unsubscribedTrailer: string;
    profileColor: string;
    country: string;
}

interface YoutubeHint {
    property: string;
    value: string;
}

interface Statistics {
    viewCount: string;
    commentCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
}
