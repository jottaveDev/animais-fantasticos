(()=>{"use strict";function t(t,e,i){const s=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{s.removeEventListener(t,o)})),i())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,o)))})),t.setAttribute(n,""))}class e{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const n=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}function i(t,e){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...s),i=null}),e)}}class s{constructor(t,e){this.slide=document.querySelector(t),this.container=document.querySelector(e),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}transition(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}updatePosition(t){return this.dist.movement=1.5*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.container.addEventListener(e,this.onMove),this.transition(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.container.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addSlideEvents(){this.container.addEventListener("mousedown",this.onStart),this.container.addEventListener("touchstart",this.onStart),this.container.addEventListener("mouseup",this.onEnd),this.container.addEventListener("touchend",this.onEnd)}slidePosition(t){const e=(this.container.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slideConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slideIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlide(t){const e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.container.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>t.element.classList.remove(this.activeClass))),this.slideArray[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onResize(){setTimeout((()=>{this.slideConfig(),this.changeSlide(this.index.active)}),1e3)}addResizeEvent(){window.addEventListener("resize",this.onResize)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=i(this.onResize.bind(this),200)}init(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slideConfig(),this.addResizeEvent(),this.changeSlide(0),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal(t)}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=i(this.checkDistance.bind(this),50)}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.scrollY>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(e){e.preventDefault();const i=e.currentTarget;i.classList.add(this.activeClass),t(i,this.events,(()=>{i.classList.remove("active")}))}addDropdownMenusEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="active",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(e){e.preventDefault(),this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),t(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}))}addMenuMobileEvents(){this.events.forEach((t=>this.menuButton.addEventListener(t,this.openMenu)))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu="button"]',"#menu").init(),new class{constructor(t,e){this.funcionamento=document.querySelector(t),this.activeClass=e}dadosFuncionamento(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}ativaAberto(){this.estaAberto&&this.funcionamento.classList.add(this.activeClass)}init(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}("[data-semana]","aberto").init(),function(t,i){const s=document.querySelector(".numeros-grid");!async function(){try{const t=await fetch("./animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);s.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.buy).toFixed(4)})).catch((t=>console.log(Error(t))));const n=new class extends s{constructor(t,e){super(t,e),this.bindControlEvents()}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href ="#slide${i+1}">${i+1}</a></li>`})),this.container.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.container.addEventListener("changeEvent",this.activeControlItem)}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.activeControlItem(),this.controlArray.forEach(this.eventControl)}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}(".slide",".slide-container");n.init(),n.addControl(".custom-controls")})();