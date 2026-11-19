import{m as J}from"./maplibre-GFcYF3F4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const o of f.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(s){if(s.ep)return;s.ep=!0;const f=r(s);fetch(s.href,f)}})();var xe={},re={},oe=34,Z=10,ie=13;function De(e){return new Function("d","return {"+e.map(function(t,r){return JSON.stringify(t)+": d["+r+'] || ""'}).join(",")+"}")}function Xe(e,t){var r=De(e);return function(c,s){return t(r(c),s,e)}}function Fe(e){var t=Object.create(null),r=[];return e.forEach(function(c){for(var s in c)s in t||r.push(t[s]=s)}),r}function E(e,t){var r=e+"",c=r.length;return c<t?new Array(t-c+1).join(0)+r:r}function Ye(e){return e<0?"-"+E(-e,6):e>9999?"+"+E(e,6):E(e,4)}function Qe(e){var t=e.getUTCHours(),r=e.getUTCMinutes(),c=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Ye(e.getUTCFullYear())+"-"+E(e.getUTCMonth()+1,2)+"-"+E(e.getUTCDate(),2)+(s?"T"+E(t,2)+":"+E(r,2)+":"+E(c,2)+"."+E(s,3)+"Z":c?"T"+E(t,2)+":"+E(r,2)+":"+E(c,2)+"Z":r||t?"T"+E(t,2)+":"+E(r,2)+"Z":"")}function Ke(e){var t=new RegExp('["'+e+`
\r]`),r=e.charCodeAt(0);function c(n,a){var p,m,h=s(n,function(C,g){if(p)return p(C,g-1);m=C,p=a?Xe(C,a):De(C)});return h.columns=m||[],h}function s(n,a){var p=[],m=n.length,h=0,C=0,g,q=m<=0,N=!1;n.charCodeAt(m-1)===Z&&--m,n.charCodeAt(m-1)===ie&&--m;function G(){if(q)return re;if(N)return N=!1,xe;var R,D=h,k;if(n.charCodeAt(D)===oe){for(;h++<m&&n.charCodeAt(h)!==oe||n.charCodeAt(++h)===oe;);return(R=h)>=m?q=!0:(k=n.charCodeAt(h++))===Z?N=!0:k===ie&&(N=!0,n.charCodeAt(h)===Z&&++h),n.slice(D+1,R-1).replace(/""/g,'"')}for(;h<m;){if((k=n.charCodeAt(R=h++))===Z)N=!0;else if(k===ie)N=!0,n.charCodeAt(h)===Z&&++h;else if(k!==r)continue;return n.slice(D,R)}return q=!0,n.slice(D,m)}for(;(g=G())!==re;){for(var I=[];g!==xe&&g!==re;)I.push(g),g=G();a&&(I=a(I,C++))==null||p.push(I)}return p}function f(n,a){return n.map(function(p){return a.map(function(m){return i(p[m])}).join(e)})}function o(n,a){return a==null&&(a=Fe(n)),[a.map(i).join(e)].concat(f(n,a)).join(`
`)}function l(n,a){return a==null&&(a=Fe(n)),f(n,a).join(`
`)}function u(n){return n.map(d).join(`
`)}function d(n){return n.map(i).join(e)}function i(n){return n==null?"":n instanceof Date?Qe(n):t.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:c,parseRows:s,format:o,formatBody:l,formatRows:u,formatRow:d,formatValue:i}}var et=Ke(","),tt=et.parse;function nt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function rt(e,t){return fetch(e,t).then(nt)}function ot(e){return function(t,r,c){return arguments.length===2&&typeof r=="function"&&(c=r,r=void 0),rt(t,r).then(function(s){return e(s,c)})}}var it=ot(tt);function st(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);if(!(e.status===204||e.status===205))return e.json()}function at(e,t){return fetch(e,t).then(st)}const Oe=[{id:"01",file:"01.csv",name:"Ain",complete:!0},{id:"02",file:"02.csv",name:"Aisne",complete:!0},{id:"03",file:"03.csv",name:"Allier",complete:!0},{id:"04",file:"04.csv",name:"Alpes-de-Haute-Provence",complete:!0},{id:"05",file:"05.csv",name:"Hautes-Alpes",complete:!0},{id:"06",file:"06.csv",name:"Alpes-Maritimes",complete:!0},{id:"07",file:"07.csv",name:"Ardèche",complete:!0},{id:"08",file:"08.csv",name:"Ardennes",complete:!0},{id:"09",file:"09.csv",name:"Ariège",complete:!0},{id:"10",file:"10.csv",name:"Aube",complete:!0},{id:"11",file:"11.csv",name:"Aude",complete:!0},{id:"12",file:"12.csv",name:"Aveyron",complete:!0},{id:"13",file:"13.csv",name:"Bouches-du-Rhône",complete:!0},{id:"14",file:"14.csv",name:"Calvados",complete:!0},{id:"15",file:"15.csv",name:"Cantal",complete:!0},{id:"16",file:"16.csv",name:"Charente",complete:!0},{id:"17",file:"17.csv",name:"Charente-Maritime",complete:!0},{id:"18",file:"18.csv",name:"Cher",complete:!0},{id:"19",file:"19.csv",name:"Corrèze",complete:!0},{id:"2A",file:"2A.csv",name:"Corse-du-Sud",complete:!0},{id:"2B",file:"2B.csv",name:"Haute-Corse",complete:!0},{id:"21",file:"21.csv",name:"Côte-d'Or",complete:!0},{id:"22",file:"22.csv",name:"Côtes-d'Armor",complete:!0},{id:"23",file:"23.csv",name:"Creuse",complete:!0},{id:"24",file:"24.csv",name:"Dordogne",complete:!0},{id:"25",file:"25.csv",name:"Doubs",complete:!0},{id:"26",file:"26.csv",name:"Drôme",complete:!0},{id:"27",file:"27.csv",name:"Eure",complete:!0},{id:"28",file:"28.csv",name:"Eure-et-Loir",complete:!0},{id:"29",file:"29.csv",name:"Finistère",complete:!0},{id:"30",file:"30.csv",name:"Gard",complete:!0},{id:"31",file:"31.csv",name:"Haute-Garonne",complete:!0},{id:"32",file:"32.csv",name:"Gers",complete:!0},{id:"33",file:"33.csv",name:"Gironde",complete:!0},{id:"34",file:"34.csv",name:"Hérault",complete:!0},{id:"35",file:"35.csv",name:"Ille-et-Vilaine",complete:!0},{id:"36",file:"36.csv",name:"Indre",complete:!0},{id:"37",file:"37.csv",name:"Indre-et-Loire",complete:!0},{id:"38",file:"38.csv",name:"Isère",complete:!0},{id:"39",file:"39.csv",name:"Jura",complete:!0},{id:"40",file:"40.csv",name:"Landes",complete:!0},{id:"41",file:"41.csv",name:"Loir-et-Cher",complete:!0},{id:"42",file:"42.csv",name:"Loire",complete:!0},{id:"43",file:"43.csv",name:"Haute-Loire",complete:!0},{id:"44",file:"44.csv",name:"Loire-Atlantique",complete:!0},{id:"45",file:"45.csv",name:"Loiret",complete:!0},{id:"46",file:"46.csv",name:"Lot",complete:!0},{id:"47",file:"47.csv",name:"Lot-et-Garonne",complete:!0},{id:"48",file:"48.csv",name:"Lozère",complete:!0},{id:"49",file:"49.csv",name:"Maine-et-Loire",complete:!0},{id:"50",file:"50.csv",name:"Manche",complete:!0},{id:"51",file:"51.csv",name:"Marne",complete:!0},{id:"52",file:"52.csv",name:"Haute-Marne",complete:!0},{id:"53",file:"53.csv",name:"Mayenne",complete:!0},{id:"54",file:"54.csv",name:"Meurthe-et-Moselle",complete:!0},{id:"55",file:"55.csv",name:"Meuse",complete:!0},{id:"56",file:"56.csv",name:"Morbihan",complete:!0},{id:"57",file:"57.csv",name:"Moselle",complete:!0},{id:"58",file:"58.csv",name:"Nièvre",complete:!0},{id:"59",file:"59.csv",name:"Nord",complete:!0},{id:"60",file:"60.csv",name:"Oise",complete:!0},{id:"61",file:"61.csv",name:"Orne",complete:!0},{id:"62",file:"62.csv",name:"Pas-de-Calais",complete:!0},{id:"63",file:"63.csv",name:"Puy-de-Dôme",complete:!0},{id:"64",file:"64.csv",name:"Pyrénées-Atlantiques",complete:!0},{id:"65",file:"65.csv",name:"Hautes-Pyrénées",complete:!0},{id:"66",file:"66.csv",name:"Pyrénées-Orientales",complete:!0},{id:"67",file:"67.csv",name:"Bas-Rhin",complete:!0},{id:"68",file:"68.csv",name:"Haut-Rhin",complete:!0},{id:"69",file:"69.csv",name:"Rhône",complete:!0},{id:"70",file:"70.csv",name:"Haute-Saône",complete:!0},{id:"71",file:"71.csv",name:"Saône-et-Loire",complete:!0},{id:"72",file:"72.csv",name:"Sarthe",complete:!0},{id:"73",file:"73.csv",name:"Savoie",complete:!0},{id:"74",file:"74.csv",name:"Haute-Savoie",complete:!0},{id:"75",file:"75.csv",name:"Paris",complete:!0},{id:"76",file:"76.csv",name:"Seine-Maritime",complete:!0},{id:"77",file:"77.csv",name:"Seine-et-Marne",complete:!0},{id:"78",file:"78.csv",name:"Yvelines",complete:!0},{id:"79",file:"79.csv",name:"Deux-Sèvres",complete:!0},{id:"80",file:"80.csv",name:"Somme",complete:!0},{id:"81",file:"81.csv",name:"Tarn",complete:!0},{id:"82",file:"82.csv",name:"Tarn-et-Garonne",complete:!0},{id:"83",file:"83.csv",name:"Var",complete:!0},{id:"84",file:"84.csv",name:"Vaucluse",complete:!0},{id:"85",file:"85.csv",name:"Vendée",complete:!0},{id:"86",file:"86.csv",name:"Vienne",complete:!0},{id:"87",file:"87.csv",name:"Haute-Vienne",complete:!0},{id:"88",file:"88.csv",name:"Vosges",complete:!0},{id:"89",file:"89.csv",name:"Yonne",complete:!0},{id:"90",file:"90.csv",name:"Territoire de Belfort",complete:!0},{id:"91",file:"91.csv",name:"Essonne",complete:!0},{id:"92",file:"92.csv",name:"Hauts-de-Seine",complete:!0},{id:"93",file:"93.csv",name:"Seine-Saint-Denis",complete:!0},{id:"94",file:"94.csv",name:"Val-de-Marne",complete:!0},{id:"95",file:"95.csv",name:"Val-d'Oise",complete:!0}];function ct(e){const t=String(e??"").trim().toUpperCase();return t?/^\d$/.test(t)?t.padStart(2,"0"):t:""}async function lt(){const e=["fede.csv",...Oe.map(r=>r.file)];return(await Promise.all(e.map(async r=>{const c=await it(`data/${r}`),s=r==="fede.csv",f=s?"fédération":"section",o=s?null:r.replace(".csv","");return c.map(l=>({...l,type:f,dep:o??ct(l.département)}))}))).flat()}const le=document.getElementById("title"),B=document.createElement("span");B.className="titre-texte";B.textContent="Les sections du PCF";const X=document.createElement("span");X.className="titre-badge";X.textContent="En construction";X.title="Carte en construction : les données sont en cours de vérification.";le.replaceChildren(B,X);function fe(){const e=window.getComputedStyle(le),t=Number.parseFloat(e.paddingLeft)+Number.parseFloat(e.paddingRight),r=Number.parseFloat(e.gap)||0,c=le.clientWidth-t-X.offsetWidth-r;let s=30;for(B.style.fontSize=s+"px";B.scrollWidth+2>c&&s>8;)s-=1,B.style.fontSize=s+"px"}fe();window.addEventListener("resize",fe);const he="https://framaforms.org/la-carte-du-pcf-1792163113";function ut(e){const t=new URL(he),r=String(e.nom??"").trim(),c=String(e.dep??"").trim();return r&&t.searchParams.set("structure",r),c&&t.searchParams.set("departement",c),t.toString()}const dt=document.getElementById("contribute"),Y=document.createElement("a");Y.href=he;Y.target="_blank";Y.rel="noopener noreferrer";const Q=document.createElement("img");Q.src="images/contribuez.svg";Q.alt="Contribuez";Q.style.height="40px";Q.style.width="auto";Y.appendChild(Q);dt.appendChild(Y);const pt=document.getElementById("adherez"),K=document.createElement("a");K.href="https://www.pcf.fr/adherer";K.target="_blank";K.rel="noopener noreferrer";const ee=document.createElement("img");ee.src="images/adherez.svg";ee.alt="Adhérez";ee.style.height="40px";ee.style.width="auto";K.appendChild(ee);pt.appendChild(K);const A=document.getElementById("menu"),ve=document.createElement("label"),H=document.createElement("input");H.type="radio";H.name="type-structure";H.value="sections";H.checked=!0;ve.appendChild(H);ve.append(" Sections");const ge=document.createElement("label"),P=document.createElement("input");P.type="radio";P.name="type-structure";P.value="federations";P.checked=!1;ge.appendChild(P);ge.append(" Fédérations");const be=document.createElement("div");be.className="menu-choix-type";be.append(ve,ge);A.append(be);const Ce=document.createElement("div");Ce.className="menu-entete-mobile";const Ee=document.createElement("span");Ee.className="menu-entete-mobile-titre";Ee.textContent="Filtres et recherche";const $=document.createElement("button");$.type="button";$.id="menu-fermer";$.className="menu-fermer";$.textContent="×";$.setAttribute("aria-label","Fermer le menu");Ce.append(Ee,$);A.prepend(Ce);const b=document.createElement("button");b.type="button";b.id="menu-toggle";b.className="menu-toggle";b.setAttribute("aria-controls","menu");b.setAttribute("aria-expanded","false");b.innerHTML=`
  <svg class="menu-toggle-icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <span>Filtres et recherche</span>
