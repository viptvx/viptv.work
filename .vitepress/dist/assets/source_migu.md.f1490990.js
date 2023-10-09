import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.18efe07a.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"source/migu.md","filePath":"source/migu.md","lastUpdated":1694305646000}'),p={name:"source/migu.md"},l=o(`<h2 id="咪咕直播源播放接口" tabindex="-1">咪咕直播源播放接口 <a class="header-anchor" href="#咪咕直播源播放接口" aria-label="Permalink to &quot;咪咕直播源播放接口&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">标清接口：https://yk.miguvideo.com/playurl/v1/play/playurlh5?rateType=1&amp;contId=608807420</span></span>
<span class="line"><span style="color:#e1e4e8;">高清接口：https://yk.miguvideo.com/playurl/v1/play/playurlh5?rateType=2&amp;contId=608807420</span></span>
<span class="line"><span style="color:#e1e4e8;">超清接口：https://yk.miguvideo.com/playurl/v1/play/playurlh5?rateType=3&amp;contId=608807420</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">标清接口：https://yk.miguvideo.com/playurl/v1/play/playurlh5?rateType=1&amp;contId=608807420</span></span>
<span class="line"><span style="color:#24292e;">高清接口：https://yk.miguvideo.com/playurl/v1/play/playurlh5?rateType=2&amp;contId=608807420</span></span>
<span class="line"><span style="color:#24292e;">超清接口：https://yk.miguvideo.com/playurl/v1/play/playurlh5?rateType=3&amp;contId=608807420</span></span></code></pre></div><h2 id="咪咕直播源json代码" tabindex="-1">咪咕直播源JSON代码 <a class="header-anchor" href="#咪咕直播源json代码" aria-label="Permalink to &quot;咪咕直播源JSON代码&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV1综合HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/cctv1hd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV2财经HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/cctv2hd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV3综艺HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv3hd/2000/index.m3u8?&amp;ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV4中文国际-欧洲HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv4ouhd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV4中文国际-美洲HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv4meihd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV5体育HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv5hdnew/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV5+体育赛事HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv5plusnew/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV6电影HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv6hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV7国防军事HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv7hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV8电视剧HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv8hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV9纪录HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv9hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV10科教HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv10hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV11戏曲HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/cctv11hd/51/20200103/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV12社会与法HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv12hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV13新闻&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/cctv13/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV14少儿HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv14hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV15音乐HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv15hd/51/index.m3u8?&amp;ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV17农村农业HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv17hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV兵器科技&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/gfjs/gfjs711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV怀旧剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/hjjc/hjjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV风云剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/fyjc/fyjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV风云音乐&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/fyyy/fyyy711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV世界地理&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/sjdl/sjdl711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV文化精品&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/ysjp/ysjp711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV风云足球&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/fyzq/fyzq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV央视台球&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/ystq/ystq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV央视台球2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/ystq/ystq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV高尔夫网球&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/gefwq/gefwq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV女性时尚&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/nxss/nxss711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CCTV第一剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/dyjc/dyjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CGTN&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/cctvnews/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CGTN纪录&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/doc/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CGTN阿拉伯语&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/SD/cctv/alabo/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CGTN法语&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/fayu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CGTN西班牙语&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/xibanya/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CGTN俄语&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/eyu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CETV1中教1台HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cctv/cetv1hd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CETV2中教2台 &quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/cetv2/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CETV3中教3台&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/cetv3/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CETV4中教4台&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/cetv4/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;北京卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/bjws/bjws711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;东方卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/dongfangwshd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;天津卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-tianjinhd-1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;重庆卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/chongqing/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;黑龙江卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-heilongjianghd-1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;吉林卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/jilin/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;辽宁卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/liaoningwshd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;内蒙古卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/neimeng/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;宁夏卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/ningxia/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;甘肃卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/gansu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;青海卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/qinghai/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;陕西卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/shan3xi/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;河北卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/hebei/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;山西卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/shanxi/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;安徽卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/anhuiwshd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;河南卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-henanwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;湖北卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/hubeiwshd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;湖南卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-hunanhd-1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江西卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/jxwshd/51/20190820/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/jiangsuhd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;浙江卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/zhejianghd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;东南卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/bestv/dnws/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广东卫视HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/gdws/gdws711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;南方卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/nfmedia/nfws/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广西卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-guangxiwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;云南卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/yunnan/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;贵州卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-guizhouwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;四川卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/sichuanTV/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;新疆卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-xinjiangwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;兵团卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/bttv/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;西藏卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/xizang/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;海南卫视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/SD/lvyou/711/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;北京体育*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/btv/btv6/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;四海钓鱼&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/shdiaoyu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;国学频道&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/ocn/shuhua/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;上海新闻综合HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/xinwenzonghehd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;第一财经&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/bestv/dycj/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;东方影视高清&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/dianshijuhd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;东方都市&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/2018/dfl/yulesd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;上视纪实人文高清&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/jspdhd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;上海ICS&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/waiyusd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;哈哈炫动&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/xdkt/xdkt711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;法治天地&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/fztd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;游戏风云&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/ocn/youxifengyunhd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;全纪实HD&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/ocn/quanjishihd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;漳县综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/zhangxianzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;临洮电视台&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/linyaodst/51/20191206/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;汉中新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/hanzhongzonghe/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;汉中公共&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/hanzhonggonggong/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;汉中留坝电视台&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/hzlbdianshitai/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;SDETV山东教育&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/shandongedu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;德州新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/dzxwzh/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;德州公共&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/dzgg/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;德州图文&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/dztw/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;山西经济资讯&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxjingjizixun/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;山西影视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxyingshi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;山西科教&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxkejiao/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;山西公共&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxgonggong/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;山西少儿&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxshaoer/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;山西黄河&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxhuanghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;中国黄河&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/zghuanghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;恩施新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/enshixinwen/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;恩施公共&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/enshigonggong/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;长阳综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cnr/cyzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;孝感公共&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/xiaogangonggong/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏城市&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jschengshi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏综艺&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jszongyi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏公共新闻&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsgonggong/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏教育&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsjiaoyu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏国际&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsguoji/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏影视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsyingshi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏体育休闲&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jstiyu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏学习&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsxuexi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;好享购物&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/hxgw/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;江苏靓妆&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsliangzhuang/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;优漫卡通&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/ymkt/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;无锡新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/wxxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;常州新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/czxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;扬州新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/yzxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;苏州新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/szxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;泰州新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/tzxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;盐城新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/ycxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;淮安新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/haxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;镇江新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/zjxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;徐州新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/xzxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;宿迁新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/sqxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;连云港新闻综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/lygxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;浙江少儿&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/zj/se/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;杭州影视&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/hz/ys/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;杭州综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/hz/zh/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广东体育&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/nfmedia/gdty/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;嘉佳卡通&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/nfmedia/jjkt/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广西果洛电视台&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/guoluotv/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;威远综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/wyzh/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;黄金剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100172024/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;军旅剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180303/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;抗战老片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179384/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;少林剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179213/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;喜剧联盟&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5101097468/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;情感剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179837/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;精英剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354627/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;热剧联播&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cctv/rejulianbo/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;高清大片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cctv/gaoqingdapian/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;僵尸剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100192783/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;深夜失眠剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100181674/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;红色谍战剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5101079524/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华视浪漫影院&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100172368/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;每日科幻电影&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100172731/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;追剧少女&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100002089-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;怀旧老片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100074916/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;武侠剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000755/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;精品网剧&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000751/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;假期剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000747/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;国际剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179386/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;经典频道&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179383/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;精品剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/jpjc/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;高分影院&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000708/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;新片放映厅&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100030975-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华视火爆劲片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100168805/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;成龙作品集&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010211/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;周星驰影院&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100144102/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;吴京作品集&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180867/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;刘德华影院&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354855/75/index.m3u8?&amp;ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;经典贺岁片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100181836/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;古天乐影院&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000744/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;郭富城影院&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010220/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;刘亦菲影视展播&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010221/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;高圆圆影视展播&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100002172-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;古力娜扎影视展播&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100170828/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;葛优作品集&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354660/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;金庸频道&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100181876/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;刘涛作品集&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100178547/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;张国荣影院&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354727/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;神探狄仁杰&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179816/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;红楼剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100178536/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;爱情公寓&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180868/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;包青天&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179054/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;天龙八部集&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180869/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;盗墓方法论&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179159/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;咪咕24小时体育台&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/tysy201903/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;综艺现场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100074920/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;SNH48剧场公演&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100002043-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;风尚音乐&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/fsyy/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;高清娱乐&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/zhpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;超级飞侠&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010213/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;小猪佩奇&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010216/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;少儿动漫&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/sedm/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;快乐儿歌&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102439680/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;益智学堂&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102440005/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;梦幻童话&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102439963/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;英语启蒙&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102440001/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;BBC独家&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5101074616/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;探索纪录&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/tsjl/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Discovery王牌节目展播&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5101098146/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN电影综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/cnbn/cnbn711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN院线大片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/yuanxiandapian/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN综合&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/xinqidian/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN文旅中国&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/cibnlvyou/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN真人秀&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/peoplecn/cibnzhenrenxiu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN艺术院线&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibnteadjpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN纪录片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibnjlpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN炫佳动漫&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibndmpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN童学世界&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibnrbjc/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN流金岁月&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/cibnshoucang/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN风尚运动&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/cibnfsyd/51/20191029/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN经典剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/peoplecn/cibnjingdianjuchang/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN斗牛财经&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/cibndncj/51/20191029/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN微电影&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/cibnweimovie/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CIBN骄阳剧场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/cibnjdjc/cibnjdjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV1综合HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/cctv1hd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV2财经HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/cctv2hd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV3综艺HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv3hd/2000/index.m3u8?&amp;ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV4中文国际-欧洲HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv4ouhd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV4中文国际-美洲HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv4meihd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV5体育HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv5hdnew/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV5+体育赛事HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv5plusnew/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV6电影HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv6hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV7国防军事HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv7hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV8电视剧HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv8hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV9纪录HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv9hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV10科教HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv10hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV11戏曲HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/cctv11hd/51/20200103/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV12社会与法HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv12hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV13新闻&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/cctv13/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV14少儿HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/cctv14hd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV15音乐HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv15hd/51/index.m3u8?&amp;ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV17农村农业HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/20200324/cctv17hd/51/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV兵器科技&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/gfjs/gfjs711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV怀旧剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/hjjc/hjjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV风云剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/fyjc/fyjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV风云音乐&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/fyyy/fyyy711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV世界地理&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/sjdl/sjdl711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV文化精品&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/ysjp/ysjp711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV风云足球&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/fyzq/fyzq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV央视台球&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/ystq/ystq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV央视台球2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/ystq/ystq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV高尔夫网球&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/gefwq/gefwq711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV女性时尚&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/nxss/nxss711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CCTV第一剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/dyjc/dyjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CGTN&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/cctvnews/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CGTN纪录&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/doc/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CGTN阿拉伯语&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/SD/cctv/alabo/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CGTN法语&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/fayu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CGTN西班牙语&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/xibanya/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CGTN俄语&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/cctv/eyu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CETV1中教1台HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cctv/cetv1hd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CETV2中教2台 &quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/cetv2/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CETV3中教3台&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/cetv3/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CETV4中教4台&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/cetv4/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;北京卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/bjws/bjws711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;东方卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/dongfangwshd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;天津卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-tianjinhd-1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;重庆卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/chongqing/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;黑龙江卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-heilongjianghd-1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;吉林卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/jilin/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;辽宁卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/liaoningwshd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;内蒙古卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/neimeng/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;宁夏卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/ningxia/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;甘肃卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/gansu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;青海卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/qinghai/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;陕西卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/shan3xi/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;河北卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/hebei/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;山西卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/shanxi/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;安徽卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/anhuiwshd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;河南卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-henanwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;湖北卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/hubeiwshd/2000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;湖南卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-hunanhd-1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江西卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/jxwshd/51/20190820/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/jiangsuhd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;浙江卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cctv/zhejianghd/1200/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;东南卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/bestv/dnws/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广东卫视HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/gdws/gdws711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;南方卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/nfmedia/nfws/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广西卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-guangxiwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;云南卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/yunnan/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;贵州卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-guizhouwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;四川卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/sichuanTV/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;新疆卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-xinjiangwssd-600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;兵团卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_w/2018/SD/bttv/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;西藏卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/2018/SD/xizang/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;海南卫视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_x/SD/lvyou/711/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;北京体育*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/btv/btv6/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;四海钓鱼&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/shdiaoyu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;国学频道&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/ocn/shuhua/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;上海新闻综合HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/xinwenzonghehd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;第一财经&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/bestv/dycj/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;东方影视高清&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/dianshijuhd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;东方都市&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/2018/dfl/yulesd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;上视纪实人文高清&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/jspdhd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;上海ICS&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/dfl/waiyusd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;哈哈炫动&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/xdkt/xdkt711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;法治天地&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/2018/ocn/fztd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;游戏风云&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/ocn/youxifengyunhd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;全纪实HD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/ocn/quanjishihd/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;漳县综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/zhangxianzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;临洮电视台&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/linyaodst/51/20191206/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;汉中新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/hanzhongzonghe/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;汉中公共&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/hanzhonggonggong/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;汉中留坝电视台&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/hzlbdianshitai/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;SDETV山东教育&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/envivo_v/2018/SD/shandongedu/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;德州新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/dzxwzh/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;德州公共&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/dzgg/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;德州图文&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/dztw/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;山西经济资讯&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxjingjizixun/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;山西影视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxyingshi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;山西科教&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxkejiao/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;山西公共&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxgonggong/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;山西少儿&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxshaoer/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;山西黄河&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/sxhuanghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;中国黄河&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/cnr/zghuanghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;恩施新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/enshixinwen/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;恩施公共&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/enshigonggong/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;长阳综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/cnr/cyzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;孝感公共&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cnr/xiaogangonggong/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏城市&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jschengshi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏综艺&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jszongyi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏公共新闻&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsgonggong/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏教育&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsjiaoyu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏国际&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsguoji/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏影视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsyingshi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏体育休闲&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jstiyu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏学习&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsxuexi/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;好享购物&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/hxgw/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;江苏靓妆&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/jsliangzhuang/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;优漫卡通&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/ymkt/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;无锡新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/wxxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;常州新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/czxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;扬州新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/yzxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;苏州新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/szxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;泰州新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/tzxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;盐城新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/ycxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;淮安新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/haxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;镇江新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/zjxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;徐州新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/xzxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;宿迁新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/sqxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;连云港新闻综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/jstv/lygxinwenzonghe/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;浙江少儿&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/zj/se/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;杭州影视&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/hz/ys/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;杭州综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_w/2018/hz/zh/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广东体育&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/nfmedia/gdty/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;嘉佳卡通&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/nfmedia/jjkt/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广西果洛电视台&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/guoluotv/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;威远综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/cnr/wyzh/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;黄金剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100172024/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;军旅剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180303/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;抗战老片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179384/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;少林剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179213/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;喜剧联盟&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5101097468/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;情感剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179837/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;精英剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354627/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;热剧联播&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cctv/rejulianbo/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;高清大片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/cctv/gaoqingdapian/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;僵尸剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100192783/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;深夜失眠剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100181674/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;红色谍战剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5101079524/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华视浪漫影院&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100172368/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;每日科幻电影&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100172731/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;追剧少女&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100002089-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;怀旧老片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100074916/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;武侠剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000755/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;精品网剧&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000751/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;假期剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000747/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;国际剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179386/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;经典频道&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179383/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;精品剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/jpjc/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;高分影院&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000708/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;新片放映厅&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100030975-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华视火爆劲片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100168805/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;成龙作品集&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010211/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;周星驰影院&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100144102/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;吴京作品集&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180867/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;刘德华影院&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354855/75/index.m3u8?&amp;ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;经典贺岁片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100181836/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;古天乐影院&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/virtuallive/5101000744/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;郭富城影院&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010220/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;刘亦菲影视展播&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010221/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;高圆圆影视展播&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100002172-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;古力娜扎影视展播&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100170828/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;葛优作品集&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354660/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;金庸频道&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100181876/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;刘涛作品集&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100178547/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;张国荣影院&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5102354727/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;神探狄仁杰&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179816/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;红楼剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100178536/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;爱情公寓&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180868/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;包青天&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179054/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;天龙八部集&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5100180869/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;盗墓方法论&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100179159/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;咪咕24小时体育台&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/tysy201903/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;综艺现场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5100074920/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;SNH48剧场公演&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd-virtuallive5100002043-75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;风尚音乐&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/fsyy/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;高清娱乐&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/zhpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;超级飞侠&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010213/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;小猪佩奇&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5102010216/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;少儿动漫&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/sedm/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;快乐儿歌&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102439680/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;益智学堂&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102440005/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;梦幻童话&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102439963/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;英语启蒙&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/gunbo/5102440001/51/20190827/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;BBC独家&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/virtuallive/5101074616/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;探索纪录&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r1/2018/wasu/tsjl/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Discovery王牌节目展播&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r2/virtuallive/5101098146/75/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN电影综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/cnbn/cnbn711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN院线大片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/yuanxiandapian/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN综合&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/xinqidian/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN文旅中国&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/cibnlvyou/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN真人秀&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/peoplecn/cibnzhenrenxiu/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN艺术院线&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibnteadjpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN纪录片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibnjlpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN炫佳动漫&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibndmpd/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN童学世界&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/2018/peoplecn/cibnrbjc/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN流金岁月&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/cibnshoucang/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN风尚运动&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/cibnfsyd/51/20191029/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN经典剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r3/peoplecn/cibnjingdianjuchang/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN斗牛财经&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/migu/kailu/cibndncj/51/20191029/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN微电影&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/wd_r4/peoplecn/cibnweimovie/600/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CIBN骄阳剧场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://live.hcs.cmvideo.cn:8088/ws_v/2018/cibnjdjc/cibnjdjc711/1000/index.m3u8?ProgramID=&amp;encrypt=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div>`,4),t=[l];function e(c,r,E,y,u,q){return n(),a("div",null,t)}const F=s(p,[["render",e]]);export{m as __pageData,F as default};
