"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[711],{4711:(P,p,a)=>{a.r(p),a.d(p,{ResumeComponent:()=>M});var s=a(4755),l=a(430),_=a(9624),r=a(1728),n=a(2223),m=a(7884);function g(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"button",8),n.NdJ("click",function(){n.CHM(t);const c=n.oxw(3);return n.KtG(c.downloadCV())}),n._uU(1," Download "),n.TgZ(2,"mat-icon"),n._uU(3,"download"),n.qZA()()}}function u(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"mat-icon",9),n.NdJ("click",function(){n.CHM(t);const c=n.oxw(3);return n.KtG(c.downloadCV())}),n._uU(1,"download"),n.qZA()}}function f(e,o){if(1&e&&(n.TgZ(0,"div",5)(1,"h2"),n._uU(2),n.qZA(),n.YNc(3,g,4,0,"button",6),n.YNc(4,u,2,0,"ng-template",null,7,n.W1O),n.qZA()),2&e){const t=n.MAs(5),i=n.oxw().$implicit,c=n.oxw();n.xp6(2),n.Oqu(i.content),n.xp6(1),n.Q6J("ngIf",!c.responsive.isMobile())("ngIfElse",t)}}function d(e,o){if(1&e&&(n.TgZ(0,"p",10),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.content)}}function x(e,o){if(1&e&&(n.TgZ(0,"div")(1,"a",11),n._UZ(2,"mat-icon",12),n.TgZ(3,"span"),n._uU(4),n.qZA()()()),2&e){const t=n.oxw().$implicit;let i,c;n.xp6(1),n.Q6J("href",t.link,n.LSH),n.xp6(1),n.Q6J("svgIcon",null!==(i=t.svgIcon)&&void 0!==i?i:"")("fontIcon",null!==(c=t.fontIcon)&&void 0!==c?c:""),n.xp6(2),n.hij(" ",t.content,"")}}function C(e,o){if(1&e&&(n.TgZ(0,"h3"),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.content)}}function O(e,o){if(1&e&&(n.TgZ(0,"small"),n._uU(1),n.qZA()),2&e){const t=o.$implicit;n.xp6(1),n.Oqu(t)}}function h(e,o){if(1&e&&(n.TgZ(0,"div",13)(1,"div",14),n._UZ(2,"img",15),n.qZA(),n.TgZ(3,"div",16)(4,"h4"),n._uU(5),n.qZA(),n.TgZ(6,"span"),n._uU(7),n.qZA(),n.TgZ(8,"small"),n._uU(9),n.qZA(),n.YNc(10,O,2,1,"small",0),n.qZA()()),2&e){const t=n.oxw().$implicit;n.xp6(2),n.Q6J("height",24)("width",24)("ngSrc",t.icon),n.xp6(3),n.Oqu(t.title),n.xp6(2),n.Oqu(t.subtitle),n.xp6(2),n.Oqu(t.timeLine),n.xp6(1),n.Q6J("ngForOf",t.description)}}function v(e,o){if(1&e&&(n.ynx(0),n.YNc(1,f,6,3,"div",1),n.YNc(2,d,2,1,"p",2),n.YNc(3,x,5,4,"div",3),n.YNc(4,C,2,1,"h3",3),n.YNc(5,h,11,7,"div",4),n.BQk()),2&e){const t=o.$implicit;n.xp6(1),n.Q6J("ngIf","title"===t.type),n.xp6(1),n.Q6J("ngIf","paragraph"===t.type),n.xp6(1),n.Q6J("ngIf","imageIcon"===t.type),n.xp6(1),n.Q6J("ngIf","section"===t.type),n.xp6(1),n.Q6J("ngIf","occupation"===t.type)}}let M=(()=>{class e{constructor(t){this.responsive=t,this.resumeContent=[{type:"title",content:"Sebastian Post"},{type:"paragraph",content:"Schweinfurt, Bavaria, Germany"},{type:"imageIcon",content:_.w.email,link:"mailto:"+_.w.email,fontIcon:"mail"},{type:"imageIcon",content:_.w.linkedin,link:"https://"+_.w.linkedin,svgIcon:"linkedin"},{type:"section",content:"Experience"},{type:"occupation",icon:"assets/nerdware.jfif",title:"Frontend Developer",subtitle:"nerdware GmbH",timeLine:"Oct 2022 - Present",description:["Working on multinational HR support system."]},{type:"occupation",icon:"assets/aracom.jpg",title:"Frontend Developer",subtitle:"AraCom IT Services AG",timeLine:"Apr 2021 - Sep 2022 (1 year 6 months)",description:["Projects on Enterprise Resource Planning and Internationalization."]},{type:"occupation",icon:"assets/ronny.png",title:"IT Administrator (Minijob)",subtitle:"Ronny T-Shirt Druck",timeLine:"2015 - 2021 (6 years)",description:["\u25cf Onlineshop web development","\u25cf SEO","\u25cf Maintenance of soft- and hardware"]},{type:"section",content:"Education"},{type:"occupation",icon:"assets/uni_bamberg.jfif",title:"Otto-Friedrich-Universit\xe4t Bamberg",subtitle:"Bachelor of Science - BS, Software Systems Science",timeLine:"Oct 2017 - Mar 2021",description:["\u25cf Bachelor's thesis on a business search engine frontend written in Kotlin-React","\u25cf Software projects using mainly Angular and Spring Boot."]},{type:"section",content:"Skills"},{type:"paragraph",content:["Angular","Nx","TypeScript","RxJS","SCSS","HTML","SEO"].join("   \u2022   ")}]}downloadCV(){const t=document.createElement("a");t.download="Resume-Sebastian-Post.pdf",t.href="assets/Resume-Sebastian-Post.pdf",t.click()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(m.I))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-resume"]],standalone:!0,features:[n.jDz],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","title",4,"ngIf"],["class","paragraph",4,"ngIf"],[4,"ngIf"],["class","occupation",4,"ngIf"],[1,"title"],["mat-flat-button","","color","accent",3,"click",4,"ngIf","ngIfElse"],["justIcon",""],["mat-flat-button","","color","accent",3,"click"],[3,"click"],[1,"paragraph"],[1,"image-icon",3,"href"],[3,"svgIcon","fontIcon"],[1,"occupation"],[1,"icon"],[3,"height","width","ngSrc"],[1,"info"]],template:function(t,i){1&t&&n.YNc(0,v,6,5,"ng-container",0),2&t&&n.Q6J("ngForOf",i.resumeContent)},dependencies:[s.ez,s.sg,s.O5,l.Ps,l.Hw,s.Zd,r.ot,r.lW],styles:[".image-icon[_ngcontent-%COMP%]{display:inline-flex;gap:10px;align-items:center;margin:8px 0;color:inherit}.occupation[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;gap:10px}.occupation[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:24px}.occupation[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;gap:1px;flex-direction:column}.occupation[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.paragraph[_ngcontent-%COMP%]{white-space:break-spaces}.title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:border-box}.title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),e})()}}]);