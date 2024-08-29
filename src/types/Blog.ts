export type IBlog = {
    source: {
        id: string | null;
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type IBlogs = Array<IBlog>