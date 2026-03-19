import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CRMqfscQ.js";import{c as n,t as r}from"./lib-B1PKsac9.js";import{n as i,t as a}from"./RootComponent-CmzQuzXN.js";var o,s,c,l=e((()=>{o=t(),s=9,c=e=>(0,o.jsx)(`svg`,{width:20,height:s,viewBox:`0 0 20 ${s}`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,o.jsx)(`path`,{d:`M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z`,fill:`currentColor`})});try{c.displayName=`DefaultIcon`,c.__docgenInfo={description:`Стрелка для всплывающих окон.

Примечание 1.

В компоненте, SVG элемент \`<path />\` представляет собой стрелку с платформой в виде прямоугольника в 1px. Платформа
служит для исправления проблемы с белой полоской между контентом и стрелкой, которая зачастую проявляется при
изменении масштаба страницы.

Чтобы исправление сработало нужно:
1. Прибавить высоту платформы к \`height\` и \`viewBox\` SVG контейнера.
2. Сместить положение SVG контейнера на высоту платформы – сделано в CSS через \`translateY(1px)\`.

Смотри https://github.com/VKCOM/VKUI/issues/2123.`,displayName:`DefaultIcon`,props:{}}}catch{}})),u,d,f,p,m,h=e((()=>{u=`_host_sqlyh_1`,d=`_placementRight_sqlyh_13`,f=`_placementBottom_sqlyh_18`,p=`_placementLeft_sqlyh_22`,m={host:u,in:`_in_sqlyh_5`,placementRight:d,placementBottom:f,placementLeft:p}}));function g(e,t={x:0,y:0},n=0,r=!1){let i=e=>{let i={x:t.x||0,y:t.y||0};return e?r?n:i.y+n:r?n:i.x+n};return e.startsWith(`top`)?[`bottom`,{top:`100%`,[_(e,r)]:i(!1)}]:e.startsWith(`right`)?[`left`,{[v(e,r)]:i(!0),left:0}]:e.startsWith(`bottom`)?[void 0,{bottom:`100%`,[_(e,r)]:i(!1)}]:[`right`,{[v(e,r)]:i(!0),right:0}]}function _(e,t){return e.endsWith(`end`)&&t?`right`:`left`}function v(e,t){return e.endsWith(`end`)&&t?`bottom`:`top`}var y,b,x,S=e((()=>{r(),i(),l(),h(),y=t(),b={right:m.placementRight,bottom:m.placementBottom,left:m.placementLeft},x=({offset:e,isStaticOffset:t,coords:r,iconStyle:i,iconClassName:o,placement:s=`bottom`,Icon:l=c,...u})=>{let[d,f]=g(s,r,e,t);return(0,y.jsx)(a,{baseStyle:f,baseClassName:n(m.host,d&&b[d]),...u,children:(0,y.jsx)(l,{className:n(m.in,o),style:i})})};try{x.displayName=`FloatingArrow`,x.__docgenInfo={description:`Иконка-стрелка для всплывающих окон.`,displayName:`FloatingArrow`,props:{offset:{defaultValue:null,description:`Сдвиг стрелки относительно текущих координат.`,name:`offset`,required:!1,type:{name:`number`}},isStaticOffset:{defaultValue:null,description:"Включает абсолютное смещение по `offset`.",name:`isStaticOffset`,required:!1,type:{name:`boolean`}},coords:{defaultValue:null,description:`Координаты стрелки.`,name:`coords`,required:!1,type:{name:`Coords`}},placement:{defaultValue:{value:`bottom`},description:`Расположение всплывающего элемента.`,name:`placement`,required:!1,type:{name:`enum`,value:[{value:`"top"`},{value:`"bottom"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"left"`},{value:`"right"`},{value:`"left-start"`},{value:`"left-end"`},{value:`"right-start"`},{value:`"right-end"`}]}},iconStyle:{defaultValue:null,description:`Стили иконки.`,name:`iconStyle`,required:!1,type:{name:`CSSProperties`}},iconClassName:{defaultValue:null,description:"`className` для иконки.",name:`iconClassName`,required:!1,type:{name:`string`}},Icon:{defaultValue:{value:`(props: React.SVGAttributes<SVGSVGElement>): React.ReactNode => {
  return (
    <svg
      width={DEFAULT_ARROW_WIDTH}
      height={ARROW_HEIGHT_WITH_WHITE_SPACE}
      viewBox={\`0 0 \${DEFAULT_ARROW_WIDTH} \${ARROW_HEIGHT_WITH_WHITE_SPACE}\`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z" fill="currentColor" />
    </svg>
  );
}`},description:`Иконка для отображения стрелки.`,name:`Icon`,required:!1,type:{name:`ComponentType<SVGAttributes<SVGSVGElement>>`}},getRootRef:{defaultValue:null,description:``,name:`getRootRef`,required:!1,type:{name:`Ref<HTMLDivElement>`}}}}}catch{}}));export{l as i,S as n,c as r,x as t};