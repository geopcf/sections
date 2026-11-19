import{m as J}from"./maplibre-GFcYF3F4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const n of u.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function c(s){if(s.ep)return;s.ep=!0;const u=o(s);fetch(s.href,u)}})();var Ne={},re={},oe=34,Z=10,ie=13;function Re(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function We(e,t){var o=Re(e);return function(c,s){return t(o(c),s,e)}}function Fe(e){var t=Object.create(null),o=[];return e.forEach(function(c){for(var s in c)s in t||o.push(t[s]=s)}),o}function E(e,t){var o=e+"",c=o.length;return c<t?new Array(t-c+1).join(0)+o:o}function Xe(e){return e<0?"-"+E(-e,6):e>9999?"+"+E(e,6):E(e,4)}function Ye(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),c=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Xe(e.getUTCFullYear())+"-"+E(e.getUTCMonth()+1,2)+"-"+E(e.getUTCDate(),2)+(s?"T"+E(t,2)+":"+E(o,2)+":"+E(c,2)+"."+E(s,3)+"Z":c?"T"+E(t,2)+":"+E(o,2)+":"+E(c,2)+"Z":o||t?"T"+E(t,2)+":"+E(o,2)+"Z":"")}function Qe(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function c(r,a){var m,f,h=s(r,function(y,g){if(m)return m(y,g-1);f=y,m=a?We(y,a):Re(y)});return h.columns=f||[],h}function s(r,a){var m=[],f=r.length,h=0,y=0,g,q=f<=0,M=!1;r.charCodeAt(f-1)===Z&&--f,r.charCodeAt(f-1)===ie&&--f;function G(){if(q)return re;if(M)return M=!1,Ne;var R,D=h,x;if(r.charCodeAt(D)===oe){for(;h++<f&&r.charCodeAt(h)!==oe||r.charCodeAt(++h)===oe;);return(R=h)>=f?q=!0:(x=r.charCodeAt(h++))===Z?M=!0:x===ie&&(M=!0,r.charCodeAt(h)===Z&&++h),r.slice(D+1,R-1).replace(/""/g,'"')}for(;h<f;){if((x=r.charCodeAt(R=h++))===Z)M=!0;else if(x===ie)M=!0,r.charCodeAt(h)===Z&&++h;else if(x!==o)continue;return r.slice(D,R)}return q=!0,r.slice(D,f)}for(;(g=G())!==re;){for(var I=[];g!==Ne&&g!==re;)I.push(g),g=G();a&&(I=a(I,y++))==null||m.push(I)}return m}function u(r,a){return r.map(function(m){return a.map(function(f){return i(m[f])}).join(e)})}function n(r,a){return a==null&&(a=Fe(r)),[a.map(i).join(e)].concat(u(r,a)).join(`
`)}function d(r,a){return a==null&&(a=Fe(r)),u(r,a).join(`
`)}function p(r){return r.map(l).join(`
`)}function l(r){return r.map(i).join(e)}function i(r){return r==null?"":r instanceof Date?Ye(r):t.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:c,parseRows:s,format:n,formatBody:d,formatRows:p,formatRow:l,formatValue:i}}var Ke=Qe(","),et=Ke.parse;function tt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function nt(e,t){return fetch(e,t).then(tt)}function rt(e){return function(t,o,c){return arguments.length===2&&typeof o=="function"&&(c=o,o=void 0),nt(t,o).then(function(s){return e(s,c)})}}var ot=rt(et);function it(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);if(!(e.status===204||e.status===205))return e.json()}function st(e,t){return fetch(e,t).then(it)}const De=[{id:"01",file:"01.csv",name:"Ain",complete:!0},{id:"02",file:"02.csv",name:"Aisne",complete:!0},{id:"03",file:"03.csv",name:"Allier",complete:!0},{id:"04",file:"04.csv",name:"Alpes-de-Haute-Provence",complete:!0},{id:"05",file:"05.csv",name:"Hautes-Alpes",complete:!0},{id:"06",file:"06.csv",name:"Alpes-Maritimes",complete:!0},{id:"07",file:"07.csv",name:"Ardèche",complete:!0},{id:"08",file:"08.csv",name:"Ardennes",complete:!0},{id:"09",file:"09.csv",name:"Ariège",complete:!0},{id:"10",file:"10.csv",name:"Aube",complete:!0},{id:"11",file:"11.csv",name:"Aude",complete:!0},{id:"12",file:"12.csv",name:"Aveyron",complete:!0},{id:"13",file:"13.csv",name:"Bouches-du-Rhône",complete:!0},{id:"14",file:"14.csv",name:"Calvados",complete:!0},{id:"15",file:"15.csv",name:"Cantal",complete:!0},{id:"16",file:"16.csv",name:"Charente",complete:!0},{id:"17",file:"17.csv",name:"Charente-Maritime",complete:!0},{id:"18",file:"18.csv",name:"Cher",complete:!0},{id:"19",file:"19.csv",name:"Corrèze",complete:!0},{id:"2A",file:"2A.csv",name:"Corse-du-Sud",complete:!0},{id:"2B",file:"2B.csv",name:"Haute-Corse",complete:!0},{id:"21",file:"21.csv",name:"Côte-d'Or",complete:!0},{id:"22",file:"22.csv",name:"Côtes-d'Armor",complete:!0},{id:"23",file:"23.csv",name:"Creuse",complete:!0},{id:"24",file:"24.csv",name:"Dordogne",complete:!0},{id:"25",file:"25.csv",name:"Doubs",complete:!0},{id:"26",file:"26.csv",name:"Drôme",complete:!0},{id:"27",file:"27.csv",name:"Eure",complete:!0},{id:"28",file:"28.csv",name:"Eure-et-Loir",complete:!0},{id:"29",file:"29.csv",name:"Finistère",complete:!0},{id:"30",file:"30.csv",name:"Gard",complete:!0},{id:"31",file:"31.csv",name:"Haute-Garonne",complete:!0},{id:"32",file:"32.csv",name:"Gers",complete:!0},{id:"33",file:"33.csv",name:"Gironde",complete:!0},{id:"34",file:"34.csv",name:"Hérault",complete:!0},{id:"35",file:"35.csv",name:"Ille-et-Vilaine",complete:!0},{id:"36",file:"36.csv",name:"Indre",complete:!0},{id:"37",file:"37.csv",name:"Indre-et-Loire",complete:!0},{id:"38",file:"38.csv",name:"Isère",complete:!0},{id:"39",file:"39.csv",name:"Jura",complete:!0},{id:"40",file:"40.csv",name:"Landes",complete:!0},{id:"41",file:"41.csv",name:"Loir-et-Cher",complete:!0},{id:"42",file:"42.csv",name:"Loire",complete:!0},{id:"43",file:"43.csv",name:"Haute-Loire",complete:!0},{id:"44",file:"44.csv",name:"Loire-Atlantique",complete:!0},{id:"45",file:"45.csv",name:"Loiret",complete:!0},{id:"46",file:"46.csv",name:"Lot",complete:!0},{id:"47",file:"47.csv",name:"Lot-et-Garonne",complete:!0},{id:"48",file:"48.csv",name:"Lozère",complete:!0},{id:"49",file:"49.csv",name:"Maine-et-Loire",complete:!0},{id:"50",file:"50.csv",name:"Manche",complete:!0},{id:"51",file:"51.csv",name:"Marne",complete:!0},{id:"52",file:"52.csv",name:"Haute-Marne",complete:!0},{id:"53",file:"53.csv",name:"Mayenne",complete:!0},{id:"54",file:"54.csv",name:"Meurthe-et-Moselle",complete:!0},{id:"55",file:"55.csv",name:"Meuse",complete:!0},{id:"56",file:"56.csv",name:"Morbihan",complete:!0},{id:"57",file:"57.csv",name:"Moselle",complete:!0},{id:"58",file:"58.csv",name:"Nièvre",complete:!0},{id:"59",file:"59.csv",name:"Nord",complete:!0},{id:"60",file:"60.csv",name:"Oise",complete:!0},{id:"61",file:"61.csv",name:"Orne",complete:!0},{id:"62",file:"62.csv",name:"Pas-de-Calais",complete:!0},{id:"63",file:"63.csv",name:"Puy-de-Dôme",complete:!0},{id:"64",file:"64.csv",name:"Pyrénées-Atlantiques",complete:!0},{id:"65",file:"65.csv",name:"Hautes-Pyrénées",complete:!0},{id:"66",file:"66.csv",name:"Pyrénées-Orientales",complete:!0},{id:"67",file:"67.csv",name:"Bas-Rhin",complete:!0},{id:"68",file:"68.csv",name:"Haut-Rhin",complete:!0},{id:"69",file:"69.csv",name:"Rhône",complete:!0},{id:"70",file:"70.csv",name:"Haute-Saône",complete:!0},{id:"71",file:"71.csv",name:"Saône-et-Loire",complete:!0},{id:"72",file:"72.csv",name:"Sarthe",complete:!0},{id:"73",file:"73.csv",name:"Savoie",complete:!0},{id:"74",file:"74.csv",name:"Haute-Savoie",complete:!0},{id:"75",file:"75.csv",name:"Paris",complete:!0},{id:"76",file:"76.csv",name:"Seine-Maritime",complete:!0},{id:"77",file:"77.csv",name:"Seine-et-Marne",complete:!0},{id:"78",file:"78.csv",name:"Yvelines",complete:!0},{id:"79",file:"79.csv",name:"Deux-Sèvres",complete:!0},{id:"80",file:"80.csv",name:"Somme",complete:!0},{id:"81",file:"81.csv",name:"Tarn",complete:!0},{id:"82",file:"82.csv",name:"Tarn-et-Garonne",complete:!0},{id:"83",file:"83.csv",name:"Var",complete:!0},{id:"84",file:"84.csv",name:"Vaucluse",complete:!0},{id:"85",file:"85.csv",name:"Vendée",complete:!0},{id:"86",file:"86.csv",name:"Vienne",complete:!0},{id:"87",file:"87.csv",name:"Haute-Vienne",complete:!0},{id:"88",file:"88.csv",name:"Vosges",complete:!0},{id:"89",file:"89.csv",name:"Yonne",complete:!0},{id:"90",file:"90.csv",name:"Territoire de Belfort",complete:!0},{id:"91",file:"91.csv",name:"Essonne",complete:!0},{id:"92",file:"92.csv",name:"Hauts-de-Seine",complete:!0},{id:"93",file:"93.csv",name:"Seine-Saint-Denis",complete:!0},{id:"94",file:"94.csv",name:"Val-de-Marne",complete:!0},{id:"95",file:"95.csv",name:"Val-d'Oise",complete:!0}];function at(e){const t=String(e??"").trim().toUpperCase();return t?/^\d$/.test(t)?t.padStart(2,"0"):t:""}async function ct(){const e=["fede.csv",...De.map(o=>o.file)];return(await Promise.all(e.map(async o=>{const c=await ot(`data/${o}`),s=o==="fede.csv",u=s?"fédération":"section",n=s?null:o.replace(".csv","");return c.map(d=>({...d,type:u,dep:n??at(d.département)}))}))).flat()}const le=document.getElementById("title"),B=document.createElement("span");B.className="titre-texte";B.textContent="Les sections du PCF";const X=document.createElement("span");X.className="titre-badge";X.textContent="En construction";X.title="Carte en construction : les données sont en cours de vérification.";le.replaceChildren(B,X);function fe(){const e=window.getComputedStyle(le),t=Number.parseFloat(e.paddingLeft)+Number.parseFloat(e.paddingRight),o=Number.parseFloat(e.gap)||0,c=le.clientWidth-t-X.offsetWidth-o;let s=30;for(B.style.fontSize=s+"px";B.scrollWidth+2>c&&s>8;)s-=1,B.style.fontSize=s+"px"}fe();window.addEventListener("resize",fe);const he="https://framaforms.org/la-carte-du-pcf-1792163113";function lt(e){const t=new URL(he),o=String(e.nom??"").trim(),c=String(e.dep??"").trim();return o&&t.searchParams.set("structure",o),c&&t.searchParams.set("departement",c),t.toString()}const ut=document.getElementById("contribute"),Y=document.createElement("a");Y.href=he;Y.target="_blank";Y.rel="noopener noreferrer";const Q=document.createElement("img");Q.src="images/contribuez.svg";Q.alt="Contribuez";Q.style.height="40px";Q.style.width="auto";Y.appendChild(Q);ut.appendChild(Y);const dt=document.getElementById("adherez"),K=document.createElement("a");K.href="https://www.pcf.fr/adherer";K.target="_blank";K.rel="noopener noreferrer";const ee=document.createElement("img");ee.src="images/adherez.svg";ee.alt="Adhérez";ee.style.height="40px";ee.style.width="auto";K.appendChild(ee);dt.appendChild(K);const A=document.getElementById("menu"),ve=document.createElement("label"),H=document.createElement("input");H.type="radio";H.name="type-structure";H.value="sections";H.checked=!0;ve.appendChild(H);ve.append(" Sections");const ge=document.createElement("label"),P=document.createElement("input");P.type="radio";P.name="type-structure";P.value="federations";P.checked=!1;ge.appendChild(P);ge.append(" Fédérations");const be=document.createElement("div");be.className="menu-choix-type";be.append(ve,ge);A.append(be);const ye=document.createElement("div");ye.className="menu-entete-mobile";const Ee=document.createElement("span");Ee.className="menu-entete-mobile-titre";Ee.textContent="Filtres et recherche";const T=document.createElement("button");T.type="button";T.id="menu-fermer";T.className="menu-fermer";T.textContent="×";T.setAttribute("aria-label","Fermer le menu");ye.append(Ee,T);A.prepend(ye);const b=document.createElement("button");b.type="button";b.id="menu-toggle";b.className="menu-toggle";b.setAttribute("aria-controls","menu");b.setAttribute("aria-expanded","false");b.innerHTML=`
  <svg class="menu-toggle-icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <span>Filtres et recherche</span>
