(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[16],{1015:function(e,t,a){"use strict";a.r(t);var l=a(18),n=a(63),s=a(64),r=a(66),c=a(65),i=a(0),o=a.n(i),m=a(439),h=a(440),g=a(437),d=a(202),u=a(58),p=a.n(u),E=a(450),f=a(993),y=a(210),b=a(583),C=a.n(b),v=a(24),w=function(e){var t=e.challenge;return(o.a.createElement(d.a,{lg:12,sm:12,md:12,xl:12,className:"card challenge-card"},o.a.createElement(g.a,null,o.a.createElement(d.a,null,o.a.createElement(g.a,null,o.a.createElement(d.a,{lg:8,sm:12,md:8},o.a.createElement("p",{className:"sub-header"},t.difficulty),o.a.createElement("h6",null,t.title),o.a.createElement("p",null,C()(t.deadline).fromNow(),o.a.createElement(f.a,{marginLeft:8,color:"yellow"},t.total_points))),o.a.createElement(d.a,{lg:2,sm:6,md:2},o.a.createElement("p",{className:"sub-header"},"PRIZE MONEY"),o.a.createElement("h6",null,"$",t.prize_money)),o.a.createElement(d.a,{className:"justify-content-end",lg:2,sm:6,md:2},o.a.createElement(v.b,{to:"/challenges/".concat(t._id)},o.a.createElement(y.a,{width:"100%",style:{display:"block"},appearance:"primary"},"Discover Challenge ")))),o.a.createElement(g.a,null,o.a.createElement(d.a,null,t.tags.map((function(e,t){return o.a.createElement(f.a,{marginRight:8,key:t,color:"neutral"},e)}))))))))},N=a(1010),O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={loading:!0,user:{},openChallenges:[{_id:2,title:"",deadline:"",started:!1,closed:!1,tags:[],prize_money:"",total_points:"",sponsored:!0,difficulty:"",submissions:[{profile:{first_names:""}}]}],closedChallenges:[{_id:2,title:"",deadline:"",started:!1,closed:!1,tags:[],prize_money:"",total_points:"",sponsored:!0,difficulty:"",submissions:[{profile:{first_names:""}}]}]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{var t=JSON.parse(localStorage.getItem("user"));this.setState(Object(l.a)({},this.state,{user:t}))}catch(a){}p.a.get("/api/challenges").then((function(t){if(!t.data.error){e.setState(Object(l.a)({},e.state,{loading:!1}));var a=[],n=[];return t.data.docs.map((function(e){return e.closed?a.push(e):n.push(e)})),e.setState(Object(l.a)({},e.state,{openChallenges:n,closedChallenges:a}))}E.a.warning("Failed to retrieve challenges."),e.setState(Object(l.a)({},e.state,{loading:!1}))})).catch((function(t){e.setState(Object(l.a)({},e.state,{loading:!1})),e.setState(Object(l.a)({},e.state,{openChallenges:[],closedChallenges:[]}))}))}},{key:"render",value:function(){return console.log(this.state),o.a.createElement(m.a,null,o.a.createElement(h.a,{style:{width:"100%"},className:"user-banner"},o.a.createElement(g.a,null,o.a.createElement(d.a,{lg:8,xs:12,md:12,xl:8},localStorage.getItem("user")?o.a.createElement("h2",null,"Let's get winning, ",JSON.parse(localStorage.getItem("user")).username,o.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc4b")):null,o.a.createElement("p",null,"Logic Community members are passionate, amazingly talented people. At once fiercely competitive and incredibly supportive, they join Logic to improve their skills, demonstrate their expertise, and earn money\u2014all while helping real-world organizations solve real business problems.")))),o.a.createElement(g.a,null,o.a.createElement(d.a,null,o.a.createElement("h3",null,"Latest Challenges (",this.state.openChallenges.length||0,")"))),o.a.createElement(g.a,null,this.state.openChallenges.length>0?this.state.loading?o.a.createElement(N.a,{className:"card challenge-card",style:{width:"100%"},loading:this.state.loading}):this.state.openChallenges.map((function(e,t){return o.a.createElement(w,{challenge:e,key:t})})):o.a.createElement(d.a,{className:"text-highlight"},"Sorry we couldn't find anything here.")),o.a.createElement(g.a,{style:{marginTop:"32px"}},o.a.createElement(d.a,null,o.a.createElement("h3",null,"Past Challenges (",this.state.closedChallenges.length||0,")"))),o.a.createElement(g.a,null,this.state.closedChallenges.length>0?this.state.loading?o.a.createElement(N.a,{className:"card challenge-card",style:{width:"100%"},loading:this.state.loading}):this.state.closedChallenges.map((function(e,t){return o.a.createElement(w,{challenge:e,key:t})})):o.a.createElement(d.a,null,o.a.createElement("p",{className:"text-highlight"},"Sorry we couldn't find anything here."))))}}]),a}(i.Component);t.default=O}}]);