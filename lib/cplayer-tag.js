const utils = require('utility');
const cson = require('cson');
const scriptID = 'cplayer-script';
const yaml = require('js-yaml');
require('isomorphic-fetch');

module.exports = function (args, contents) {

  let autoplay = false;

  let targetID = 'cplayer-' + utils.randomString(8, '1234567890');

  let parser = 'yaml'

  args.forEach((arg) => {
    switch (arg.trim()) {
      case "autoplay": 
        autoplay = true;
        break;
      case "yaml": 
        parser = 'yaml';
        break;
      case "cson":
        parser = 'cson';
        break;
      case "json":
        parser = 'json';
        break;
      default:
        break;
    }
  })

  function parse(content, parser) {
    switch (parser) {
      case 'json':
        return JSON.parse(content);
      case 'cson':
        return cson.parse(content);
      case 'yaml':
        return yaml.load(content)
    }
  }

  let playlist = parse(contents, parser);

  let resPlaylist = [];
  let add163 = [];

  playlist = playlist.forEach(function(v) {
    switch (typeof v) {
      case 'number': 
        add163.push(v);
        break;
      default:
        resPlaylist.push(v);
        break;
    }
  });

  return `
    <div id=${JSON.stringify(targetID)}></div>
    <script>
      (function(){
        function loadcplayer() {
          if (typeof window.cplayerList === 'undefined') window.cplayerList = {};
          if (typeof window.cplayerList[${JSON.stringify(targetID)}] !== 'undefined') return;
          if (!cplayer.prototype.add163) cplayer.prototype.add163 = function add163(id) {
            if (!id) throw new Error("Unable Property.");
            return fetch("https://music.huaji8.top/?id=" + id).then(function(res){return res.json()}).then(function(data){
              let obj = {
                name: data.info.songs[0].name,
                artist: data.info.songs[0].ar.map(function(ar){ return ar.name }).join(','),
                poster: data.pic.url,
                lyric: data.lyric.lyric,
                sublyric: data.lyric.tlyric,
                src: data.url.url
              }
              this.add(obj);
              return obj;
            }.bind(this))
          }

          window.cplayerList[${JSON.stringify(targetID)}] = new cplayer({
            element: document.getElementById(${JSON.stringify(targetID)}),
            playlist: ${JSON.stringify(resPlaylist)},
            generateBeforeElement: true,
            deleteElementAfterGenerate: true,
            autoplay: ${JSON.stringify(autoplay)}
          });

          ${
            add163.map((a) => {
              return `window.cplayerList[${JSON.stringify(targetID)}].add163(${JSON.stringify(a)})`
            }) || ''
          }
        }
        
        if (typeof window.cplayer === 'undefined' && !document.getElementById(${JSON.stringify(scriptID)})) {
          var js = document.createElement("script");
          js.src = 'https://cdn.jsdelivr.net/gh/MoePlayer/cPlayer/dist/cplayer.js';
          js.id = ${JSON.stringify(scriptID)};
          js.addEventListener("load", loadcplayer);
          document.body.appendChild(js);
        } else {
          window.addEventListener("load", loadcplayer);
        }
      })()
    </script>
	`;
}