class Provider {
    getSettings(): Settings {
        return {
            episodeServers: ['server1', 'server2'],
            supportsDub: true,
        };
    }

    async search(query: SearchOptions): Promise<SearchResult[]> {
        return [
            {
                id: '',
                title: '',
                url: '',
                subOrDub: 'both',
            },
        ];
    }
    async findEpisodes(id: string): Promise<EpisodeDetails[]> {
        return [
            {
                id: '',
                number: 1,
                url: '',
                title: '',
            },
        ];
    }
    async findEpisodeServer(episode: EpisodeDetails, _server: string): Promise<EpisodeServer> {
        let server = 'server1';
        if (_server !== 'default') server = _server;

        return {
            server: server,
            headers: {},
            videoSources: [
                {
                    url: 'https://example.com/.../stream.m3u8',
                    type: 'm3u8',
                    quality: '1080p',
                    subtitles: [
                        {
                            id: '1',
                            url: 'https://example.com/.../subs.vtt',
                            language: 'en',
                            isDefault: true,
                        },
                    ],
                },
            ],
        };
    }
}
