# hexo-tag-cplayer

A hexo plugin for [cPlayer](https://cplayer.js.org)

[简体中文文档](./readme-zh-CN.md)

### How to use

```
npm install hexo-tag-cplayer --save
```

Add such code to your post. `cplayer` will be generated there.

``` yaml
{% cplayer [autoplay] [yaml|cson|json] %}
# type your config here
{% endcplayer %}
```

#### Config Examples

[YAML](https://github.com/yaml/yaml):

``` yaml
{% cplayer autoplay %}
- name: チルドレンレコード # name
  artist: 96猫,伊東歌詞太郎 # music artist
  poster: https://cplayer.js.org/801422833716a4f0f96ff6dff1f77dfe.jpg # music poster
  src: https://cplayer.js.org/8af423669c27d265bb129d04a927044f.mp3 # music resource
- 27955597 # add music by 163music ID 
{% endcplayer %}
```

This will add 2 songs. "チルドレンレコード" and ["Crazy For You" from 163music](http://music.163.com/#/song?id=27955597)

[CSON](https://github.com/bevry/cson):

``` cson
{% cplayer autoplay cson %}
[
  {
    name: "チルドレンレコード"
    artist: "96猫,伊東歌詞太郎"
    poster:"https://cplayer.js.org/801422833716a4f0f96ff6dff1f77dfe.jpg"
    src:"https://cplayer.js.org/8af423669c27d265bb129d04a927044f.mp3"
  }
  27955597
]
{% endcplayer %}
```

This is equivalent to the configuration of `YAML`.

[JSON](http://www.json.org/):

``` json
{% cplayer autoplay json %}
[
  {
    "name": "チルドレンレコード",
    "artist": "96猫,伊東歌詞太郎",
    "poster":"https://cplayer.js.org/801422833716a4f0f96ff6dff1f77dfe.jpg",
    "src":"https://cplayer.js.org/8af423669c27d265bb129d04a927044f.mp3"
  },
  27955597
]
{% endcplayer %}
```

This is equivalent to the configuration of `YAML`.