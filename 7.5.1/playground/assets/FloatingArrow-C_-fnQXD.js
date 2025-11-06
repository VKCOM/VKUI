import{j as l,R as A,i as c}from"./iframe-DZFG_ML5.js";const p=20,h=8,H=10,F=1,f=h+F,i=u=>l.jsx("svg",{width:p,height:f,viewBox:`0 0 ${p} ${f}`,xmlns:"http://www.w3.org/2000/svg",...u,children:l.jsx("path",{d:"M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z",fill:"currentColor"})});try{i.displayName="DefaultIcon",i.__docgenInfo={description:`Стрелка для всплывающих окон.

Примечание 1.

В компоненте, SVG элемент \`<path />\` представляет собой стрелку с платформой в виде прямоугольника в 1px. Платформа
служит для исправления проблемы с белой полоской между контентом и стрелкой, которая зачастую проявляется при
изменении масштаба страницы.

Чтобы исправление сработало нужно:
1. Прибавить высоту платформы к \`height\` и \`viewBox\` SVG контейнера.
2. Сместить положение SVG контейнера на высоту платформы – сделано в CSS через \`translateY(1px)\`.

Смотри https://github.com/VKCOM/VKUI/issues/2123.`,displayName:"DefaultIcon",props:{}}}catch{}const C="_host_sqlyh_1",g="_placementRight_sqlyh_13",y="_placementBottom_sqlyh_18",R="_placementLeft_sqlyh_22",r={host:C,in:"_in_sqlyh_5",placementRight:g,placementBottom:y,placementLeft:R},v={right:r.placementRight,bottom:r.placementBottom,left:r.placementLeft},m=({offset:u,isStaticOffset:e,coords:o,iconStyle:t,iconClassName:s,placement:n="bottom",Icon:a=i,...D})=>{const[E,_]=x(n,o,u,e);return l.jsx(A,{baseStyle:_,baseClassName:c(r.host,E&&v[E]),...D,children:l.jsx(a,{className:c(r.in,s),style:t})})};function x(u,e={x:0,y:0},o=0,t=!1){const s=n=>{const a={x:e.x||0,y:e.y||0};return n?t?o:a.y+o:t?o:a.x+o};return u.startsWith("top")?["bottom",{top:"100%",[d(u,t)]:s(!1)}]:u.startsWith("right")?["left",{[B(u,t)]:s(!0),left:0}]:u.startsWith("bottom")?[void 0,{bottom:"100%",[d(u,t)]:s(!1)}]:["right",{[B(u,t)]:s(!0),right:0}]}function d(u,e){return u.endsWith("end")&&e?"right":"left"}function B(u,e){return u.endsWith("end")&&e?"bottom":"top"}try{m.displayName="FloatingArrow",m.__docgenInfo={description:"Иконка-стрелка для всплывающих окон.",displayName:"FloatingArrow",props:{offset:{defaultValue:null,description:"Сдвиг стрелки относительно текущих координат.",name:"offset",required:!1,type:{name:"number"}},isStaticOffset:{defaultValue:null,description:"Включает абсолютное смещение по `offset`.",name:"isStaticOffset",required:!1,type:{name:"boolean"}},coords:{defaultValue:null,description:"Координаты стрелки.",name:"coords",required:!1,type:{name:"Coords"}},placement:{defaultValue:{value:"bottom"},description:"Расположение всплывающего элемента.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'}]}},iconStyle:{defaultValue:null,description:"Стили иконки.",name:"iconStyle",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"`className` для иконки.",name:"iconClassName",required:!1,type:{name:"string"}},Icon:{defaultValue:{value:`(props: React.SVGAttributes<SVGSVGElement>): React.ReactNode => {
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
}`},description:"Иконка для отображения стрелки.",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}export{i as D,m as F,h as a,H as b};
