(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{55:function(e,t,s){},56:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(0),n=s.n(a),r=s(12),c=s.n(r),l=(s(55),s(15)),o=s(17),h=s(3),p=s(5),u=(s(56),s(94)),d=s(104),m=s(95),j=s(96),v=s(97),f=s(98),b=s(99),g=s(100),x=s(101),y=s(106),O=s(102),w=s(103),_=s(6),k=s(7),C=s(10),S=s(18);function N(e,t,s,i){var a=new C.p,n=new C.p;return a.x=e*(2*s.x-i.x-t.x),a.y=e*(2*s.y-i.y-t.y),a.z=0,n.addVectors(t.clone().negate(),i).multiplyScalar(e),[a,n]}function P(e,t,s,i){var a=e.elements,n=a[0],r=a[1],c=a[2],l=a[4],o=a[5],h=a[6],p=a[8],u=a[9],d=a[10],m=9*(n*n+r*r+c*c),j=12*(n*l+r*o+c*h),v=6*(n*p+r*u+c*d)+4*(l*l+o*o+h*h),f=4*(l*p+o*u+h*d),b=p*p+u*u+d*d,g=Math.floor((s-t)/i),x=0;if(g<3){for(var y=t;y<=s;y+=i){var O=y*y,w=O*y,_=O*O;x+=Math.sqrt(m*_+j*w+v*O+f*y+b)}return x*i}for(var k=0,C=t;C<=s;C+=i){var S=C*C,N=m*(S*S)+j*(S*C)+v*S+f*C+b;N<0&&console.log("hi");var P=Math.sqrt(N);x+=0===k||k===g?P*i:k%2===1?4*P*i:2*P*i,++k}return x/3}var D={linear:function(e){return e},"ease in square":function(e){return e*e},"ease in cubic":function(e){return e*e*e},"ease in sine":function(e){return 1+Math.sin((e-1)*Math.PI/2)},"ease out sine":function(e){return Math.sin(e*Math.PI/2)},"ease in out sine":function(e){return(Math.sin((e-.5)*Math.PI)+1)/2}},G=function(){function e(t,s){Object(h.a)(this,e),this.need_update=!1,this.spline=null,this.newCurve=null,this.timeGoes=0,this.animateTime=20,this.curveUpdateDone=null,this.themeColor=null,this.curveTau=.5,this.newCurveTau=.5,this.param=[],this.splineMatrial=new C.h({color:13421772,linewidth:2.2}),this.scene=null,this.param_cache=[],this.param_is_displaying=!1,this.paramDotsGroup=new C.f,this.last_sample=null,this.last_sample_name="linear",this.param_vectors=[],this.scene=t,this.themeColor=s}return Object(p.a)(e,[{key:"Destroy",value:function(){null!==this.spline&&(this.scene.remove(this.spline),this.PurgeParam())}},{key:"clone",value:function(){var t=this.spline,s=new e(this.scene,this.themeColor),i=new C.h({color:t.material.color.clone(),linewidth:1.2}),a=new C.e;return a.vertices=t.geometry.vertices.map((function(e){return e.clone()})),s.spline=new C.g(a,i),s.curveTau=this.curveTau,s.param=this.param.map((function(e){return e.clone()})),s.curveUpdateDone=this.curveUpdateDone,s}},{key:"KickUpdateCurve",value:function(){this.param_need_update=!0,this.curveTau=this.newCurveTau,this.timeGoes=0}},{key:"UpdateCurve",value:function(){if(null!==this.newCurve&&null!==this.spline){++this.timeGoes;var e=this.themeColor[function(e){for(var t=[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1,2],s=[50,100,200,300,400,500,600,700,800,900,900],i=0;i<t.length;++i)if(e<t[i+1])return s[i]}(this.curveTau)];if(this.timeGoes>=this.animateTime)this.spline.geometry.vertices=this.newCurve,this.newCurve=null,this.spline.material.color.set(e),null!==this.curveUpdateDone&&(this.curveUpdateDone(),this.param_need_update=!0);else{var t=1/(this.animateTime-this.timeGoes);this.spline.material.color.lerp(new C.d(e),t);for(var s=0;s<this.newCurve.length;++s){var i=this.newCurve[s].clone().sub(this.spline.geometry.vertices[s]);this.spline.geometry.vertices[s].add(i.multiplyScalar(t))}}this.spline.geometry.verticesNeedUpdate=!0}}},{key:"Sample",value:function(e,t,s){var i=this,a=[];function n(t){return e[t].position}if(this.param=[],this.newCurveTau=t,e.length<=1){var r,c=Object(S.a)(e);try{for(c.s();!(r=c.n()).done;){var l=r.value;a.push(l.position)}}catch(z){c.e(z)}finally{c.f()}return this.newCurve=a,this}if(2===e.length){var o=1/s;a.push(n(0));for(var h=n(0),p=n(1).clone().sub(h).multiplyScalar(o),u=h.clone().add(p),d=1;d<s-1;++d)a.push(u.add(p).clone());return a.push(n(1)),this.newCurve=a,this}var m=function(e,t,s,a){var n=function(e,t,s,i){var a=new C.i;a.set(2,-2,1,1,-3,3,-2,-1,0,0,1,0,1,0,0,0);var n=new C.i;n.set(e.x,e.y,e.z,0,t.x,t.y,t.z,0,s.x,s.y,s.z,0,i.x,i.y,i.z,0);var r=new C.i;return r.multiplyMatrices(a,n),r.transpose(),r}(e,t,s,a);return i.param.push(n),n};function j(e,t){var s=e*e,i=s*e,n=new C.q(i,s,e,1);n.applyMatrix4(t),a.push(new C.p(n.x,n.y,n.z))}var v=N(t,n(0),n(1),n(2)),f=1/s,b=f;a.push(n(0).clone());for(var g=m(n(0),n(1),v[0],v[1]),x=1;x<s-1;++x)j(b,g),b+=f;for(var y=e.length-2,O=1;O<y;++O){b=f,a.push(n(O).clone());for(var w=n(O),_=n(O+1),k=n(O-1).clone().negate().add(_).multiplyScalar(t),P=w.clone().negate().add(n(O+2)).multiplyScalar(t),D=m(w,_,k,P),G=1;G<s-1;++G)j(b,D),b+=f}a.push(n(y).clone()),b=f,(v=N(t,n(y-1),n(y),n(y+1)))[0].negate(),g=m(n(y),n(y+1),v[1],v[0]);for(var M=1;M<s-1;++M)j(b,g),b+=f;return a.push(n(y+1).clone()),this.newCurve=a,this}},{key:"Append",value:function(e,t,s){var i=this.scene,a=new C.e;this.Sample(e,this.curveTau,t);var n=this.newCurve;if(null!==this.spline){if(this.newCurve.length>t){a.vertices=this.spline.geometry.vertices;for(var r=this.spline.geometry.vertices[this.spline.geometry.vertices.length-1],c=s.clone().sub(r).multiplyScalar(1/t),l=r.clone().add(c),o=1;o<t;++o)a.vertices.push(l.add(c).clone());this.KickUpdateCurve()}else a.vertices=this.newCurve;i.remove(this.spline)}else a.vertices=n;var h=new C.g(a,this.splineMatrial);this.spline=h,i.add(h)}},{key:"DisplayNewCurve",value:function(){var e=new C.e;e.vertices=this.newCurve;var t=new C.g(e,this.splineMatrial);this.scene.remove(this.spline),this.spline=t,this.scene.add(t)}},{key:"UpdateParam",value:function(){this.param_is_displaying}},{key:"Paramterize",value:function(e,t,s,i){var a=this.param_cache;if(this.last_sample=e,!(null===this.spline||this.spline.geometry.vertices.length<i)){for(var n=t,r=0;n!==s-1;)a[n]=P(this.param[n],0,1,.01),r+=a[n],++n;a=a.map((function(e){return e/r}));var c=0,l=1/((s-t-1)*i),o=l;n=t;for(var h=[];o<1;){for(var p=e(o);c<p;)c+=a[n],++n;for(var u=c-a[n-1],d=Math.abs(p-u),m=0,j=1;d>.001;){var v=P(this.param[n-1],m,(m+j)/2,.001)/r;if(0===v)break;u+v>p?j=(m+j)/2:(u+=v,m=(m+j)/2),d=p-u}var f=m*m,b=m*f,g=new C.q(b,f,m,1);g.applyMatrix4(this.param[n-1]),h.push(new C.p(g.x,g.y,g.z)),o+=l}return h}}},{key:"PurgeParam",value:function(){this.paramDotsGroup.children=[],this.param_need_update=!0,this.scene.remove(this.paramDotsGroup)}},{key:"ShowParam",value:function(e,t,s,i){if(!(s-t<2)&&(e!==this.last_sample_name&&(this.param_is_displaying=!1,this.param_need_update=!0),!0!==this.param_is_displaying))if(!1!==this.param_need_update){this.PurgeParam(),this.param_is_displaying=!0,this.scene.add(this.paramDotsGroup),this.param_need_update=!1;var a=this.Paramterize(D[e],t,s,i);this.param_vectors=a;var n,r=Object(S.a)(a);try{for(r.s();!(n=r.n()).done;){var c=n.value,l=new C.c(.04,8),o=new C.k({color:15658734}),h=new C.j(l,o);h.position.set(c.x,c.y,c.z),this.paramDotsGroup.add(h)}}catch(p){r.e(p)}finally{r.f()}}else this.scene.add(this.paramDotsGroup)}},{key:"HideParam",value:function(){this.scene.remove(this.paramDotsGroup),this.param_is_displaying=!1}}]),e}(),M=function(){function e(t,s,i,a,n){var r=this;Object(h.a)(this,e),this.splines=[],this.canvas=null,this.camera=null,this.planeMesh=null,this.mouse_down=!1,this.geometry=new C.b,this.material=new C.h({color:13421772,linewidth:2.7}),this.positions=new Float32Array(300),this.drawCount=0,this.dot_hovered=null,this.line=null,this.click_raycaster=new C.n,this.hover_raycaster=new C.n,this.mouse_down=!1,this.camera=null,this.canvas=null,this.spline_ctrl_needs_update=!1,this.global_tau=.5,this.global_gran=20,this.dotsGroup=new C.f,this.show_param=!1,this.param_sampler_fn=D.linear,this.param_sampler_name="linear",this.listener=null,this.is_handling_drag=!1,this.is_bifrost_animating=!1,this.bifrost_save={splines:null,global_tau:.5},this.scene=t,this.canvas=s,this.camera=i,this.planeMesh=a,this.themeColor=n,this.geometry.setAttribute("position",new C.a(this.positions,3)),this.line=new C.g(this.geometry,this.material),this.splines.push(new G(t,n)),t.add(this.line),t.add(this.dotsGroup),s.onmousemove=function(e){r.MouseHoverOrDrag(e)},s.onmousedown=function(){r.mouse_down=!0},s.onmouseup=function(){r.mouse_down=!1,r.UpdateSplineOnDotMoved()},s.onclick=function(e){r.HandleClick(e)}}return Object(p.a)(e,[{key:"_NotifyListener",value:function(e){this.listener&&this.listener(e)}},{key:"MouseHoverOrDrag",value:function(e){this.canvas.setPickPosition(e);var t=this.canvas.pickPosition;if(this.dot_hovered&&this.mouse_down)this.HandleDrag();else{this.hover_raycaster.setFromCamera(t,this.camera);var s=this.hover_raycaster.intersectObjects(this.dotsGroup.children);if(null!==this.dot_hovered&&(this.dot_hovered.material.color.setHex(16777215),this.dot_hovered=null),s.length){var i=s[0].object;i.material.color.setHex(16773494),this.dot_hovered=i}}}},{key:"HandleDrag",value:function(){if(!this.is_bifrost_animating){var e=this.GetMouseOnPlane();this.dot_hovered.position.set(e.x,e.y,e.z);var t=3*this.dot_hovered.userData.id,s=this.line.geometry.attributes.position.array;s[t]=e.x,s[t+1]=e.y,s[t+2]=e.z,this.line.geometry.attributes.position.needsUpdate=!0,this.spline_ctrl_needs_update=!0}}},{key:"GetMouseOnPlane",value:function(){var e=this.canvas.pickPosition,t=this.click_raycaster,s=new C.p(e.x,e.y,5);return t.setFromCamera(s,this.camera),t.intersectObject(this.planeMesh,!0)[0].point}},{key:"UpdateSplineOnDotMoved",value:function(){var e=this;if(this.spline_ctrl_needs_update){this.bifrost=!1,this.is_handling_drag=!0;var t,s=!0,i=Object(S.a)(this.splines);try{var a=function(){var i=t.value;s&&(s=!1,i.curveUpdateDone=function(){i.curveUpdateDone=null,e.is_handling_drag=!1}),i.Sample(e.dotsGroup.children,e.global_tau,e.global_gran).KickUpdateCurve()};for(i.s();!(t=i.n()).done;)a()}catch(n){i.e(n)}finally{i.f()}this.spline_ctrl_needs_update=!1}}},{key:"HandleClick",value:function(e){if(null===this.dot_hovered){this.canvas.setPickPosition(e);var t=this.GetMouseOnPlane(),s=this.dotsGroup,i=new C.c(.06,12),a=new C.k({color:16777215}),n=new C.j(i,a);n.position.set(t.x,t.y,t.z),n.userData={id:s.children.length},s.add(n);var r,c=Object(S.a)(this.splines);try{for(c.s();!(r=c.n()).done;){r.value.Append(this.dotsGroup.children,this.global_gran,t)}}catch(p){c.e(p)}finally{c.f()}if(this.bifrost_save.splines){var l,o=Object(S.a)(this.bifrost_save.splines);try{for(o.s();!(l=o.n()).done;){l.value.Append(this.dotsGroup.children,this.global_gran,t)}}catch(p){o.e(p)}finally{o.f()}}var h=this.line.geometry.attributes.position.array;h[3*this.drawCount]=t.x,h[3*this.drawCount+1]=t.y,h[3*this.drawCount+2]=t.z,++this.drawCount,this.line.geometry.setDrawRange(0,this.drawCount),this.line.geometry.attributes.position.needsUpdate=!0,this._NotifyListener("addDot"),this.MouseHoverOrDrag(e)}}},{key:"TestValidSplines",value:function(){var e,t=Object(S.a)(this.splines);try{for(t.s();!(e=t.n()).done;){if(null!=e.value.spline)return!0}}catch(s){t.e(s)}finally{t.f()}return!1}},{key:"Clear",value:function(){this.bifrost_save.splines=null;var e,t=Object(S.a)(this.splines);try{for(t.s();!(e=t.n()).done;){e.value.Destroy()}}catch(i){t.e(i)}finally{t.f()}this.splines=[new G(this.scene,this.themeColor)];for(var s=this.dotsGroup;s.children.length;)s.remove(s.children[0]);this.drawCount=0,this.line.geometry.setDrawRange(0,this.drawCount),this.line.geometry.attributes.position.needsUpdate=!0}},{key:"Render",value:function(){var e,t=Object(S.a)(this.splines);try{for(t.s();!(e=t.n()).done;){e.value.UpdateCurve()}}catch(s){t.e(s)}finally{t.f()}this.splines.length&&this.splines[0].spline&&(!1===this.show_param?this.splines[0].spline.geometry.vertices:this.splines[0].param_vectors)}},{key:"gran",set:function(e){if(this.global_gran!==e){this.global_gran=e;var t,s=Object(S.a)(this.splines);try{for(s.s();!(t=s.n()).done;){t.value.Sample(this.dotsGroup.children,this.global_tau,this.global_gran).DisplayNewCurve()}}catch(i){s.e(i)}finally{s.f()}}}},{key:"tau",set:function(e){if(this.global_tau!==e){this.global_tau=e;var t,s=Object(S.a)(this.splines);try{for(s.s();!(t=s.n()).done;){t.value.Sample(this.dotsGroup.children,this.global_tau,this.global_gran).KickUpdateCurve()}}catch(i){s.e(i)}finally{s.f()}}}},{key:"bifrost",set:function(e){var t=this,s=this.bifrost_save.splines,i=this.scene;if(!(null!==s===e||!1===this.TestValidSplines()||this.dotsGroup.children.length<=2))if(!1!==e){this.is_bifrost_animating=!0,this.bifrost_save.splines=this.splines,this.bifrost_save.global_tau=this.global_tau;var a,n=this.splines[0],r=Object(S.a)(this.splines);try{for(r.s();!(a=r.n()).done;){var c=a.value;i.remove(c.spline)}}catch(m){r.e(m)}finally{r.f()}this.splines=[];var l=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1],o=0;n.curveUpdateDone=function(){if(o===l.length)return n.curveUpdateDone=null,void(t.is_bifrost_animating=!1);var e=n;n=n.clone(),e.curveUpdateDone=null,t.scene.add(n.spline),n.Sample(t.dotsGroup.children,l[o],t.global_gran).KickUpdateCurve(),t.splines.push(n),++o},n.curveUpdateDone()}else{for(var h=0;h<this.splines.length;++h)this.scene.remove(this.splines[h].spline);this.global_tau=this.bifrost_save.global_tau,this.splines=this.bifrost_save.splines;var p,u=Object(S.a)(this.splines);try{for(u.s();!(p=u.n()).done;){var d=p.value;this.scene.add(d.spline)}}catch(m){u.e(m)}finally{u.f()}this.bifrost_save.splines=null}}},{key:"run_img",set:function(e){}},{key:"img_speed",set:function(e){}},{key:"imgs",get:function(){return null}},{key:"selectImg",set:function(e){}},{key:"showParam",set:function(e){if(this.show_param!==e&&void 0!==e)if(this.show_param=e,!0===this.show_param){var t,s=Object(S.a)(this.splines);try{for(s.s();!(t=s.n()).done;){t.value.ShowParam(this.param_sampler_name,0,this.dotsGroup.children.length,this.global_gran)}}catch(n){s.e(n)}finally{s.f()}}else{var i,a=Object(S.a)(this.splines);try{for(a.s();!(i=a.n()).done;){i.value.HideParam()}}catch(n){a.e(n)}finally{a.f()}}}},{key:"param_sampler",set:function(e){if(e&&(this.param_sampler_fn=D[e],this.param_sampler_name=e,this.show_param)){var t,s=Object(S.a)(this.splines);try{for(s.s();!(t=s.n()).done;){t.value.ShowParam(this.param_sampler_name,0,this.dotsGroup.children.length,this.global_gran)}}catch(i){s.e(i)}finally{s.f()}}}}]),e}(),z=function(){function e(t,s){var i=this;Object(h.a)(this,e),this.canvas=null,this.w=0,this.h=0,this.pickPosition={x:0,y:0},this.frame=null,this.clearPickPosition(),this.canvas=s,this.w=t.clientWidth,this.h=t.clientHeight,t.appendChild(s),t.mouseout=function(){return i.clearPickPosition()},this.frame=t}return Object(p.a)(e,[{key:"onFrameResize",value:function(){this.w=this.frame.clientWidth,this.h=this.frame.clientHeight}},{key:"Aspect",value:function(){return this.w/this.h}},{key:"getCanvasRelativePosition",value:function(e){var t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}},{key:"setPickPosition",value:function(e){var t=this.pickPosition,s=this.getCanvasRelativePosition(e);t.x=s.x/this.w*2-1,t.y=s.y/this.h*-2+1}},{key:"clearPickPosition",value:function(){var e=this.pickPosition;e.x=-1e5,e.y=-1e5}},{key:"glContext",get:function(){return this.canvas.getContext("gl")}},{key:"onmousemove",set:function(e){this.frame.onmousemove=e}},{key:"onmousedown",set:function(e){this.frame.onmousedown=e}},{key:"onmouseup",set:function(e){this.frame.onmouseup=e}},{key:"onclick",set:function(e){this.frame.onclick=e}}]),e}(),A=function(e){Object(_.a)(s,e);var t=Object(k.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(p.a)(s,[{key:"componentDidMount",value:function(){this.handle=function(e,t){var s=new C.o,i=new C.r({antialias:!0,alpha:!0});i.setPixelRatio(window.devicePixelRatio);var a=document.getElementById(t),n=new z(a,i.domElement),r=new C.l(75,n.Aspect(),.1,1e3),c=9094864,l=0;i.setSize(n.w,n.h),i.setClearColor(c,l),r.position.z=5,n.glContext;var o=new C.m(1e3,1e3,10,10),h=new C.j(o,new C.k),p=new M(s,n,r,h,e);function u(){requestAnimationFrame(u),p.Render(),i.render(s,r),p.bifrost=!p.is_handling_drag}return window.addEventListener("resize",(function(){n.onFrameResize(),r.aspect=n.Aspect(),r.updateProjectionMatrix(),i.setSize(n.w,n.h)}),!1),u(),{HandleTau:function(e){p.tau=e},HandleGran:function(e){p.gran=e},HandleImg:function(e){p.run_img=e},HandleImgSpeed:function(e){p.img_speed=e},EnableBifrost:function(e){p.bifrost=e},HandleCleanLines:function(){p.Clear()},ShowLinearSample:function(e){p.showParam=e},GetAllImgs:function(){return p.imgs},SelectImg:function(e){p.selectImg=e},SelectSampler:function(e){p.param_sampler=e},SetFlushColor:function(e,t){i.setClearColor(e||c,t||l)},SetListener:function(e){p.listener=e}}}(this.props.colorGroup,this.props.elId),void 0!==this.props.getImg&&(this.props.getImg(this.handle.GetAllImgs()),this.handle.SetListener(this.props.listener))}},{key:"render",value:function(){return void 0!==this.handle&&(this.handle.HandleTau(this.props.tau),this.handle.HandleGran(this.props.gran),this.handle.HandleImg(this.props.theimg),this.handle.HandleImgSpeed(this.props.imgSpeed),void 0!==this.props.bifrost&&this.handle.EnableBifrost(this.props.bifrost),this.handle.ShowLinearSample(this.props.enable_param),this.handle.SelectImg(this.props.selectImg),this.handle.SelectSampler(this.props.selectSampler),this.handle.SetFlushColor(this.props.flushColor,this.props.flushAlpha),this.handle.SetListener(this.props.listener),!0===this.props.cleanup&&(this.handle.HandleCleanLines(),this.props.oncleanupDone())),Object(i.jsx)("div",{})}}]),s}(n.a.Component);var I=s(90),T=function(e){var t=n.a.useState(2),s=Object(l.a)(t,2),a=(s[0],s[1],n.a.useState(.5)),r=Object(l.a)(a,2),c=r[0],o=(r[1],n.a.useState(20)),h=Object(l.a)(o,2),p=h[0],u=(h[1],n.a.useState(!1)),d=Object(l.a)(u,2),m=d[0],j=(d[1],n.a.useState(1)),v=Object(l.a)(j,2),f=v[0],b=(v[1],n.a.useState(!1)),g=Object(l.a)(b,2),x=(g[0],g[1],n.a.useState(!1)),y=Object(l.a)(x,2),O=y[0],w=(y[1],n.a.useState(!1)),_=Object(l.a)(w,2),k=_[0],C=(_[1],n.a.useState([])),S=Object(l.a)(C,2),N=(S[0],S[1],n.a.useState(0)),P=Object(l.a)(N,2),D=P[0],G=(P[1],n.a.useState("linear")),M=Object(l.a)(G,2),z=M[0],T=(M[1],n.a.useState("Click in the box")),U=Object(l.a)(T,2),F=U[0],H=U[1],L=n.a.useState(0),B=Object(l.a)(L,2),E=B[0],R=B[1],J=n.a.useState({color:"#ffffff90",fontSize:"180%"}),W=Object(l.a)(J,2),q=W[0],Z=W[1];return Object(i.jsxs)("div",{className:"aspect-16-9",children:[Object(i.jsx)("div",{className:"aspect-inner",id:"canvas-frame-spline",children:Object(i.jsx)("div",{className:"spline-click-info",style:q,children:F})}),Object(i.jsx)(A,{tau:c,gran:p,theimg:m,imgSpeed:f,colorGroup:I.a,cleanup:O,oncleanupDone:function(){},elId:"canvas-frame-spline",enable_param:k,getImg:function(){},selectImg:D,selectSampler:z,listener:function(e){if("addDot"===e){if(!(E<=4))return;R(E+1),0===E&&(H("Click somewhere else"),Z({color:"white",fontSize:"120%"})),1===E&&(H("Keep clicking somewhere else"),Z({color:"white",fontSize:"120%"})),3===E&&(H("Try Drag the White Dots"),Z({color:"white",fontSize:"150%"})),4===E&&H("")}}})]})},U=function(e){var t={display:"flex",flexDirection:"column",color:"#00000044",letterSpacing:"0.2em",textAlign:e.centerTitle?"center":void 0,fontSize:"70%"};return Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyItems:"center",justifyContent:"center"},children:[Object(i.jsx)("p",{style:t,children:e.title}),Object(i.jsx)("p",{children:e.text?e.text:e.children})]})},F=function(){function e(t,s){Object(h.a)(this,e),this.x=0,this.y=0,this.x=t,this.y=s}return Object(p.a)(e,[{key:"add",value:function(e){return this.x+=e.x,this.y+=e.y,this}},{key:"multiplyScalar",value:function(e){return this.x*=e,this.y*=e,this}},{key:"sub",value:function(e){return this.x-=e.x,this.y-=e.y,this}},{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"svgfmt",value:function(){return"".concat(this.x,",").concat(this.y)}}]),e}(),H=function(e,t,s,i){for(var a=function(e){return e/180*Math.PI},n=a((null===i||void 0===i?void 0:i.startAngle)||0),r=(null===i||void 0===i?void 0:i.startX)||0,c=(null===i||void 0===i?void 0:i.startY)||0,l=new F(t/2+r,t/2+c),o=t/2,h=a(90-180/e),p=s/Math.tan(h)/(2*o*Math.cos(h)),u=new Array,d="",m=0;m<e;++m){var j=n-2*Math.PI/e*m,v=new F(o*Math.cos(j),o*Math.sin(j)).add(l);u.push(v)}for(var f=0;f<e;++f){var b=u[(f+0)%e],g=u[(f+1)%e],x=b.clone().add(g.clone().sub(b).multiplyScalar(p)),y=b.clone().add(g.clone().sub(b).multiplyScalar(1-p));if(0===f){var O=u[e-1],w=O.clone().add(b.clone().sub(O).multiplyScalar(1-p));d+="M ".concat(w.svgfmt()," ")}d+="A ".concat(s," ").concat(s," 0 0 0 ").concat(x.x," ").concat(x.y," "),d+="L ".concat(y.svgfmt()," ")}return d},L=function(e){var t=Object(o.a)(Object(o.a)({},e),{},{icon:void 0,message:void 0,link:void 0}),s=Object(i.jsx)(e.icon,Object(o.a)({},t));return e.link&&(s=Object(i.jsx)(y.a,{href:e.link,children:s})),e.tooltip&&(s=Object(i.jsx)(d.a,{title:e.tooltip,"aria-label":e.tooltip,children:s})),s};var B=function(){var e=new Array,t=new Array,s=new Array,r=new Array,c=function(e){return function(t){t&&(r[e]=t)}},h=function(t){return function(s){s&&(e[t]=s)}},p=function(e){return function(s){s&&(t[e]=s)}},d=function(e){return function(t){t&&(s[e]=t)}};function y(){for(var i in e){var a=e[i],n=r[i],c=a.clientHeight,l=n.clientHeight,o=Math.max(c,l),h=Math.max(c,l+40);s[i].style.height=h.toString()+"px",t[i].style.height=o.toString()+"px"}}Object(a.useEffect)((function(){y(),window.onload=y,document.title="Lin Zhaowei"}),[]),Object(a.useLayoutEffect)((function(){return window.addEventListener("resize",y),y(),function(){return window.removeEventListener("resize",y)}}),[]);var _={size:24,style:{marginRight:10}},k=n.a.useState(null),C=Object(l.a)(k,2),S=C[0],N=C[1],P=function(e){e&&("copy"===e?navigator.clipboard.writeText("leon.linzw@gmail.com"):"mail"===e&&window.open("mailto:leon.linzw@gmail.com")),N(null)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700",rel:"stylesheet"}),Object(i.jsxs)(u.a,{container:!0,style:{paddingLeft:20,paddingRight:20},alignItems:"flex-start",children:[Object(i.jsx)("div",{className:"vertical-space-2"}),Object(i.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(i.jsxs)(u.a,{container:!0,children:[Object(i.jsx)(u.a,{item:!0,xs:12,children:Object(i.jsx)("div",{className:"avatar-center-align",children:Object(i.jsxs)("div",{className:"avatar-circle",style:{position:"relative"},children:[Object(i.jsx)("svg",{viewBox:"0, 0 240 240",width:"240",height:"240",style:{position:"absolute",top:-10,left:-10},children:Object(i.jsx)("path",{d:H(16,240,15,{startAngle:30}),fill:"#e5f290da"})}),Object(i.jsx)("svg",{viewBox:"0, 0 230 230",width:"230",height:"230",style:{position:"absolute",top:-6,left:-6},children:Object(i.jsx)("path",{d:H(10,230,15,{startAngle:30}),fill:"#eef7bb"})}),Object(i.jsx)("svg",{viewBox:"0, 0 220 220",width:"220",height:"220",style:{position:"absolute",top:0,left:0},children:Object(i.jsx)("path",{d:H(6,220,15,{startAngle:15}),fill:"#f8fce3"})}),Object(i.jsxs)("svg",{viewBox:"0 0 200 200",width:"200",height:"200",style:{position:"relative"},children:[Object(i.jsx)("defs",{children:Object(i.jsx)("pattern",{id:"avatar",patternUnits:"userSpaceOnUse",width:"200",height:"200",children:Object(i.jsx)("image",{href:"static/img/me.jpg",x:"-110",y:"-80",width:"400",height:"400"})})}),Object(i.jsx)("path",{d:H(6,200,15),fill:"url(#avatar)"})]})]})})}),Object(i.jsx)(u.a,{item:!0,xs:12,children:Object(i.jsxs)(u.a,{container:!0,children:[Object(i.jsxs)(u.a,{item:!0,xs:12,sm:5,md:12,lg:5,children:[Object(i.jsx)("div",{className:"vertical-space-2"}),Object(i.jsxs)(U,{title:"Contacts",children:[Object(i.jsx)(L,Object(o.a)(Object(o.a)({icon:m.a,color:"#181717"},_),{},{tooltip:"Github",link:"https://github.com/linwe2012"})),Object(i.jsx)(L,Object(o.a)(Object(o.a)({"aria-controls":"menu-gmail","aria-haspopup":"true",icon:j.a,color:"#D14836",onClick:function(e){N(e.currentTarget)}},Object(o.a)(Object(o.a)({},_),{style:{cursor:"pointer"}})),{},{tooltip:"Gmail"})),Object(i.jsxs)(O.a,{id:"menu-gmail",anchorEl:S,keepMounted:!0,open:Boolean(S),onClose:function(){P()},children:[Object(i.jsx)("p",{className:"gmail-text",children:"leon.linzw@gmail.com"}),Object(i.jsx)(w.a,{onClick:function(){P("copy")},children:"Copy Address"}),Object(i.jsx)(w.a,{onClick:function(){P("mail")},children:"Send Mail"})]})]})]}),Object(i.jsxs)(u.a,{item:!0,xs:12,sm:7,md:12,lg:7,children:[Object(i.jsx)("div",{className:"vertical-space-2"}),Object(i.jsxs)(U,{title:"Proficiency",children:[Object(i.jsx)(L,Object(o.a)(Object(o.a)({icon:v.a,color:"#00599C"},_),{},{tooltip:"C/C++"})),Object(i.jsx)(L,Object(o.a)(Object(o.a)({icon:f.a,color:"#3776AB"},_),{},{tooltip:"Python"})),Object(i.jsx)(L,Object(o.a)(Object(o.a)({icon:b.a,color:"#F7DF1E"},_),{},{tooltip:"Javascript/Typescript"})),Object(i.jsx)(L,Object(o.a)(Object(o.a)({icon:g.a,color:"#0076A8"},_),{},{tooltip:"Matlab"})),Object(i.jsx)(L,Object(o.a)(Object(o.a)({icon:x.a,color:"#5586A48"},_),{},{tooltip:"OpenGL"}))]})]})]})})]})}),Object(i.jsxs)(u.a,{item:!0,xs:12,md:8,children:[Object(i.jsx)("div",{className:"vertical-space-2"}),Object(i.jsx)("h1",{style:{margin:0},children:"Zhaowei Lin"}),Object(i.jsx)("h3",{style:{marginBottom:10},children:"Student, Programmer in Hangzhou"}),Object(i.jsx)("p",{children:"I'm a senior colledge student. I love to create cool stuffs. I currently intern at Bytedance, working to improve the sdk that empowers Tiktok, Spicy, Douyin and much more."}),Object(i.jsx)("div",{className:"vertical-space-3"}),Object(i.jsxs)(u.a,{container:!0,justify:"center",alignItems:"center",children:[Object(i.jsxs)(u.a,{item:!0,xs:6,children:[" ",Object(i.jsx)(U,{title:"Education",text:"Zhejiang Unviersity"})," "]}),Object(i.jsxs)(u.a,{item:!0,xs:6,children:[" ",Object(i.jsx)(U,{title:"Major",text:"Digital Media Tech (Dept. of CS)"})," "]})]})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"project-start-title",children:"Projects"}),Object(i.jsx)("div",{className:"vertical-space-2"}),Object(i.jsxs)("div",{className:"project-item",ref:d(0),children:[Object(i.jsx)("img",{alt:"photomonatage",className:"project-bg",style:{bottom:0},src:"static/img/photomontage-crunch.png",ref:h(0)}),Object(i.jsx)("div",{className:"project-content project-cover-dark-gradient-tl",ref:p(0),children:Object(i.jsxs)("div",{ref:c(0),children:[Object(i.jsx)("div",{className:"project-subtitle",children:"ZJU | Computational Photography | C++ | OpenCV"}),Object(i.jsx)("h3",{style:{color:"white"},children:"Interactive Digital Photomontage"}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsx)("p",{className:"project-text project-lefttext",children:"Users can paint on images to indicate the best part of each image. The algorithm first uses graph-cut to extend user's brushes into regions. Then it uses Gradient Domain Fusion to make it seamless."}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsx)("p",{className:"project-subtext project-lefttext",children:"The background image demonstrates how gradient-domain fusion gradually recover the image from all 0s."}),Object(i.jsxs)("a",{className:"project-links",href:"https://grail.cs.washington.edu/projects/photomontage/photomontage.pdf",children:[" Paper ",Object(i.jsx)("br",{})]}),Object(i.jsxs)("a",{className:"project-links",href:"https://github.com/linwe2012/CourseComputationalPhotography",children:["Github ",Object(i.jsx)("br",{})]}),Object(i.jsxs)("a",{className:"project-links",href:"https://github.com/linwe2012/CourseComputationalPhotography",children:["Demo Video ",Object(i.jsx)("br",{})]}),Object(i.jsx)("div",{className:"vertical-space-7"})]})})]}),Object(i.jsxs)("div",{className:"project-item",style:{backgroundColor:"#222020"},ref:d(1),children:[Object(i.jsx)("img",{alt:"schroedinger smoke",className:"project-bg",style:{bottom:0},src:"static/img/schroedinger_smoke.png",ref:h(1)}),Object(i.jsx)("div",{className:"project-content",ref:p(1),children:Object(i.jsxs)("div",{ref:c(1),children:[Object(i.jsx)("div",{className:"project-subtitle",children:"ZJU | Advances in Computer Graphics | C# | Compute Shader"}),Object(i.jsxs)("h3",{style:{color:"white"},children:["Schr\xf6dinger's Smoke ",Object(i.jsx)("span",{className:"project-tagtext",children:"Siggraph 16"})]}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsx)("p",{className:"project-text project-lefttext",children:"I implements the paper in Unity and accelerate it with Computer Shader, which runs faster than original paper. "}),Object(i.jsx)("p",{className:"project-text project-lefttext",children:"Schr\xf6dinger's Equation in Quantum Mechanics can be used to describe superfluids, whose dynamics is similar to that of smoke. The paper leverages Schr\xf6dinger's Equation to calculate vortex and generates the velocity field from the wave function."}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsx)("p",{className:"project-subtext project-lefttext",children:"The background image demonstrates simulating results with over 100,000,000 particles."}),Object(i.jsxs)("a",{className:"project-links",href:"http://page.math.tu-berlin.de/~chern/projects/SchrodingersSmoke/",children:[" Paper ",Object(i.jsx)("br",{})]}),Object(i.jsxs)("a",{className:"project-links",href:"https://github.com/linwe2012/ShroedingerSmoke",children:["Github ",Object(i.jsx)("br",{})]}),Object(i.jsx)("div",{className:"vertical-space-7"})]})})]}),Object(i.jsx)("div",{className:"project-item gradient-spline",children:Object(i.jsxs)("div",{className:"project-content",style:{position:"relative"},children:[Object(i.jsx)("div",{className:"project-subtitle",children:"ZJU | Computer Animations | Typescript | WebGL"}),Object(i.jsx)("h3",{style:{color:"white"},children:"Splines, FFD, FuzzyWarp"}),Object(i.jsx)("p",{className:"project-text",children:"All three projects are written in typescript and you can play with it online."}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"project-text project-text-white",children:" Spline: "})," ",Object(i.jsx)("span",{children:" \xa0"}),Object(i.jsx)("a",{className:"project-links",href:"https://github.com/linwe2012/Spline",children:"Github"})," ",Object(i.jsx)("span",{children:" "}),Object(i.jsx)("a",{className:"project-links",href:"https://linwe2012.github.io/Spline/",children:" Play Online Demo "})]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"project-text project-text-white",children:" Free Form Deformation: "})," ",Object(i.jsx)("span",{children:" \xa0"}),Object(i.jsx)("a",{className:"project-links",href:"https://github.com/linwe2012/FreeFormDeformation",children:"Github"})," ",Object(i.jsx)("span",{children:" "}),Object(i.jsx)("a",{className:"project-links",href:"https://linwe2012.github.io/FreeFormDeformation/",children:" Play Online Demo "})]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"project-text project-text-white",children:" Fuzzy Warp: "})," ",Object(i.jsx)("span",{children:" \xa0"}),Object(i.jsx)("a",{className:"project-links",href:"https://github.com/linwe2012/FuzzyWarp",children:"Github"})," ",Object(i.jsx)("span",{children:" "}),Object(i.jsx)("a",{className:"project-links",href:"https://linwe2012.github.io/FuzzyWarp/",children:" Play Online Demo "})]}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsx)(T,{})]})}),Object(i.jsxs)("div",{className:"project-item",style:{backgroundColor:"#88b8ca"},ref:d(2),children:[Object(i.jsx)("img",{alt:"schroedinger smoke",className:"project-bg",style:{bottom:-45},src:"static/img/animal_party-crunch.png",ref:h(2)}),Object(i.jsx)("div",{className:"project-content",ref:p(2),children:Object(i.jsxs)("div",{ref:c(2),children:[Object(i.jsx)("div",{className:"project-subtitle",children:"ZJU | Game Design | C# | Joycon"}),Object(i.jsx)("h3",{style:{color:"white"},children:"Animal Party"}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsxs)("div",{className:"project-lefttext",style:{backgroundColor:"#00000055",marginLeft:-40,paddingLeft:40,paddingTop:20,paddingRight:20,paddingBottom:20},children:[Object(i.jsx)("p",{className:"project-text  project-text-white",children:"I led my team made this game where Joycon & body movements are used to play. The game is about taking care of animals. You can feed and pet animals in the game."}),Object(i.jsx)("p",{className:"project-text  project-text-white",children:"There are five missions and a tutorial in the game."}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsx)("p",{className:"project-subtext",children:"The background image is the intro scene."}),Object(i.jsxs)("a",{className:"project-links",href:"https://github.com/linwe2012/AnimalParty",children:["Github ",Object(i.jsx)("br",{})]}),Object(i.jsxs)("a",{className:"project-links",href:"https://youtu.be/5kacuvv1os8",children:[" Demo Video ",Object(i.jsx)("br",{})]})]}),Object(i.jsx)("div",{className:"vertical-space-5"})]})})]}),Object(i.jsxs)("div",{className:"project-item",style:{backgroundColor:"#1f282d"},ref:d(4),children:[Object(i.jsx)("img",{alt:"schroedinger smoke",className:"project-bg",style:{bottom:-45},src:"static/img/wordgame-render-2-comp.png",ref:h(4)}),Object(i.jsx)("div",{className:"project-content",ref:p(4),children:Object(i.jsxs)("div",{ref:c(4),children:[Object(i.jsx)("div",{className:"project-subtitle",children:"ZJU | Tech & Innovations | C++ | Sifteo Cubes "}),Object(i.jsx)("h3",{style:{color:"white"},children:"Fight against Alzheimer's disease with Sifteo Cubes"}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsxs)("div",{className:"project-lefttext",children:[Object(i.jsx)("p",{className:"project-text  project-text-white project-text-shadow",children:"My team surveyed possible ways to fight against Alzheimer's disease (AD). Sound & light stimulations will be helpful according our research."}),Object(i.jsx)("p",{className:"project-text project-text-white project-text-shadow",children:"We want something like legos but more versatile, and then comes Sifteo Cube. We attached a flashing butt to the cube to enable light simulations."}),Object(i.jsx)("p",{className:"project-text project-text-white project-text-shadow",children:"I wrote two games, the dyer game where players mix dyers of different colors to obtain designated color, and the word jigsaw puzzle game"}),Object(i.jsx)("div",{className:"vertical-space-1"}),Object(i.jsx)("p",{className:"project-subtext",children:"Background: a rendering of the cubes."}),Object(i.jsxs)("a",{className:"project-links",href:"https://github.com/linwe2012/SifteoGames",children:["Github ",Object(i.jsx)("br",{})]})]}),Object(i.jsx)("div",{className:"vertical-space-5"})]})})]})]})]})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,107)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),i(e),a(e),n(e),r(e)}))};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),E()}},[[61,1,2]]]);
//# sourceMappingURL=main.d98b8ec1.chunk.js.map