# hexo-tag-cplayer

一个 Hexo 插件，帮助使用 [cPlayer](https://cplayer.js.org)

[English README](./readme.md)

### 如何使用

```
npm install hexo-tag-cplayer --save
```

添加像这样的代码到你的文章中。`cplayer` 将会生成在那里。

``` yaml
{% cplayer [autoplay] [yaml|cson|json] %}
# type your config here
{% endcplayer %}
```

#### 设置范例

[YAML](https://github.com/yaml/yaml):

``` yaml
{% cplayer autoplay %}
- name: チルドレンレコード # 名字
  artist: 96猫,伊東歌詞太郎 # 艺术家
  poster: https://cplayer.js.org/801422833716a4f0f96ff6dff1f77dfe.jpg # 音乐海报
  src: https://cplayer.js.org/8af423669c27d265bb129d04a927044f.mp3 # 音乐资源链接
- 27955597 # 网易云音乐 ID
{% endcplayer %}
```

上面的配置会添加2首歌。 "チルドレンレコード" 和 ["Crazy For You"（从网易云音乐）](http://music.163.com/#/song?id=27955597)

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

这和 `YAML` 的配置是等效的。

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

这和 `YAML` 的配置是等效的。