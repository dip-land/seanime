class Provider {

    getSettings(): Settings {
        return {
            supportsMultiLanguage: true,
            supportsMultiScanlator: false,
        };
    }

    async search(opts: { query: string }): Promise<SearchResult[]> {
        return [
            {
                id: '',
                title: '',
                synonyms: [],
                year: 1,
                image: '',
            },
        ];
    }

    async findChapters(mangaId: string): Promise<ChapterDetails[]> {
        return [
            {
                id: '',
                url: '',
                title: '',
                index: 0,
                chapter: '',
                language: '',
                updatedAt: '',
            },
        ];
    }

    async findChapterPages(chapterId: string): Promise<ChapterPage[]> {
        return [
            {
                url: '',
                index: 0,
                headers: {
                    Referer: `${this.api}/`,
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36',
                },
            },
        ];
    }
}
