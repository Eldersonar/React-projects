(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),l=(a(16),a(10)),s=a(6),c=a.n(s),m=a(7),v=a(1),u=a(2),d=a(5),h=a(4),p=a(3),E=(a(18),a(19),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).LOCAL_STORAGE_KEY="awardsApp.movies",n.state={localStorageMovies:localStorage.getItem("awardsApp.movies")},console.log(n.props),n}return Object(u.a)(a,[{key:"getmovies",value:function(){this.setState({localStorage:localStorage})}},{key:"render",value:function(){var e=this;return console.log(this.localStorageMovies),this.localStorageMovies?i.a.createElement("div",{id:"movieList"},this.props.movies.map((function(t){return i.a.createElement("div",{className:"movieHolder",key:t.imdbID},i.a.createElement("div",{className:"imgHolder"},i.a.createElement("img",{src:t.Poster,alt:t.Title})),i.a.createElement("div",{className:"movieInfo"},i.a.createElement("p",null,t.Title),i.a.createElement("p",null,"year ",t.Year)),i.a.createElement("div",{className:"nominateButton",onClick:function(){return e.props.GetMovies(t)}}," NOMINATE "))}))):i.a.createElement("div",{id:"movieList"},this.props.movies.map((function(t){return i.a.createElement("div",{className:"movieHolder",key:t.imdbID},i.a.createElement("div",{className:"imgHolder"},i.a.createElement("img",{src:t.Poster,alt:t.Title})),i.a.createElement("div",{className:"movieInfo"},i.a.createElement("p",null,t.Title),i.a.createElement("p",null,"year ",t.Year)),i.a.createElement("div",{className:"nominateButton",onClick:function(){return e.props.selectMovie(t)}}," NOMINATE "))})))}}]),a}(i.a.Component)),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={loading:!0,movies:null,data:[]},n}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){this.props.SaveMovies(this.state.data)}},{key:"render",value:function(){return this.props.movies?i.a.createElement(E,{movies:this.props.movies,selectMovie:this.props.selectMovie}):this.state.loading?i.a.createElement("div",{className:"movieHolder"},i.a.createElement("div",{className:"imgHolder"}),i.a.createElement("div",{className:"movieInfo"}),i.a.createElement("div",null)):i.a.createElement("div",null,"Couldn't get movies")}}]),a}(i.a.Component),O=(a(20),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).LOCAL_STORAGE_KEY="awardsApp.movies",n.state={movies:localStorage.getItem(n.LOCAL_STORAGE_KEY)},n.movies=e.movies,console.log("================="),console.log(n.movies),console.log(n.props),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.movies),this.movies?5==this.movies.length?i.a.createElement("div",{id:"awardsText"},"there are 5 movies"):i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{id:"awardLabel"},"AWARDS"),i.a.createElement("div",{id:"movieList"},this.movies.map((function(t){return i.a.createElement("div",{className:"awardHolder",key:t.imdbID},i.a.createElement("div",{className:"awardImgHolder"},i.a.createElement("img",{src:t.Poster,alt:t.Title})),i.a.createElement("div",{className:"awardMovieInfo"},i.a.createElement("p",null,t.Title),i.a.createElement("p",null,"year ",t.Year)),i.a.createElement("div",{className:"withdrawButton",onClick:function(){return e.props.deleteMovie(t)}}," WITHDRAW "))})))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"awardsText"},"Your awards"))}}]),a}(i.a.Component)),g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault()},n.state={filtered:[],MovieName:"man",MovieArray:[],MyMovies:[],movies:[],loading:!1,data:[],value:""},n.LOCAL_STORAGE_KEY="awardsApp.movies",n.handleSearch=n.handleSearch.bind(Object(d.a)(n)),n.selectMovie=n.selectMovie.bind(Object(d.a)(n)),n.FetchMovies=n.FetchMovies.bind(Object(d.a)(n)),n.deleteMovie=n.deleteMovie.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"FetchMovies",value:function(){var e=Object(m.a)(c.a.mark((function e(t){var a,n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://www.omdbapi.com/?s=".concat(t,"&plot=full&apikey=d78f4d96"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,this.setState({movies:i.Search,loading:!1,data:i.Search});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(m.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://www.omdbapi.com/?s=".concat(this.state.MovieName,"&plot=full&apikey=d78f4d96"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,this.setState({movies:n.Search,loading:!1,data:n.Search});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSearch",value:function(e){e.preventDefault();var t=document.getElementById("input").value;this.setState({name:t}),this.FetchMovies(t)}},{key:"selectMovie",value:function(e){var t=[].concat(Object(l.a)(this.state.MovieArray),[e]);this.setState({MovieArray:t}),localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(t))}},{key:"deleteMovie",value:function(e){var t=JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));this.filtered=t.filter((function(t){return t.imdbID!==e.imdbID})),localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(this.filtered)),this.setState({filtered:t})}},{key:"render",value:function(){return console.log(this.MovieArray),console.log(this.filtered),i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",null,"OMDB Movie Awards"),i.a.createElement("form",{id:"inputWrapper",onSubmit:this.handleSubmit},i.a.createElement("input",{ref:this.movieNameRef,type:"text",name:"movieName",id:"input"}),i.a.createElement("button",{id:"searchBtn",onClick:this.handleSearch},"SEARCH"))),i.a.createElement("main",null,i.a.createElement("div",null,i.a.createElement(f,{name:this.state.name,movies:this.state.movies,selectMovie:this.selectMovie})),i.a.createElement("div",{id:"awards"},i.a.createElement(O,{deleteMovie:this.deleteMovie,filtered:this.filtered,movies:this.state.MovieArray}))))}}]),a}(i.a.Component);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.2e8a0ba4.chunk.js.map