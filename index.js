hexo.extend.tag.register("cplayer",
    require('./lib/cplayer-tag.js'),
    {
        ends: true,
        async: true
    }
);