`;document.body.append(b);const mt=window.matchMedia("(max-width: 640px), (max-height: 480px)");function ft(){A.classList.add("est-ouvert"),b.hidden=!0,b.setAttribute("aria-expanded","true"),$.focus()}function U(e=!1){const t=A.classList.contains("est-ouvert");A.classList.remove("est-ouvert"),b.hidden=!1,b.setAttribute("aria-expanded","false"),ye(),e&&t&&b.focus()}b.addEventListener("click",ft);$.addEventListener("click",()=>U(!0));document.addEventListener("pointerdown",e=>{A.classList.contains("est-ouvert")&&(A.contains(e.target)||U())});document.addEventListener("keydown",e=>{e.key==="Escape"&&A.classList.contains("est-ouvert")&&U(!0)});mt.addEventListener("change",e=>{e.matches||(A.classList.remove("est-ouvert"),b.hidden=!1,b.setAttribute("aria-expanded","false"))});function V(){return P.checked?"federation":"section"}const x={section:{titre:"Les sections du PCF",placeholder:"Rechercher une section",liste:"Sections",vide:"Aucune section trouvée",proche:"Section la plus proche"},federation:{titre:"Les fédérations du PCF",placeholder:"Rechercher une fédération",liste:"Fédérations",vide:"Aucune fédération trouvée",proche:"Fédération la plus proche"}};function _e(){B.textContent=x[V()].titre,fe()}_e();const ht=[2.58,46.7],Pe=6,ze=4,vt=1365;function gt(e=window.innerWidth){const t=Pe+Math.log2(e/vt);return Math.max(ze,Math.min(Pe,t))}function Be(e=window.innerWidth){return{center:ht,zoom:gt(e)}}const $e=Be(),v=new J.Map({container:"map",attributionControl:!1,style:"https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/epure.json",center:$e.center,zoom:$e.zoom,minZoom:ze,maxZoom:12});v.on("style.load",()=>{v.getStyle().layers.forEach(({id:e})=>{const t=e.toLowerCase();(t.includes("routier")||t.includes("autoroute")||t.includes("nationale")||t.includes("toponyme")||t.includes("ferre"))&&v.setLayoutProperty(e,"visibility","none")})});const se="admin-express",te="departement-actif-contour",je=["limite admin - limite de département bandeau","limite admin - limite de département tiret","limite admin - limite de région bandeau","limite admin - limite de région tiret","limite etat 1","limite etat 2","limite etat conteste"];let Ue=new Map;function bt(){v.getSource(se)||(v.addSource(se,{type:"vector",url:"https://data.geopf.fr/tms/1.0.0/ADMIN_EXPRESS/metadata.json"}),v.addLayer({id:te,type:"line",source:se,"source-layer":"departement",layout:{visibility:"none","line-join":"round","line-cap":"round"},filter:["==",["get","code_insee"],""],paint:{"line-color":"#9ca3af","line-width":["interpolate",["linear"],["zoom"],5,1.5,8,2.5,12,4],"line-opacity":.95}}),Ue=new Map(je.filter(e=>v.getLayer(e)).map(e=>[e,v.getLayoutProperty(e,"visibility")??"visible"])),F&&ne(F))}function ne(e){v.getLayer(te)&&(v.setFilter(te,["==",["get","code_insee"],e??""]),v.setLayoutProperty(te,"visibility",e?"visible":"none"),je.forEach(t=>{v.getLayer(t)&&v.setLayoutProperty(t,"visibility",e?"none":Ue.get(t)??"visible")}))}const He=new J.NavigationControl;v.addControl(He,"top-right");He._container.style.marginTop="60px";let ae=null,F=null,j=()=>{},ue=null,W=null,ye=()=>{},_=null,Ve=()=>[],de=()=>{},pe=()=>{},me=()=>{},qe=()=>{};function Te(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}function Ct(e,t,r,c){const f=Math.PI/180,o=(r-e)*f,l=(c-t)*f,u=Math.sin(o/2)**2+Math.cos(e*f)*Math.cos(r*f)*Math.sin(l/2)**2;return 2*6371*Math.asin(Math.sqrt(u))}function Le(){_=null,W&&(W.value=""),ye()}function Et(){return ae||(ae=at("data/departement.geojson")),ae}function Ge(e,t){typeof t[0]=="number"?e.extend(t):t.forEach(r=>Ge(e,r))}function yt(){Le(),F=null,ne(null),j(),v.flyTo({...Be(v.getContainer().clientWidth),duration:1400})}async function Lt(e){const t=e.value;if(U(),!t){yt();return}Le(),j();try{const c=(await Et()).features.find(f=>f.properties.DEP===t);if(!c){console.warn(`Département ${t} introuvable dans le GeoJSON`);return}F=t,ne(t),j();const s=new J.LngLatBounds;Ge(s,c.geometry.coordinates),v.fitBounds(s,{padding:{top:90,bottom:50,left:50,right:50},maxZoom:10,duration:1400})}catch(r){console.error("Erreur lors du chargement des départements :",r)}}function At(){const e=document.createElement("div");e.id="recherche-structure",e.className="recherche-structure";const t=document.createElement("input");t.id="recherche-structure-input",t.type="search",t.placeholder=x.section.placeholder,t.autocomplete="off",t.spellcheck=!1,t.setAttribute("role","combobox"),t.setAttribute("aria-label",x.section.placeholder),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-haspopup","listbox"),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls","recherche-structure-liste"),t.title=x.section.placeholder;const r=document.createElement("ul");r.id="recherche-structure-liste",r.className="recherche-structure-liste",r.setAttribute("role","listbox"),r.setAttribute("aria-label",x.section.liste),r.hidden=!0;let c=[],s=-1;const f=()=>{r.hidden=!0,r.replaceChildren(),c=[],s=-1,t.setAttribute("aria-expanded","false"),t.removeAttribute("aria-activedescendant")},o=()=>{if(r.hidden)return;const i=r.getBoundingClientRect().top,n=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom"))||0,a=window.innerHeight-i-12-n;r.style.maxHeight=`${Math.max(48,Math.min(260,a))}px`};window.addEventListener("resize",o);const l=i=>{const n=r.querySelectorAll(".recherche-structure-option");n.length&&(s=(i+n.length)%n.length,n.forEach((a,p)=>{const m=p===s;a.classList.toggle("est-active",m),a.setAttribute("aria-selected",String(m))}),t.setAttribute("aria-activedescendant",n[s].id),n[s].scrollIntoView({block:"nearest"}))},u=i=>{i&&(t.value=i.nom,f(),de(i))},d=()=>{const i=t.value.trim();if(c=i?Ve(i):[],r.replaceChildren(),s=-1,t.removeAttribute("aria-activedescendant"),!i){f();return}if(!c.length){const n=document.createElement("li");n.className="recherche-structure-vide",n.textContent=x[V()].vide,r.appendChild(n),r.hidden=!1,t.setAttribute("aria-expanded","true"),o();return}c.forEach((n,a)=>{const p=document.createElement("li");p.id=`recherche-structure-option-${a}`,p.className="recherche-structure-option",p.dataset.index=String(a),p.setAttribute("role","option"),p.setAttribute("aria-selected","false");const m=document.createElement("span");m.className="recherche-structure-nom",m.textContent=n.nom;const h=document.createElement("span");h.className="recherche-structure-meta",h.textContent=`${n.estFederation?"Fédération":"Section"} · ${n.dep}`,p.append(m,h),r.appendChild(p)}),r.hidden=!1,t.setAttribute("aria-expanded","true"),o()};return t.addEventListener("input",()=>{pe(),d()}),t.addEventListener("search",()=>{pe(),d()}),t.addEventListener("focus",()=>{t.value.trim()&&d()}),t.addEventListener("blur",()=>{window.setTimeout(f,160)}),t.addEventListener("keydown",i=>{i.key==="ArrowDown"?(i.preventDefault(),l(s+1)):i.key==="ArrowUp"?(i.preventDefault(),l(s-1)):i.key==="Enter"?(i.preventDefault(),c.length&&u(c[s>=0?s:0])):i.key==="Escape"&&(i.preventDefault(),f())}),r.addEventListener("mousedown",i=>{i.target.closest(".recherche-structure-option")&&i.preventDefault()}),r.addEventListener("click",i=>{const n=i.target.closest(".recherche-structure-option");n&&u(c[Number(n.dataset.index)])}),e.append(t,r),W=t,ye=f,me=()=>{const i=x[V()];t.placeholder=i.placeholder,t.title=i.placeholder,t.setAttribute("aria-label",i.placeholder),r.setAttribute("aria-label",i.liste)},me(),e}const w=document.createElement("select");w.id="flyto-departement";w.setAttribute("aria-label","Choisir un département ou revenir à la vue globale");w.title="Choisir un département ou revenir à la vue globale";const Ae=document.createElement("option");Ae.value="";Ae.textContent="France entière";w.appendChild(Ae);Oe.filter(e=>e.complete).forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.name} (${e.id})`,w.appendChild(t)});w.addEventListener("change",()=>Lt(w));ue=w;const Ze=document.createElement("div");Ze.className="menu-separateur";A.append(Ze,w,At());const L=document.createElement("button");L.type="button";L.id="structure-proche";L.className="menu-bouton";L.innerHTML=`
  <svg class="menu-bouton-icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="currentColor"/>
  </svg>
  <span class="menu-bouton-texte"></span>
`;L.title="Utiliser ma position pour trouver la structure la plus proche";L.addEventListener("click",()=>qe());const S=document.createElement("p");S.id="structure-proche-statut";S.className="menu-statut";S.setAttribute("role","status");S.setAttribute("aria-live","polite");S.hidden=!0;A.append(L,S);function z(e,t=!1){S.textContent=e,S.hidden=!e,S.classList.toggle("est-erreur",t)}function Je(){const e=x[V()];L.querySelector(".menu-bouton-texte").textContent=e.proche,L.setAttribute("aria-label",`${e.proche} (utilise votre position)`)}Je();function We(){Le(),_e(),me(),Je(),z(""),j()}H.addEventListener("change",We);P.addEventListener("change",We);const T=document.createElement("button");T.type="button";T.id="a-propos-ctrl";T.textContent="i";T.title="À propos de cette carte";T.setAttribute("aria-label","À propos de cette carte");T.setAttribute("aria-haspopup","dialog");document.body.append(T);const y=document.createElement("dialog");y.id="a-propos";y.className="a-propos";y.setAttribute("aria-labelledby","a-propos-titre");y.innerHTML=`
  <header class="a-propos-entete">
    <h2 id="a-propos-titre">À propos de cette carte</h2>
    <button
      type="button"
      class="a-propos-fermer"
      aria-label="Fermer le panneau"
    >×</button>
  </header>

  <div class="a-propos-corps">
    <p class="a-propos-intro">
      Projet non officiel de cartographie des sections et fédérations
      du Parti communiste français. Ce travail est en cours d'élaborartion et les données sont en cours de vérification. N'hésitez pas à signaler toute erreur ou omission via le formulaire de contribution.
    </p>

    <section>
      <h3>Qu’est-ce qu’une section ?</h3>
      <p>
        La <strong>section</strong> est la structure de base du Parti communiste
        français (PCF). Elle rassemble les adhérent·es d’un même territoire ou
        d’un même lieu de travail. Son périmètre peut correspondre à une ou
        plusieurs communes, à un ou plusieurs quartiers ou arrondissements, à
        une zone d’activité ou à une entreprise. Elle organise la vie militante
        locale, permet aux adhérent·es de se retrouver et de mener collectivement
        des actions politiques.
      </p>
    </section>

    <section>
      <h3>Qu’est-ce qu’une fédération ?</h3>
      <p>
        La <strong>fédération</strong> est la structure du PCF à l’échelle d’un
        département. Elle regroupe et coordonne les sections de son territoire.
        Elle anime la vie politique et militante départementale, contribue à la
        mise en œuvre des orientations du Parti et organise les campagnes et
        initiatives communes.
      </p>
    </section>

    <section>
      <h3>Méthodologie</h3>
      <p>
        Ce projet recense les sections et les fédérations du Parti
        communiste français (PCF). La cartographie s’appuie sur des données
        internes au PCF, complétées par des contributions et des informations
        collectées sur le Web, notamment sur les réseaux sociaux. Sur la carte,
        chaque épingle représente une section ou une fédération. La localisation
        des sections est approximative et ne correspond pas nécessairement à une
        adresse postale réelle. Aucune donnée personnelle n’est publiée. Seules
        les coordonnées génériques des structures (adresses électroniques et
        comptes sur les réseaux sociaux) sont renseignées lorsqu’elles sont
        disponibles.
      </p>
    </section>

    <section class="a-propos-suivi">
      <h3>Etape de vérification</h3>
      <p>
        La carte agrège des données d'origines diverses, qui peuvent être hétérogènes ou parfois obsolètes. La vie des organisations évolue : des sections se créent, d'autres disparaissent ou fusionnent. Une étape de vérification auprès des différentes fédérations est donc nécessaire pour confirmer l'existence effective des sections et garantir la fiabilité de la carte. Cette vérification est croisée avec la liste de toutes les sections à jour, figurant dans les annexes au dépôt des comptes d'ensemble du PCF sur le site de la CNCCFP (au 31 décembre 2025).
      </p>
      <p id="a-propos-suivi-resume" class="a-propos-suivi-resume">
        Chargement de l’état de vérification…
      </p>
      <ul
        id="a-propos-suivi-liste"
        class="a-propos-suivi-liste"
        aria-label="État de vérification des sections par département"
      >
        <li class="a-propos-suivi-chargement">Chargement…</li>
      </ul>
    </section>

    <section>
      <h3>Comment contribuer ?</h3>
      <p>
        Pour ajouter une information ou signaler une erreur, vous pouvez utiliser
        l’un des moyens suivants :
      </p>
      <ul class="a-propos-liens">
        <li>
          <a href="${he}" target="_blank" rel="noopener noreferrer">
            Utiliser le formulaire de contribution
          </a>
        </li>
        <li>
          <a href="https://github.com/neocarto/sectionspcf/issues" target="_blank" rel="noopener noreferrer">
            Ouvrir une issue sur GitHub
          </a>
        </li>
      </ul>
    </section>

    <section class="a-propos-credits">
      <h3>Crédits</h3>
      <p>Nicolas Lambert, 2026<br/>
        Données : PCF & contributions.<br/>
        Fond de carte : © IGN.</p>
    </section>
  </div>
`;document.body.append(y);T.addEventListener("click",()=>{U(),y.showModal()});y.querySelector(".a-propos-fermer").addEventListener("click",()=>y.close());y.addEventListener("click",e=>{e.target===y&&y.close()});const St=y.querySelector("#a-propos-suivi-liste"),wt=y.querySelector("#a-propos-suivi-resume");function Nt(e){return String(e??"").trim().toLowerCase().replace(/^\[|\]$/g,"").trim()}function Ie(e){return Nt(e)==="ok"}function Re(e){if(e==="2A")return 20.1;if(e==="2B")return 20.2;const t=Number.parseInt(e,10);return Number.isFinite(t)?t:Number.MAX_SAFE_INTEGER}function ce(e){const t=String(e.nom??"").trim();return t.replace(/^fédér\S*\s+/i,"").replace(/^(de\s+la\s+|de\s+l[’']|du\s+|des\s+|de\s+|d[’'])/i,"").trim()||t}function kt(e){const t=new Map;e.forEach(l=>{var a;if(((a=l.type)==null?void 0:a.trim().toLowerCase())!=="fédération")return;const u=String(l.dep??"").trim();if(!u)return;const d=Ie(l.check_fede),i=Ie(l.check_CNCCFP),n=t.get(u);n?(n.checkFede=n.checkFede||d,n.checkCNCCFP=n.checkCNCCFP||i,!n.nom&&ce(l)&&(n.nom=ce(l))):t.set(u,{dep:u,nom:ce(l),checkFede:d,checkCNCCFP:i})});const r=[...t.values()].sort((l,u)=>Re(l.dep)-Re(u.dep)),c=r.length,s=r.filter(l=>l.checkFede).length,f=r.filter(l=>l.checkCNCCFP).length;wt.textContent=`Fédération : ${s}/${c} · CNCCFP : ${f}/${c}.`;const o=document.createDocumentFragment();r.forEach(({dep:l,nom:u,checkFede:d,checkCNCCFP:i})=>{const n=document.createElement("li");n.className="a-propos-suivi-ligne";const a=document.createElement("span");a.className="a-propos-suivi-dep",a.textContent=l;const p=document.createElement("span");p.className="a-propos-suivi-nom",p.textContent=u;const m=document.createElement("span");m.className=`a-propos-suivi-statut${d?" est-verifie":""}`,m.textContent="Fédé";const h=document.createElement("span");h.className=`a-propos-suivi-statut${i?" est-verifie":""}`,h.textContent="CNCCFP",n.append(a,p,m,h),o.append(n)}),St.replaceChildren(o)}v.on("load",()=>{bt()});v.on("load",async()=>{const e=await lt();kt(e);let t=null;const r=[],c=[],s=new Map;e.forEach(o=>{var d;if(((d=o.type)==null?void 0:d.trim().toLowerCase())!=="fédération")return;const l=String(o.dep??"").trim(),u=String(o.email??"").trim();l&&u&&s.set(l,u)}),e.forEach(o=>{var G,I,R,D,k,Se,we,Ne,ke,Me;const l=Number(o.latitude),u=Number(o.longitude);if(!Number.isFinite(l)||!Number.isFinite(u)||((G=o.latitude)==null?void 0:G.trim())===""||((I=o.longitude)==null?void 0:I.trim())==="")return;const d=(R=o.type)==null?void 0:R.trim().toLowerCase(),i=d==="fédération",n=d==="section";if(!i&&!n)return;const a=document.createElement("img");a.src="images/section.svg",a.alt=o.nom||(i?"Fédération":"Section"),a.classList.add("pin"),a.style.width="30px",a.style.height="30px",a.style.display="block",a.style.cursor="pointer";const p=c.filter(({key:O})=>{var M;return(M=o[O])==null?void 0:M.trim()}).map(({key:O,label:M})=>`${M} : ${o[O]}`),m=String(o.dep??"").trim(),h=String(o.email??"").trim(),C=n?s.get(m)??"":"",g=ut(o),q=`
  <strong class="popup-nom">${o.nom||""}${m?` <span class="popup-dep">(${m})</span>`:""}</strong>

  <div class="popup-infos">
    ${(D=o.website)!=null&&D.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/url.png" alt="">
             <a href="${o.website}" target="_blank" rel="noopener noreferrer">${o.website}</a>
           </div>`:""}
${h?`<div class="popup-ligne">
         <img class="popup-icone" src="images/email.png" alt="">
         <a href="mailto:${h}">${h}</a>
       </div>`:""}
${C&&C!==h?`<div class="popup-ligne">
         <img class="popup-icone" src="images/email.png" alt="">
         <a href="mailto:${C}">${C}</a>
         <span class="popup-libelle">(fédé)</span>
       </div>`:""}
        ${(k=o.facebook)!=null&&k.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/facebook.png" alt="">
             <a href="https://www.facebook.com/${o.facebook}" target="_blank" rel="noopener noreferrer">${o.facebook}</a>
           </div>`:""}
        ${(Se=o.twitter)!=null&&Se.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/x.png" alt="">
             <a href="https://x.com//${o.twitter}" target="_blank" rel="noopener noreferrer">${o.twitter}</a>
           </div>`:""}
    ${(we=o.bluesky)!=null&&we.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/bluesky.avif" alt="">
             <a href="https://bsky.app/profile/${o.bluesky}" target="_blank" rel="noopener noreferrer">${o.bluesky}</a>
           </div>`:""}

    ${(Ne=o.instagram)!=null&&Ne.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/insta.png" alt="">
             <a href="https://www.instagram.com/${o.instagram}" target="_blank" rel="noopener noreferrer">${o.instagram}</a>
           </div>`:""}

        ${(ke=o.tiktok)!=null&&ke.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/tiktok.jpeg" alt="">
             <a href="https://www.tiktok.com/@${o.tiktok}" target="_blank" rel="noopener noreferrer">${o.tiktok}</a>
           </div>`:""}
          ${(Me=o.youtube)!=null&&Me.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/youtube.jpeg" alt="">
             <a href="https://www.youtube.com/@${o.youtube}" target="_blank" rel="noopener noreferrer">${o.youtube}</a>
           </div>`:""}
    ${p.length?p.map(O=>`<div class="popup-ligne">${O}</div>`).join(""):""}
  </div>

  <div class="popup-contribution">
    <p class="popup-contribution-texte">
      ${i?"Vous militez dans cette fédération ?":"Vous militez dans cette section ?"}
    </p>
    <a
      class="popup-contribuer"
      href="${g}"
      target="_blank"
      rel="noopener noreferrer"
      title="Corriger ou ajouter des informations sur cette structure (nouvel onglet)"
    >
      Corrigez ou ajoutez des infos<br/>(réseau social, site web, etc.)
    </a>
  </div>
`,N=new J.Marker({element:a,anchor:"bottom"}).setLngLat([u,l]).addTo(v);r.push({marker:N,estFederation:i,estSection:n,dep:o.dep,nom:String(o.nom??"").trim(),longitude:u,latitude:l}),a.addEventListener("click",O=>{O.stopPropagation(),U(),t&&(t.remove(),t=null);const M=new J.Popup({offset:12,closeButton:!0,closeOnClick:!1,focusAfterOpen:!1}).setLngLat([u,l]).setHTML(q).addTo(v);t=M,M.on("close",()=>{t===M&&(t=null)})})}),Ve=o=>{const l=Te(o);if(!l)return[];const u=V()==="federation";return r.filter(d=>u?d.estFederation:d.estSection).map(d=>{const i=Te(d.nom),n=i.indexOf(l);return{structure:d,nom:i,position:n}}).filter(({position:d})=>d!==-1).sort((d,i)=>{const n=d.position===0?0:1,a=i.position===0?0:1;return n-a||d.position-i.position||d.nom.localeCompare(i.nom,"fr")}).slice(0,8).map(({structure:d})=>d)},de=o=>{o&&(U(),_=o.marker,F=null,ue&&(ue.selectedIndex=-1),ne(null),t&&(t.remove(),t=null),j(),v.flyTo({center:[o.longitude,o.latitude],zoom:11,duration:1200}))},pe=()=>{_&&(_=null,j())},qe=()=>{const o=V()==="federation",l=r.filter(u=>o?u.estFederation:u.estSection);if(!l.length){z("Aucune structure disponible.",!0);return}if(!navigator.geolocation){z("La géolocalisation n'est pas disponible dans ce navigateur.",!0);return}L.disabled=!0,z("Localisation en cours…"),navigator.geolocation.getCurrentPosition(u=>{L.disabled=!1;const{latitude:d,longitude:i}=u.coords;let n=null,a=1/0;if(l.forEach(p=>{const m=Ct(d,i,p.latitude,p.longitude);m<a&&(a=m,n=p)}),!n){z("Aucune structure n'a pu être trouvée.",!0);return}W&&(W.value=n.nom),de(n),z("")},u=>{L.disabled=!1,z({1:"Localisation refusée. Autorisez l'accès à votre position dans le navigateur.",2:"Votre position n'a pas pu être déterminée.",3:"La localisation a expiré. Réessayez."}[u.code]??"La localisation a échoué. Réessayez.",!0)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4})};function f(){const o=H.checked,l=P.checked;if(r.forEach(({marker:u,estFederation:d,estSection:i,dep:n})=>{const a=!!_,p=a&&u===_,m=p||i&&o||d&&l,h=a&&!p,C=!p&&!!F&&n!==F,g=u.getElement();g.style.display=m?"block":"none",g.classList.toggle("pin-hors-selection",h),g.classList.toggle("pin-selectionnee",p),g.classList.toggle("pin-hors-departement",C),g.classList.toggle("pin-actif-departement",!!F&&!C)}),t){const u=t.getLngLat();r.some(({marker:i,estFederation:n,estSection:a})=>{const p=i.getLngLat();return(i===_||a&&o||n&&l)&&p.lng===u.lng&&p.lat===u.lat})||(t.remove(),t=null)}}j=f,f()});
