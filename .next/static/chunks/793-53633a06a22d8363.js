(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{4891:function(e,t,s){"use strict";s.d(t,{Z:function(){return f}});var n=s(5893),a=s(7294),i=s(4268),l=s(2054),r=s(471),c="flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg m-4 ",o="h-max",u="text-2xl font-bold",d="text-xl",m="flex justify-between p-4",h="flex flex-row items-center spacing-4",x=function(e){var t=(0,a.useContext)(i.s),s=t.setCurrentAlbum,x=t.setAlbumsShown;return(0,n.jsxs)("div",{className:c,onClick:function(){s(e.albumId),x(!1)},children:[(0,n.jsx)("img",{src:l.y[e.albumId-1].songs[0].cover,alt:e.albumName,className:o}),(0,n.jsxs)("div",{className:m,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:u,children:(0,n.jsx)("p",{children:e.albumName})}),(0,n.jsx)("div",{className:d,children:(0,n.jsx)("p",{children:e.artist})})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:h,children:[(0,n.jsx)(r.m3g,{}),e.release]}),(0,n.jsxs)("div",{className:h,children:[(0,n.jsx)(r.JOT,{}),e.duration]})]})]})]})},f=function(){return(0,n.jsx)("div",{className:"flex justify-center flex-wrap mb-32",children:l.y.map((function(e){return(0,n.jsx)(x,{albumId:e.albumId,albumName:e.albumName,artist:e.artiste,release:e.releaseDate,duration:e.albumDuration,songs:e.songs},e.index)}))})}},2664:function(e,t,s){"use strict";s.d(t,{Z:function(){return v}});var n=s(5893),a=s(5675),i=s(7294),l="bg-green-500 mr-10 px-3 py-1.5 cursor-pointer \n  rounded-full hover:scale-95 transition",r=function(e){var t=e.setShowUploadMusic;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:l,onClick:function(){t(!0)},children:"M\xfczik Y\xfckle"})})},c=s(4268),o=s(2054),u=s(9352),d="max-w-7xl m-auto p-3",m="flex items-center justify-between",h="flex",x="flex items-center bg-black rounded-full p-1 px-3\n  bg-opacity-50 cursor-pointer hover:bg-opacity-75",f="w-7 h-7 rounded-full -ml-2 mr-3\n  flex items-center",g="ml-10",p="text-6xl font-extrabold",y="flex items-end justify-center mt-10",j="flex justify-center items-center mt-10",b="bg-green-500 w-16 h-16 flex justify-center items-center\n  rounded-full cursor-pointer",v=function(e){var t=e.setShowUploadMusic,s=e.headerCover,l=e.demo,v=e.PK,N=e.timer,k=(0,i.useContext)(c.s),w=k.currentSong,P=k.listCount,S=(k.setListCount,k.albumDuration),M=k.playingPage,C=k.likedSongs,I=(k.setLikedSongs,k.currentPage),_=(k.setCurrentPage,k.Pages),L=k.currentAlbum,Z=(k.setCurrentAlbum,k.play),U=(0,i.useState)(" "),B=U[0],E=U[1];(0,i.useEffect)((function(){E(" "),document.getElementById("likeCheck").checked=!1,document.getElementById("blank-heart").className="",document.getElementById("filled-heart").className="hidden",console.log(w.isLiked&&(o.y[L-1].albumName===w.album||I===_.LikedSongs)+" aa"),!w.isLiked||o.y[L-1].albumName!==w.album&&I!==_.LikedSongs||(document.getElementById("likeCheck").checked=!0,document.getElementById("blank-heart").className="hidden",document.getElementById("filled-heart").className="",(I===_.LikedSongs||I===_.Playing&&M===_.LikedSongs)&&E(w.title)),I!==_.Home&&I!==_.Playing||M!==_.Home||o.y[L-1].albumName!==w.album?(I===_.MyPlaylist&&M===_.MyPlaylist||I===_.Playing&&M===_.MyPlaylist&&o.y[L-1].albumName!=w.album)&&(E(w.title),console.log(o.y[L-1].albumName===w.album)):E(w.title),(I===_.MyPlaylist||I===_.Playing&&M===_.MyPlaylist)&&(document.getElementById("blank-heart").className="hidden",document.getElementById("filled-heart").className="hidden"),console.log(M)}),[w,I]);return(0,n.jsxs)("div",{classname:d,children:[(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("div",{}),(0,n.jsxs)("div",{className:h,children:[l?(0,n.jsx)("div",{className:"bg-green-500 mr-10 px-3 py-1.5 cursor-pointer \n            rounded-full hover:scale-95 transition",children:N<60?"Trial Expires in: "+(60-N):"Trial Expires in: 0"}):(0,n.jsx)(r,{setShowUploadMusic:t}),l?(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("div",{className:f,children:(0,n.jsx)(a.default,{src:"/assets/avatar.jpg",width:20,height:20,alt:"avatar",className:"rounded-full"})}),(0,n.jsx)("p",{children:"User PK"})]}):(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("div",{className:f,children:(0,n.jsx)(a.default,{src:"/assets/avatar.jpg",width:20,height:20,alt:"avatar",className:"rounded-full"})}),(0,n.jsx)("p",{children:v})]})]})]}),(0,n.jsxs)("div",{className:y,children:[(I===_.Home||I===_.Playing&&M===_.Home)&&(0,n.jsx)("img",{src:s,width:300,height:300,alt:"artist",id:"album-image"}),(I===_.MyPlaylist||I===_.Playing&&M===_.MyPlaylist)&&(0,n.jsx)(u.KpO,{size:300,color:"white"}),(I===_.LikedSongs||I===_.Playing&&M===_.LikedSongs)&&(0,n.jsx)(u.WZk,{size:300,color:"white"}),(0,n.jsxs)("div",{className:"ml-5",children:[(0,n.jsx)(n.Fragment,{children:I===_.Playing&&M===_.Home&&o.y[o.y.findIndex((function(e){return e.albumName===w.album}))].albumName}),(0,n.jsx)(n.Fragment,{children:I===_.Home&&o.y[L-1].albumName}),(0,n.jsx)("div",{className:p,children:B}),(0,n.jsxs)("div",{className:"flex items-center mt-5",children:[(0,n.jsxs)("div",{className:f,children:[I===_.Home&&(0,n.jsx)("img",{src:o.y[L-1].songs[0].artistCover,width:20,height:20,alt:"artist",className:"rounded-full"}),I===_.Playing&&!M===_.MyPlaylist&&(0,n.jsx)("img",{src:w.artistCover,width:20,height:20,alt:"artist",className:"rounded-full"}),I===_.MyPlaylist&&"",I===_.LikedSongs&&""]}),(0,n.jsx)("p",{children:(0,n.jsxs)("span",{className:"text-bold",children:[I===_.Home&&o.y[L-1].artiste+" \u2022 "+o.y[L-1].releaseDate+" \u2022 "+P+" Songs \u2022 "+S+" dk",I===_.Playing&&!(M===_.MyPlaylist||M===_.LikedSongs)&&o.y[o.y.findIndex((function(e){return e.albumName===w.album}))].artiste+" \u2022 "+o.y[o.y.findIndex((function(e){return e.albumName===w.album}))].releaseDate+" \u2022 "+P+" Songs \u2022 "+S+" dk",(I===_.MyPlaylist||I===_.Playing&&M===_.MyPlaylist)&&"Y\xfckledi\u011fim M\xfczikler:  "+P+" Songs",(I===_.LikedSongs||I===_.Playing&&M===_.LikedSongs)&&"Favori M\xfcziklerim:  "+P+" Songs\u2022 "+S+" dk"]})})]})]})]}),(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("div",{className:b,id:"play",onClick:Z,children:(0,n.jsx)(a.default,{src:"/assets/play.svg",width:30,height:30,alt:"play"})}),(0,n.jsxs)("div",{className:g,children:[(0,n.jsx)("input",{type:"checkbox",id:"likeCheck",onClick:function(){1==document.getElementById("likeCheck").checked?(console.log("checked"),document.getElementById("blank-heart").className+=" hidden",document.getElementById("filled-heart").className="",w.isLiked=!0):(console.log("unchecked"),document.getElementById("blank-heart").className="",document.getElementById("filled-heart").className+="hidden",w.isLiked=!1,console.log(C))},className:"hidden"}),(0,n.jsxs)("label",{htmlFor:"likeCheck",children:[(0,n.jsx)("div",{className:"hidden",id:"filled-heart",children:(0,n.jsx)(a.default,{src:"/assets/heart.svg",width:30,height:30,alt:"play"})}),(0,n.jsx)("div",{className:"",id:"blank-heart",children:(0,n.jsx)(a.default,{src:"/assets/blank-heart.svg",width:30,height:30,alt:"play"})})]})]})]})]})}},841:function(e,t,s){"use strict";var n=s(5893),a=s(7294),i=s(4861),l=s(4268),r="max-w-7xl m-auto p-3 mt-5 mb-40",c="w-full text-left",o="border-b border-gray-100/20 pb-5 opacity-50";t.Z=function(e){var t=e.songs,s=(0,a.useContext)(l.s),u=s.setListCount,d=s.setAlbumDuration,m=0,h=0,x=0;return(0,n.jsx)("div",{className:r,children:(0,n.jsxs)("table",{className:c,children:[(0,n.jsx)("tbody",{className:o,children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"pb-3",children:"#"}),(0,n.jsx)("th",{className:"pb-3",children:"Ba\u015fl\u0131k"}),(0,n.jsx)("th",{className:"pb-3",children:"Oynat\u0131lan"}),(0,n.jsx)("th",{className:"pb-3",children:(0,n.jsx)("img",{src:"assets/time.svg",alt:"time"})})]})}),(0,n.jsx)("tbody",{className:"mb-6 block"}),t.map((function(e){return m++,u(m),h+=parseInt(e.songLength.slice(0,1)),x+=parseInt(e.songLength.slice(2,e.songLength.length)),d(h+parseInt(x/60)),(0,n.jsx)(i.Z,{song:e},e.id)}))]})})}},6350:function(e,t,s){"use strict";var n=s(5893),a=s(7294),i=s(4861),l=s(4268),r="max-w-7xl m-auto p-3 mt-5 mb-40",c="w-full text-left",o="border-b border-gray-100/20 pb-5 opacity-50";t.Z=function(e){var t=e.albums,s=(0,a.useContext)(l.s),u=s.setListCount,d=(s.likedSongs,s.setAlbumDuration),m=[],h=0,x=0,f=0;return u(0),d(0),(0,n.jsx)("div",{className:r,children:(0,n.jsxs)("table",{className:c,children:[(0,n.jsx)("tbody",{className:o,children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"pb-3",children:"#"}),(0,n.jsx)("th",{className:"pb-3",children:"Ba\u015fl\u0131k"}),(0,n.jsx)("th",{className:"pb-3",children:"Oynat\u0131lan"}),(0,n.jsx)("th",{className:"pb-3",children:(0,n.jsx)("img",{src:"assets/time.svg",alt:"time"})})]})}),(0,n.jsx)("tbody",{className:"mb-6 block"}),t.map((function(e){e.songs.map((function(e){!0===e.isLiked&&m.push(e)}))})),m.map((function(e){return h++,u(h),x+=parseInt(e.songLength.slice(0,1)),f+=parseInt(e.songLength.slice(2,e.songLength.length)),d(x+parseInt(f/60)),(0,n.jsx)(i.Z,{song:e},e.id)}))]})})}},6461:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var n=s(5893),a=s(5675),i={src:"/_next/static/media/next.3d952b2c.svg",height:24,width:24},l={src:"/_next/static/media/previous.57b2ce8f.svg",height:24,width:24},r={src:"/_next/static/media/speaker.e7ad6de4.svg",height:24,width:24},c={src:"/_next/static/media/playRounded.d8f40cba.svg",height:48,width:48},o={src:"/_next/static/media/pause.cd7806ae.svg",height:24,width:24},u=s(7294),d=s(4268),m=s(9352),h={mainControl:" fixed bottom-0 left-0 py-3 p-5 pr-10 w-screen \n    bg-[#242424] z-40 flex item-center justify-between",flexCenter:"flex items-center",controlIcon:"mr-5 cursor-pointer hover:opacity-100 opacity-50",controlIconsContainer:"flex items-center justify-center mb-2",playIcon:"mr-5 w-10 cursor-pointer hover:opacity-50",pauseIconStyle:"mt-3 w-10 h-10 cursor-pointer hover:opacity-50",coverPhoto:"object-cover"},x=function(){var e=(0,u.useContext)(d.s),t=e.currentSong,s=e.volume,x=e.onVolumeChange,f=e.timestamp,g=e.progress,p=e.playNext,y=e.playPrevious,j=e.isPaused,b=e.play,v=e.pause,N=e.onProgressChange,k=e.duration,w=e.currentPage,P=e.Pages,S=e.playingPage;return(0,n.jsxs)("div",{className:h.mainControl,children:[(0,n.jsxs)("div",{className:"flex max-w-xs",children:[(0,n.jsx)("div",{className:"mr-3",style:{minHeight:"80px",minWidth:"80px"},children:t.cover?(0,n.jsx)("img",{src:t.cover,height:"80px",width:"80px",alt:"song-cover"}):(0,n.jsx)(m.KpO,{size:80,color:"white"})}),(0,n.jsxs)("div",{className:"w-60",children:[(0,n.jsx)("p",{children:t.title}),(0,n.jsx)("p",{className:"opacity-50 flex flex-wrap",children:t.artiste})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:h.controlIconsContainer,children:[!(w===P.MyPlaylist||w===P.Playing&&S===P.MyPlaylist)&&(0,n.jsx)("div",{onClick:y,className:h.controlIcon,children:(0,n.jsx)(a.default,{src:l,alt:"prev"})}),j?(0,n.jsx)("div",{className:h.playIcon,onClick:b,children:(0,n.jsx)(a.default,{src:c,alt:"play"})}):(0,n.jsx)("div",{className:h.pauseIconStyle,onClick:v,children:(0,n.jsx)(a.default,{src:o,alt:"pause"})}),!(w===P.MyPlaylist||w===P.Playing&&S===P.MyPlaylist)&&(0,n.jsx)("div",{onClick:p,className:h.controlIcon,children:(0,n.jsx)(a.default,{src:i,alt:"next"})})]}),(0,n.jsxs)("div",{className:h.flexCenter,children:[(0,n.jsx)("small",{children:f}),(0,n.jsx)("input",{value:g,type:"range",onChange:function(e){return N(e)},className:h.range}),(0,n.jsx)("small",{children:"NaN:0NaN"!=k&&k})]})]}),(0,n.jsxs)("div",{className:h.flexCenter,children:[(0,n.jsx)(a.default,{src:r,alt:"speaker"}),(0,n.jsx)("input",{value:s,onChange:function(e){return x(e)},type:"range",id:"volume-range"})]})]})}},2691:function(e,t,s){"use strict";var n=s(5893),a=s(7294),i=s(4861),l=s(4268),r="max-w-7xl m-auto p-3 mt-5 mb-40",c="w-full text-left";t.Z=function(e){var t=e.songs,s=(0,a.useContext)(l.s).setListCount,o=0;return(0,n.jsx)("div",{className:r,children:(0,n.jsxs)("table",{className:c,children:[(0,n.jsx)("tbody",{className:"mb-6 block"}),t.map((function(e){return o++,s(o),(0,n.jsx)(i.Z,{song:e.account},e.id)}))]})})}},4861:function(e,t,s){"use strict";var n=s(5893),a=s(7294),i=s(4268),l="cursor-pointer p-4",r="hover:opacity-50 cursor-pointer ";t.Z=function(e){var t=e.song,s=(0,a.useState)(""),c=s[0],o=s[1],u=(0,a.useContext)(i.s),d=u.playOnSelect,m=(u.duration,u.currentSong);return(0,a.useEffect)((function(){o(m===t?"rounded bg-gradient-to-r from-green-300/30 to-green-700/30":"")}),[m]),(0,n.jsx)("tbody",{className:r+c,children:(0,n.jsxs)("tr",{onClick:function(){return d(t)},children:[(0,n.jsx)("th",{className:l+" rounded-l-md",children:Number.isInteger(t.index)&&t.index+1}),(0,n.jsx)("th",{className:l,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font bold",children:t.title}),(0,n.jsx)("p",{className:"opacity-50",children:t.artiste})]})}),(0,n.jsx)("th",{className:l,children:t.plays&&Intl.NumberFormat().format(t.plays)}),(0,n.jsx)("th",{className:l+" rounded-r-md",children:t.songLength})]})})}},6489:function(e,t,s){"use strict";var n=s(5893),a=s(8060),i=s.n(a);t.Z=function(e){var t=e.description,s=e.musicURL,a=e.setTitle,l=e.setMusicURL,r=e.setShowUploadMusic,c=e.newMusic;return(0,n.jsxs)("div",{className:i().wrapper,children:[(0,n.jsx)("div",{className:i().modalTitle,children:"M\xfczik Y\xfckleme"}),(0,n.jsxs)("div",{className:i().inputField,children:[(0,n.jsx)("div",{className:i().inputTitle,children:"Ba\u015fl\u0131k"}),(0,n.jsx)("div",{className:i().inputContainer,children:(0,n.jsx)("input",{className:i().input,type:"text",value:t,onChange:function(e){return a(e.target.value)}})})]}),(0,n.jsxs)("div",{className:i().inputField,children:[(0,n.jsx)("div",{className:i().inputTitle,children:"M\xfczik URL'i"}),(0,n.jsx)("div",{className:i().inputContainer,children:(0,n.jsx)("input",{className:i().input,type:"text",value:s,onChange:function(e){return l(e.target.value)}})})]}),(0,n.jsxs)("div",{className:i().modalButtons,children:[(0,n.jsx)("button",{onClick:function(){return r(!1)},className:i().cancelButton,children:"\u0130ptal"}),(0,n.jsx)("button",{onClick:c,className:"".concat(i().button,"\n            ").concat(i().createButton),children:"Yeni M\xfczik Y\xfckle"})]})]})}},9405:function(e,t,s){"use strict";s(5893),s(5675)},5613:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var n=s(5893),a=s(7294),i=s(4268),l="flex item-center mb-5 cursor-pointer hover:text-[#fff] text-[#b3b3b3]",r="ml-5",c=function(e){var t=e.title,s=e.icon,c=(0,a.useContext)(i.s),o=c.setCurrentPage,u=c.setAlbumsShown;return(0,n.jsxs)("div",{className:l,onClick:function(){"Anasayfa"===t?(o(0),u(!0)):"Oynat\u0131lan"===t?(o(1),u(!1)):"Y\xfcklemelerim"===t?(o(2),u(!1)):"Liked Songs"===t&&(o(3),u(!1))},children:[(0,n.jsx)("img",{alt:"",src:s,width:20,height:20}),(0,n.jsx)("p",{className:r,children:t})]})},o="cursor-pointer p-4 flex flex-col items-start",u="hover:opacity-50 cursor-pointer flex justify-between",d=function(e){var t=e.song,s=(0,a.useState)(""),l=s[0],r=s[1],c=(0,a.useContext)(i.s),d=c.playOnSelect,m=(c.duration,c.currentSong);return(0,a.useEffect)((function(){r(m===t?" rounded bg-gradient-to-r from-green-300/30 to-green-700/30":"")}),[m]),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{className:u+l,onClick:function(){return d(t)},children:[(0,n.jsxs)("th",{className:o,children:[(0,n.jsx)("p",{className:"font bold",children:t.title}),(0,n.jsx)("p",{className:"opacity-50",children:t.artiste})]}),(0,n.jsx)("th",{className:o,children:Intl.NumberFormat().format(t.plays)})]})})},m="bg-black w-96 p-5 py-10 ",h="hover:text-[#fff]",x=function(e){var t=e.demo,s=(0,a.useContext)(i.s),l=s.descSongs,r=s.currentSong;return l.sort((function(e,t){return t.plays-e.plays})),(0,n.jsxs)("div",{className:m,children:[(0,n.jsxs)("div",{className:"mb-10",children:[(0,n.jsx)(c,{icon:"assets/home.svg",title:"Anasayfa",className:h}),!("{}"==JSON.stringify(r))&&(0,n.jsx)(c,{icon:"assets/playlist.svg",title:"Oynat\u0131lan",className:h}),!t&&(0,n.jsx)(c,{icon:"assets/playlist.svg",title:"Y\xfcklemelerim",className:h})]}),(0,n.jsx)("div",{className:"mb-5 border-b border-gray-100/10",children:(0,n.jsx)(c,{icon:"assets/heart.svg",title:"Liked Songs",className:h})}),(0,n.jsxs)("div",{className:"mt-5 leading-8 flex flex-col gap-[10px]",children:[(0,n.jsx)("p",{className:"text-xl font-bold text-center",children:" \ud83d\udd25\ud83d\udd25\ud83d\udd25 TOP 5 \ud83d\udd25\ud83d\udd25\ud83d\udd25 "}),l.slice(0,5).map((function(e){return(0,n.jsx)(d,{song:e},e.id)}))]})]})}},6709:function(e,t,s){"use strict";var n=s(4051),a=s.n(n),i=s(8929),l=s(4306),r=s(2792),c=s(4364);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}function u(e,t,s,n,a,i,l){try{var r=e[i](l),c=r.value}catch(o){return void s(o)}r.done?t(c):Promise.resolve(c).then(n,a)}function d(e){return function(){var t=this,s=arguments;return new Promise((function(n,a){var i=e.apply(t,s);function l(e){u(i,n,a,l,r,"next",e)}function r(e){u(i,n,a,l,r,"throw",e)}l(void 0)}))}}function m(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function h(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),n.forEach((function(t){m(e,t,s[t])}))}return e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var n,a,i=[],l=!0,r=!1;try{for(s=s.call(e);!(l=(n=s.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(c){r=!0,a=c}finally{try{l||null==s.return||s.return()}finally{if(r)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=s(4758),g=f.utils.bytes.utf8,p=f.web3,y=(f.BN,p.SystemProgram),j={tokenProgram:i.H_,clock:f.web3.SYSVAR_CLOCK_PUBKEY,systemProgram:y.programId};t.Z=function(e,t,s,n,i){var o=(0,l.O)(),u=new f.web3.Connection(r.VH),m=(0,c.q)(u,o),p=function(){var e=d(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching songs"),e.next=3,m.account.musicAccount.all();case 3:return t=e.sent,console.log(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var l=d(a().mark((function l(){var r,c,u,d;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=f.web3.Keypair.generate().publicKey,a.t0=x,a.next=4,f.web3.PublicKey.findProgramAddress([g.encode("music"),r.toBuffer()],m.programId);case 4:return a.t1=a.sent,c=(0,a.t0)(a.t1,1),u=c[0],console.log(e),a.next=10,m.rpc.createMusic(t,e,{accounts:h({music:u,randomkey:r,authority:o.publicKey},j)});case 10:d=a.sent,console.log(d),s(""),n(""),i(!1);case 15:case"end":return a.stop()}}),l)})));return function(){return l.apply(this,arguments)}}();return{newMusic:y,getSongs:p}}},5273:function(e,t,s){"use strict";s.r(t);var n=s(5893),a=s(7294),i=s(5613),l=(s(9405),s(6489)),r=s(2691),c=s(6461),o=s(841),u=s(6350),d=s(4891),m=s(2664),h=s(6709),x=s(2054),f=s(4268),g=s(155);t.default=function(e){var t=e.PK,s=(0,a.useContext)(f.s),p=s.currentPage,y=(s.setCurrentPage,s.Pages),j=s.setAlbumDuration,b=s.albumsShown,v=s.currentSong,N=s.currentAlbum,k=s.playingPage,w=(0,a.useState)(!1),P=w[0],S=w[1],M=(0,a.useState)(" "),C=M[0],I=M[1],_=(0,a.useState)(" "),L=_[0],Z=_[1],U=(0,h.Z)(L,C,I,Z,S),B=U.newMusic,E=U.getSongs,O=(0,a.useState)([]),A=O[0],H=O[1];(0,a.useEffect)((function(){E().then((function(e){H(e)}))}),[]),(0,a.useEffect)((function(){1===p&&j(null)}),[p]),(0,a.useEffect)((function(){console.log(k)}),[v]);return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(i.Z,{}),(0,n.jsxs)("div",{className:"w-full",children:[b?(0,n.jsx)(d.Z,{}):(0,n.jsxs)("div",{children:[p===y.Playing&&k===y.Home&&v.album!==x.y[N-1].albumName?(0,n.jsx)(m.Z,{setShowUploadMusic:S,headerCover:x.y[x.y.findIndex((function(e){return e.albumName===v.album}))].songs[0].cover}):(0,n.jsx)(m.Z,{setShowUploadMusic:S,headerCover:x.y[N-1].songs[0].cover,PK:t}),(0,n.jsx)("div",{children:(p===y.MyPlaylist||p===y.Playing&&k===y.MyPlaylist)&&(0,n.jsx)("button",{className:"pl-10",onClick:function(){E().then((function(e){H(e)}))},children:(0,n.jsx)(g.s8A,{style:{height:"30px",width:"30px"}})})}),p===y.Home&&(0,n.jsx)(o.Z,{songs:x.y[N-1].songs}),p===y.Playing&&k===y.Home&&v.album===x.y[N-1].albumName&&(0,n.jsx)(o.Z,{songs:x.y[N-1].songs}),p===y.Playing&&k===y.Home&&!(v.album===x.y[N-1].albumName)&&(0,n.jsx)(o.Z,{songs:x.y[x.y.findIndex((function(e){return e.albumName===v.album}))].songs}),p===y.Playing&&k===y.MyPlaylist&&(0,n.jsx)(r.Z,{songs:A}),p===y.Playing&&k===y.LikedSongs&&(0,n.jsx)(u.Z,{albums:x.y}),p===y.MyPlaylist&&(0,n.jsx)(r.Z,{songs:A}),p===y.LikedSongs&&(0,n.jsx)(u.Z,{albums:x.y})]}),!("{}"==JSON.stringify(v))&&(0,n.jsx)(c.Z,{}),P&&(0,n.jsx)(l.Z,{title:C,setTitle:I,setShowUploadMusic:S,musicURL:L,setMusicURL:Z,newMusic:B})]})]})}},2792:function(e,t,s){"use strict";s.d(t,{Rn:function(){return l},wI:function(){return r},VH:function(){return i}});var n=s(9917),a=JSON.parse('{"version":"0.1.0","name":"spotify_clone","instructions":[{"name":"acceptPayment","accounts":[{"name":"payerWallet","isMut":true,"isSigner":false},{"name":"receiver","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"createMusic","accounts":[{"name":"music","isMut":true,"isSigner":false},{"name":"randomkey","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"title","type":"string"},{"name":"musicUrl","type":"string"}]}],"accounts":[{"name":"PayerAccount","type":{"kind":"struct","fields":[{"name":"wallet","type":"publicKey"}]}},{"name":"MusicAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"title","type":"string"},{"name":"musicUrl","type":"string"}]}}]}'),i="https://cold-red-gadget.solana-devnet.discover.quiknode.pro/fef425b0ce09868c660059fa5c7baa92cb24af81/",l=new n.PublicKey("7eRM9wcZuhe2MvRb1m96QMXYPscpcMQnjpMz5f5jneWF"),r=a},4364:function(e,t,s){"use strict";s.d(t,{q:function(){return l}});var n=s(4758),a=s(5615),i=s(2792);function l(e,t){if(!t.publicKey)throw new a.oS;var s=new n.Provider(e,t,n.Provider.defaultOptions()),l=i.wI,r=i.Rn;return new n.Program(l,r,s)}},8060:function(e){e.exports={wrapper:"UploadModal_wrapper__GY7jI",modalButtons:"UploadModal_modalButtons__f_0ST",title:"UploadModal_title__jDk1z",modalTitle:"UploadModal_modalTitle__r9ZyW",inputField:"UploadModal_inputField___gsI0",inputTitle:"UploadModal_inputTitle__q5RjC",inputContainer:"UploadModal_inputContainer__4jSUr",input:"UploadModal_input__h6jcP",button:"UploadModal_button__NqlGh",createButton:"UploadModal_createButton__4tqic",cancelButton:"UploadModal_cancelButton__42aYJ"}},7420:function(){},5856:function(){},6601:function(){}}]);