module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo', '@babel/preset-typescript'],
        plugins: [
            [
                'module-resolver',
                {
                    root: '.',
                    extensions: ['.ts', '.tsx', '.json', '.web.tsx'],
                    alias: {
                        '~': './src',
                    },
                },
            ],
        ],
    };
};
