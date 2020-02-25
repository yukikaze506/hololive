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
        snippet: Snippet;
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

interface Snippet {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
        default: Thumbnail;
        medium: Thumbnail;
        high: Thumbnail;
    };
    localized: {
        title: string;
        description: string;
    };
    country: string;
}

interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

interface Statistics {
    viewCount: string;
    commentCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
}