`;document.body.append(b);const pt=window.matchMedia("(max-width: 640px), (max-height: 480px)");function mt(){A.classList.add("est-ouvert"),b.hidden=!0,b.setAttribute("aria-expanded","true"),T.focus()}function U(e=!1){const t=A.classList.contains("est-ouvert");A.classList.remove("est-ouvert"),b.hidden=!1,b.setAttribute("aria-expanded","false"),Le(),e&&t&&b.focus()}b.addEventListener("click",mt);T.addEventListener("click",()=>U(!0));document.addEventListener("pointerdown",e=>{A.classList.contains("est-ouvert")&&(A.contains(e.target)||U())});document.addEventListener("keydown",e=>{e.key==="Escape"&&A.classList.contains("est-ouvert")&&U(!0)});pt.addEventListener("change",e=>{e.matches||(A.classList.remove("est-ouvert"),b.hidden=!1,b.setAttribute("aria-expanded","false"))});function V(){return P.checked?"federation":"section"}const N={section:{titre:"Les sections du PCF",placeholder:"Rechercher une section",liste:"Sections",vide:"Aucune section trouvée",proche:"Section la plus proche"},federation:{titre:"Les fédérations du PCF",placeholder:"Rechercher une fédération",liste:"Fédérations",vide:"Aucune fédération trouvée",proche:"Fédération la plus proche"}};function Oe(){B.textContent=N[V()].titre,fe()}Oe();const ft=[2.58,46.7],Pe=6,_e=4,ht=1365;function vt(e=window.innerWidth){const t=Pe+Math.log2(e/ht);return Math.max(_e,Math.min(Pe,t))}function ze(e=window.innerWidth){return{center:ft,zoom:vt(e)}}const Te=ze(),v=new J.Map({container:"map",attributionControl:!1,style:"https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/epure.json",center:Te.center,zoom:Te.zoom,minZoom:_e,maxZoom:12});v.on("style.load",()=>{v.getStyle().layers.forEach(({id:e})=>{const t=e.toLowerCase();(t.includes("routier")||t.includes("autoroute")||t.includes("nationale")||t.includes("toponyme")||t.includes("ferre"))&&v.setLayoutProperty(e,"visibility","none")})});const se="admin-express",te="departement-actif-contour",Be=["limite admin - limite de département bandeau","limite admin - limite de département tiret","limite admin - limite de région bandeau","limite admin - limite de région tiret","limite etat 1","limite etat 2","limite etat conteste"];let je=new Map;function gt(){v.getSource(se)||(v.addSource(se,{type:"vector",url:"https://data.geopf.fr/tms/1.0.0/ADMIN_EXPRESS/metadata.json"}),v.addLayer({id:te,type:"line",source:se,"source-layer":"departement",layout:{visibility:"none","line-join":"round","line-cap":"round"},filter:["==",["get","code_insee"],""],paint:{"line-color":"#9ca3af","line-width":["interpolate",["linear"],["zoom"],5,1.5,8,2.5,12,4],"line-opacity":.95}}),je=new Map(Be.filter(e=>v.getLayer(e)).map(e=>[e,v.getLayoutProperty(e,"visibility")??"visible"])),F&&ne(F))}function ne(e){v.getLayer(te)&&(v.setFilter(te,["==",["get","code_insee"],e??""]),v.setLayoutProperty(te,"visibility",e?"visible":"none"),Be.forEach(t=>{v.getLayer(t)&&v.setLayoutProperty(t,"visibility",e?"none":je.get(t)??"visible")}))}const Ue=new J.NavigationControl;v.addControl(Ue,"top-right");Ue._container.style.marginTop="60px";let ae=null,F=null,j=()=>{},ue=null,W=null,Le=()=>{},_=null,He=()=>[],de=()=>{},pe=()=>{},me=()=>{},Ve=()=>{};function $e(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}function bt(e,t,o,c){const u=Math.PI/180,n=(o-e)*u,d=(c-t)*u,p=Math.sin(n/2)**2+Math.cos(e*u)*Math.cos(o*u)*Math.sin(d/2)**2;return 2*6371*Math.asin(Math.sqrt(p))}function Ce(){_=null,W&&(W.value=""),Le()}function yt(){return ae||(ae=st("data/departement.geojson")),ae}function qe(e,t){typeof t[0]=="number"?e.extend(t):t.forEach(o=>qe(e,o))}function Et(){Ce(),F=null,ne(null),j(),v.flyTo({...ze(v.getContainer().clientWidth),duration:1400})}async function Lt(e){const t=e.value;if(U(),!t){Et();return}Ce(),j();try{const c=(await yt()).features.find(u=>u.properties.DEP===t);if(!c){console.warn(`Département ${t} introuvable dans le GeoJSON`);return}F=t,ne(t),j();const s=new J.LngLatBounds;qe(s,c.geometry.coordinates),v.fitBounds(s,{padding:{top:90,bottom:50,left:50,right:50},maxZoom:10,duration:1400})}catch(o){console.error("Erreur lors du chargement des départements :",o)}}function Ct(){const e=document.createElement("div");e.id="recherche-structure",e.className="recherche-structure";const t=document.createElement("input");t.id="recherche-structure-input",t.type="search",t.placeholder=N.section.placeholder,t.autocomplete="off",t.spellcheck=!1,t.setAttribute("role","combobox"),t.setAttribute("aria-label",N.section.placeholder),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-haspopup","listbox"),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls","recherche-structure-liste"),t.title=N.section.placeholder;const o=document.createElement("ul");o.id="recherche-structure-liste",o.className="recherche-structure-liste",o.setAttribute("role","listbox"),o.setAttribute("aria-label",N.section.liste),o.hidden=!0;let c=[],s=-1;const u=()=>{o.hidden=!0,o.replaceChildren(),c=[],s=-1,t.setAttribute("aria-expanded","false"),t.removeAttribute("aria-activedescendant")},n=()=>{if(o.hidden)return;const i=o.getBoundingClientRect().top,r=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom"))||0,a=window.innerHeight-i-12-r;o.style.maxHeight=`${Math.max(48,Math.min(260,a))}px`};window.addEventListener("resize",n);const d=i=>{const r=o.querySelectorAll(".recherche-structure-option");r.length&&(s=(i+r.length)%r.length,r.forEach((a,m)=>{const f=m===s;a.classList.toggle("est-active",f),a.setAttribute("aria-selected",String(f))}),t.setAttribute("aria-activedescendant",r[s].id),r[s].scrollIntoView({block:"nearest"}))},p=i=>{i&&(t.value=i.nom,u(),de(i))},l=()=>{const i=t.value.trim();if(c=i?He(i):[],o.replaceChildren(),s=-1,t.removeAttribute("aria-activedescendant"),!i){u();return}if(!c.length){const r=document.createElement("li");r.className="recherche-structure-vide",r.textContent=N[V()].vide,o.appendChild(r),o.hidden=!1,t.setAttribute("aria-expanded","true"),n();return}c.forEach((r,a)=>{const m=document.createElement("li");m.id=`recherche-structure-option-${a}`,m.className="recherche-structure-option",m.dataset.index=String(a),m.setAttribute("role","option"),m.setAttribute("aria-selected","false");const f=document.createElement("span");f.className="recherche-structure-nom",f.textContent=r.nom;const h=document.createElement("span");h.className="recherche-structure-meta",h.textContent=`${r.estFederation?"Fédération":"Section"} · ${r.dep}`,m.append(f,h),o.appendChild(m)}),o.hidden=!1,t.setAttribute("aria-expanded","true"),n()};return t.addEventListener("input",()=>{pe(),l()}),t.addEventListener("search",()=>{pe(),l()}),t.addEventListener("focus",()=>{t.value.trim()&&l()}),t.addEventListener("blur",()=>{window.setTimeout(u,160)}),t.addEventListener("keydown",i=>{i.key==="ArrowDown"?(i.preventDefault(),d(s+1)):i.key==="ArrowUp"?(i.preventDefault(),d(s-1)):i.key==="Enter"?(i.preventDefault(),c.length&&p(c[s>=0?s:0])):i.key==="Escape"&&(i.preventDefault(),u())}),o.addEventListener("mousedown",i=>{i.target.closest(".recherche-structure-option")&&i.preventDefault()}),o.addEventListener("click",i=>{const r=i.target.closest(".recherche-structure-option");r&&p(c[Number(r.dataset.index)])}),e.append(t,o),W=t,Le=u,me=()=>{const i=N[V()];t.placeholder=i.placeholder,t.title=i.placeholder,t.setAttribute("aria-label",i.placeholder),o.setAttribute("aria-label",i.liste)},me(),e}const w=document.createElement("select");w.id="flyto-departement";w.setAttribute("aria-label","Choisir un département ou revenir à la vue globale");w.title="Choisir un département ou revenir à la vue globale";const Ae=document.createElement("option");Ae.value="";Ae.textContent="France entière";w.appendChild(Ae);De.filter(e=>e.complete).forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.name} (${e.id})`,w.appendChild(t)});w.addEventListener("change",()=>Lt(w));ue=w;const Ge=document.createElement("div");Ge.className="menu-separateur";A.append(Ge,w,Ct());const C=document.createElement("button");C.type="button";C.id="structure-proche";C.className="menu-bouton";C.innerHTML=`
  <svg class="menu-bouton-icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="currentColor"/>
  </svg>
  <span class="menu-bouton-texte"></span>
`;C.title="Utiliser ma position pour trouver la structure la plus proche";C.addEventListener("click",()=>Ve());const S=document.createElement("p");S.id="structure-proche-statut";S.className="menu-statut";S.setAttribute("role","status");S.setAttribute("aria-live","polite");S.hidden=!0;A.append(C,S);function z(e,t=!1){S.textContent=e,S.hidden=!e,S.classList.toggle("est-erreur",t)}function Ze(){const e=N[V()];C.querySelector(".menu-bouton-texte").textContent=e.proche,C.setAttribute("aria-label",`${e.proche} (utilise votre position)`)}Ze();function Je(){Ce(),Oe(),me(),Ze(),z(""),j()}H.addEventListener("change",Je);P.addEventListener("change",Je);const $=document.createElement("button");$.type="button";$.id="a-propos-ctrl";$.textContent="i";$.title="À propos de cette carte";$.setAttribute("aria-label","À propos de cette carte");$.setAttribute("aria-haspopup","dialog");document.body.append($);const L=document.createElement("dialog");L.id="a-propos";L.className="a-propos";L.setAttribute("aria-labelledby","a-propos-titre");L.innerHTML=`
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
        La carte agrège des données d'origines diverses, qui peuvent être hétérogènes ou parfois obsolètes. La vie des organisations évolue : des sections se créent, d'autres disparaissent ou fusionnent. Une étape de vérification auprès des différentes fédérations est donc nécessaire pour confirmer l'existence effective des sections et garantir la fiabilité de la carte.
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
          <a href="https://github.com/geopcf/sections/issues" target="_blank" rel="noopener noreferrer">
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
`;document.body.append(L);$.addEventListener("click",()=>{U(),L.showModal()});L.querySelector(".a-propos-fermer").addEventListener("click",()=>L.close());L.addEventListener("click",e=>{e.target===L&&L.close()});const At=L.querySelector("#a-propos-suivi-liste"),St=L.querySelector("#a-propos-suivi-resume");function wt(e){return String(e??"").trim().toLowerCase().replace(/^\[|\]$/g,"").trim()}function Mt(e){return wt(e)==="ok"}function Ie(e){if(e==="2A")return 20.1;if(e==="2B")return 20.2;const t=Number.parseInt(e,10);return Number.isFinite(t)?t:Number.MAX_SAFE_INTEGER}function ce(e){const t=String(e.nom??"").trim();return t.replace(/^fédér\S*\s+/i,"").replace(/^(de\s+la\s+|de\s+l[’']|du\s+|des\s+|de\s+|d[’'])/i,"").trim()||t}function xt(e){const t=new Map;e.forEach(n=>{var i;if(((i=n.type)==null?void 0:i.trim().toLowerCase())!=="fédération")return;const d=String(n.dep??"").trim();if(!d)return;const p=Mt(n.check_fede),l=t.get(d);l?(l.checkFede=l.checkFede||p,!l.nom&&ce(n)&&(l.nom=ce(n))):t.set(d,{dep:d,nom:ce(n),checkFede:p})});const o=[...t.values()].sort((n,d)=>Ie(n.dep)-Ie(d.dep)),c=o.length,s=o.filter(n=>n.checkFede).length;St.textContent=`Validés par la fédé : ${s}/${c}.`;const u=document.createDocumentFragment();o.forEach(({dep:n,nom:d,checkFede:p})=>{const l=document.createElement("li");l.className="a-propos-suivi-ligne";const i=document.createElement("span");i.className="a-propos-suivi-dep",i.textContent=n;const r=document.createElement("span");r.className="a-propos-suivi-nom",r.textContent=d;const a=document.createElement("span");a.className=`a-propos-suivi-statut${p?" est-verifie":""}`,a.textContent=p?"validé par la fédé":"en cours de vérification",l.append(i,r,a),u.append(l)}),At.replaceChildren(u)}v.on("load",()=>{gt()});v.on("load",async()=>{const e=await ct();xt(e);let t=null;const o=[],c=[],s=new Map;e.forEach(n=>{var l;if(((l=n.type)==null?void 0:l.trim().toLowerCase())!=="fédération")return;const d=String(n.dep??"").trim(),p=String(n.email??"").trim();d&&p&&s.set(d,p)}),e.forEach(n=>{var G,I,R,D,x,Se,we,Me,xe,ke;const d=Number(n.latitude),p=Number(n.longitude);if(!Number.isFinite(d)||!Number.isFinite(p)||((G=n.latitude)==null?void 0:G.trim())===""||((I=n.longitude)==null?void 0:I.trim())==="")return;const l=(R=n.type)==null?void 0:R.trim().toLowerCase(),i=l==="fédération",r=l==="section";if(!i&&!r)return;const a=document.createElement("img");a.src="images/section.svg",a.alt=n.nom||(i?"Fédération":"Section"),a.classList.add("pin"),a.style.width="30px",a.style.height="30px",a.style.display="block",a.style.cursor="pointer";const m=c.filter(({key:O})=>{var k;return(k=n[O])==null?void 0:k.trim()}).map(({key:O,label:k})=>`${k} : ${n[O]}`),f=String(n.dep??"").trim(),h=String(n.email??"").trim(),y=r?s.get(f)??"":"",g=lt(n),q=`
  <strong class="popup-nom">${n.nom||""}${f?` <span class="popup-dep">(${f})</span>`:""}</strong>

  <div class="popup-infos">
    ${(D=n.website)!=null&&D.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/url.png" alt="">
             <a href="${n.website}" target="_blank" rel="noopener noreferrer">${n.website}</a>
           </div>`:""}
${h?`<div class="popup-ligne">
         <img class="popup-icone" src="images/email.png" alt="">
         <a href="mailto:${h}">${h}</a>
       </div>`:""}
${y&&y!==h?`<div class="popup-ligne">
         <img class="popup-icone" src="images/email.png" alt="">
         <a href="mailto:${y}">${y}</a>
         <span class="popup-libelle">(fédé)</span>
       </div>`:""}
        ${(x=n.facebook)!=null&&x.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/facebook.png" alt="">
             <a href="https://www.facebook.com/${n.facebook}" target="_blank" rel="noopener noreferrer">${n.facebook}</a>
           </div>`:""}
        ${(Se=n.twitter)!=null&&Se.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/x.png" alt="">
             <a href="https://x.com//${n.twitter}" target="_blank" rel="noopener noreferrer">${n.twitter}</a>
           </div>`:""}
    ${(we=n.bluesky)!=null&&we.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/bluesky.avif" alt="">
             <a href="https://bsky.app/profile/${n.bluesky}" target="_blank" rel="noopener noreferrer">${n.bluesky}</a>
           </div>`:""}

    ${(Me=n.instagram)!=null&&Me.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/insta.png" alt="">
             <a href="https://www.instagram.com/${n.instagram}" target="_blank" rel="noopener noreferrer">${n.instagram}</a>
           </div>`:""}

        ${(xe=n.tiktok)!=null&&xe.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/tiktok.jpeg" alt="">
             <a href="https://www.tiktok.com/@${n.tiktok}" target="_blank" rel="noopener noreferrer">${n.tiktok}</a>
           </div>`:""}
          ${(ke=n.youtube)!=null&&ke.trim()?`<div class="popup-ligne">
             <img class="popup-icone" src="images/youtube.jpeg" alt="">
             <a href="https://www.youtube.com/@${n.youtube}" target="_blank" rel="noopener noreferrer">${n.youtube}</a>
           </div>`:""}
    ${m.length?m.map(O=>`<div class="popup-ligne">${O}</div>`).join(""):""}
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
`,M=new J.Marker({element:a,anchor:"bottom"}).setLngLat([p,d]).addTo(v);o.push({marker:M,estFederation:i,estSection:r,dep:n.dep,nom:String(n.nom??"").trim(),longitude:p,latitude:d}),a.addEventListener("click",O=>{O.stopPropagation(),U(),t&&(t.remove(),t=null);const k=new J.Popup({offset:12,closeButton:!0,closeOnClick:!1,focusAfterOpen:!1}).setLngLat([p,d]).setHTML(q).addTo(v);t=k,k.on("close",()=>{t===k&&(t=null)})})}),He=n=>{const d=$e(n);if(!d)return[];const p=V()==="federation";return o.filter(l=>p?l.estFederation:l.estSection).map(l=>{const i=$e(l.nom),r=i.indexOf(d);return{structure:l,nom:i,position:r}}).filter(({position:l})=>l!==-1).sort((l,i)=>{const r=l.position===0?0:1,a=i.position===0?0:1;return r-a||l.position-i.position||l.nom.localeCompare(i.nom,"fr")}).slice(0,8).map(({structure:l})=>l)},de=n=>{n&&(U(),_=n.marker,F=null,ue&&(ue.selectedIndex=-1),ne(null),t&&(t.remove(),t=null),j(),v.flyTo({center:[n.longitude,n.latitude],zoom:11,duration:1200}))},pe=()=>{_&&(_=null,j())},Ve=()=>{const n=V()==="federation",d=o.filter(p=>n?p.estFederation:p.estSection);if(!d.length){z("Aucune structure disponible.",!0);return}if(!navigator.geolocation){z("La géolocalisation n'est pas disponible dans ce navigateur.",!0);return}C.disabled=!0,z("Localisation en cours…"),navigator.geolocation.getCurrentPosition(p=>{C.disabled=!1;const{latitude:l,longitude:i}=p.coords;let r=null,a=1/0;if(d.forEach(m=>{const f=bt(l,i,m.latitude,m.longitude);f<a&&(a=f,r=m)}),!r){z("Aucune structure n'a pu être trouvée.",!0);return}W&&(W.value=r.nom),de(r),z("")},p=>{C.disabled=!1,z({1:"Localisation refusée. Autorisez l'accès à votre position dans le navigateur.",2:"Votre position n'a pas pu être déterminée.",3:"La localisation a expiré. Réessayez."}[p.code]??"La localisation a échoué. Réessayez.",!0)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4})};function u(){const n=H.checked,d=P.checked;if(o.forEach(({marker:p,estFederation:l,estSection:i,dep:r})=>{const a=!!_,m=a&&p===_,f=m||i&&n||l&&d,h=a&&!m,y=!m&&!!F&&r!==F,g=p.getElement();g.style.display=f?"block":"none",g.classList.toggle("pin-hors-selection",h),g.classList.toggle("pin-selectionnee",m),g.classList.toggle("pin-hors-departement",y),g.classList.toggle("pin-actif-departement",!!F&&!y)}),t){const p=t.getLngLat();o.some(({marker:i,estFederation:r,estSection:a})=>{const m=i.getLngLat();return(i===_||a&&n||r&&d)&&m.lng===p.lng&&m.lat===p.lat})||(t.remove(),t=null)}}j=u,u()});
