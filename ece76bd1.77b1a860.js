(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(t,e,i){var s={"./Binary_Property/ASCII.js":149,"./Binary_Property/ASCII_Hex_Digit.js":150,"./Binary_Property/Alphabetic.js":151,"./Binary_Property/Any.js":152,"./Binary_Property/Assigned.js":153,"./Binary_Property/Bidi_Control.js":154,"./Binary_Property/Bidi_Mirrored.js":155,"./Binary_Property/Case_Ignorable.js":156,"./Binary_Property/Cased.js":157,"./Binary_Property/Changes_When_Casefolded.js":158,"./Binary_Property/Changes_When_Casemapped.js":159,"./Binary_Property/Changes_When_Lowercased.js":160,"./Binary_Property/Changes_When_NFKC_Casefolded.js":161,"./Binary_Property/Changes_When_Titlecased.js":162,"./Binary_Property/Changes_When_Uppercased.js":163,"./Binary_Property/Dash.js":164,"./Binary_Property/Default_Ignorable_Code_Point.js":165,"./Binary_Property/Deprecated.js":166,"./Binary_Property/Diacritic.js":167,"./Binary_Property/Emoji.js":168,"./Binary_Property/Emoji_Component.js":169,"./Binary_Property/Emoji_Modifier.js":170,"./Binary_Property/Emoji_Modifier_Base.js":171,"./Binary_Property/Emoji_Presentation.js":172,"./Binary_Property/Extended_Pictographic.js":173,"./Binary_Property/Extender.js":174,"./Binary_Property/Grapheme_Base.js":175,"./Binary_Property/Grapheme_Extend.js":176,"./Binary_Property/Hex_Digit.js":177,"./Binary_Property/IDS_Binary_Operator.js":178,"./Binary_Property/IDS_Trinary_Operator.js":179,"./Binary_Property/ID_Continue.js":180,"./Binary_Property/ID_Start.js":181,"./Binary_Property/Ideographic.js":182,"./Binary_Property/Join_Control.js":183,"./Binary_Property/Logical_Order_Exception.js":184,"./Binary_Property/Lowercase.js":185,"./Binary_Property/Math.js":186,"./Binary_Property/Noncharacter_Code_Point.js":187,"./Binary_Property/Pattern_Syntax.js":188,"./Binary_Property/Pattern_White_Space.js":189,"./Binary_Property/Quotation_Mark.js":190,"./Binary_Property/Radical.js":191,"./Binary_Property/Regional_Indicator.js":192,"./Binary_Property/Sentence_Terminal.js":193,"./Binary_Property/Soft_Dotted.js":194,"./Binary_Property/Terminal_Punctuation.js":195,"./Binary_Property/Unified_Ideograph.js":196,"./Binary_Property/Uppercase.js":197,"./Binary_Property/Variation_Selector.js":198,"./Binary_Property/White_Space.js":199,"./Binary_Property/XID_Continue.js":200,"./Binary_Property/XID_Start.js":201,"./General_Category/Cased_Letter.js":202,"./General_Category/Close_Punctuation.js":203,"./General_Category/Connector_Punctuation.js":204,"./General_Category/Control.js":205,"./General_Category/Currency_Symbol.js":206,"./General_Category/Dash_Punctuation.js":207,"./General_Category/Decimal_Number.js":208,"./General_Category/Enclosing_Mark.js":209,"./General_Category/Final_Punctuation.js":210,"./General_Category/Format.js":211,"./General_Category/Initial_Punctuation.js":212,"./General_Category/Letter.js":213,"./General_Category/Letter_Number.js":214,"./General_Category/Line_Separator.js":215,"./General_Category/Lowercase_Letter.js":216,"./General_Category/Mark.js":217,"./General_Category/Math_Symbol.js":218,"./General_Category/Modifier_Letter.js":219,"./General_Category/Modifier_Symbol.js":220,"./General_Category/Nonspacing_Mark.js":221,"./General_Category/Number.js":222,"./General_Category/Open_Punctuation.js":223,"./General_Category/Other.js":224,"./General_Category/Other_Letter.js":225,"./General_Category/Other_Number.js":226,"./General_Category/Other_Punctuation.js":227,"./General_Category/Other_Symbol.js":228,"./General_Category/Paragraph_Separator.js":229,"./General_Category/Private_Use.js":230,"./General_Category/Punctuation.js":231,"./General_Category/Separator.js":232,"./General_Category/Space_Separator.js":233,"./General_Category/Spacing_Mark.js":234,"./General_Category/Surrogate.js":235,"./General_Category/Symbol.js":236,"./General_Category/Titlecase_Letter.js":237,"./General_Category/Unassigned.js":238,"./General_Category/Uppercase_Letter.js":239,"./Script/Adlam.js":240,"./Script/Ahom.js":241,"./Script/Anatolian_Hieroglyphs.js":242,"./Script/Arabic.js":243,"./Script/Armenian.js":244,"./Script/Avestan.js":245,"./Script/Balinese.js":246,"./Script/Bamum.js":247,"./Script/Bassa_Vah.js":248,"./Script/Batak.js":249,"./Script/Bengali.js":250,"./Script/Bhaiksuki.js":251,"./Script/Bopomofo.js":252,"./Script/Brahmi.js":253,"./Script/Braille.js":254,"./Script/Buginese.js":255,"./Script/Buhid.js":256,"./Script/Canadian_Aboriginal.js":257,"./Script/Carian.js":258,"./Script/Caucasian_Albanian.js":259,"./Script/Chakma.js":260,"./Script/Cham.js":261,"./Script/Cherokee.js":262,"./Script/Chorasmian.js":263,"./Script/Common.js":264,"./Script/Coptic.js":265,"./Script/Cuneiform.js":266,"./Script/Cypriot.js":267,"./Script/Cyrillic.js":268,"./Script/Deseret.js":269,"./Script/Devanagari.js":270,"./Script/Dives_Akuru.js":271,"./Script/Dogra.js":272,"./Script/Duployan.js":273,"./Script/Egyptian_Hieroglyphs.js":274,"./Script/Elbasan.js":275,"./Script/Elymaic.js":276,"./Script/Ethiopic.js":277,"./Script/Georgian.js":278,"./Script/Glagolitic.js":279,"./Script/Gothic.js":280,"./Script/Grantha.js":281,"./Script/Greek.js":282,"./Script/Gujarati.js":283,"./Script/Gunjala_Gondi.js":284,"./Script/Gurmukhi.js":285,"./Script/Han.js":286,"./Script/Hangul.js":287,"./Script/Hanifi_Rohingya.js":288,"./Script/Hanunoo.js":289,"./Script/Hatran.js":290,"./Script/Hebrew.js":291,"./Script/Hiragana.js":292,"./Script/Imperial_Aramaic.js":293,"./Script/Inherited.js":294,"./Script/Inscriptional_Pahlavi.js":295,"./Script/Inscriptional_Parthian.js":296,"./Script/Javanese.js":297,"./Script/Kaithi.js":298,"./Script/Kannada.js":299,"./Script/Katakana.js":300,"./Script/Kayah_Li.js":301,"./Script/Kharoshthi.js":302,"./Script/Khitan_Small_Script.js":303,"./Script/Khmer.js":304,"./Script/Khojki.js":305,"./Script/Khudawadi.js":306,"./Script/Lao.js":307,"./Script/Latin.js":308,"./Script/Lepcha.js":309,"./Script/Limbu.js":310,"./Script/Linear_A.js":311,"./Script/Linear_B.js":312,"./Script/Lisu.js":313,"./Script/Lycian.js":314,"./Script/Lydian.js":315,"./Script/Mahajani.js":316,"./Script/Makasar.js":317,"./Script/Malayalam.js":318,"./Script/Mandaic.js":319,"./Script/Manichaean.js":320,"./Script/Marchen.js":321,"./Script/Masaram_Gondi.js":322,"./Script/Medefaidrin.js":323,"./Script/Meetei_Mayek.js":324,"./Script/Mende_Kikakui.js":325,"./Script/Meroitic_Cursive.js":326,"./Script/Meroitic_Hieroglyphs.js":327,"./Script/Miao.js":328,"./Script/Modi.js":329,"./Script/Mongolian.js":330,"./Script/Mro.js":331,"./Script/Multani.js":332,"./Script/Myanmar.js":333,"./Script/Nabataean.js":334,"./Script/Nandinagari.js":335,"./Script/New_Tai_Lue.js":336,"./Script/Newa.js":337,"./Script/Nko.js":338,"./Script/Nushu.js":339,"./Script/Nyiakeng_Puachue_Hmong.js":340,"./Script/Ogham.js":341,"./Script/Ol_Chiki.js":342,"./Script/Old_Hungarian.js":343,"./Script/Old_Italic.js":344,"./Script/Old_North_Arabian.js":345,"./Script/Old_Permic.js":346,"./Script/Old_Persian.js":347,"./Script/Old_Sogdian.js":348,"./Script/Old_South_Arabian.js":349,"./Script/Old_Turkic.js":350,"./Script/Oriya.js":351,"./Script/Osage.js":352,"./Script/Osmanya.js":353,"./Script/Pahawh_Hmong.js":354,"./Script/Palmyrene.js":355,"./Script/Pau_Cin_Hau.js":356,"./Script/Phags_Pa.js":357,"./Script/Phoenician.js":358,"./Script/Psalter_Pahlavi.js":359,"./Script/Rejang.js":360,"./Script/Runic.js":361,"./Script/Samaritan.js":362,"./Script/Saurashtra.js":363,"./Script/Sharada.js":364,"./Script/Shavian.js":365,"./Script/Siddham.js":366,"./Script/SignWriting.js":367,"./Script/Sinhala.js":368,"./Script/Sogdian.js":369,"./Script/Sora_Sompeng.js":370,"./Script/Soyombo.js":371,"./Script/Sundanese.js":372,"./Script/Syloti_Nagri.js":373,"./Script/Syriac.js":374,"./Script/Tagalog.js":375,"./Script/Tagbanwa.js":376,"./Script/Tai_Le.js":377,"./Script/Tai_Tham.js":378,"./Script/Tai_Viet.js":379,"./Script/Takri.js":380,"./Script/Tamil.js":381,"./Script/Tangut.js":382,"./Script/Telugu.js":383,"./Script/Thaana.js":384,"./Script/Thai.js":385,"./Script/Tibetan.js":386,"./Script/Tifinagh.js":387,"./Script/Tirhuta.js":388,"./Script/Ugaritic.js":389,"./Script/Vai.js":390,"./Script/Wancho.js":391,"./Script/Warang_Citi.js":392,"./Script/Yezidi.js":393,"./Script/Yi.js":394,"./Script/Zanabazar_Square.js":395,"./Script_Extensions/Adlam.js":396,"./Script_Extensions/Ahom.js":397,"./Script_Extensions/Anatolian_Hieroglyphs.js":398,"./Script_Extensions/Arabic.js":399,"./Script_Extensions/Armenian.js":400,"./Script_Extensions/Avestan.js":401,"./Script_Extensions/Balinese.js":402,"./Script_Extensions/Bamum.js":403,"./Script_Extensions/Bassa_Vah.js":404,"./Script_Extensions/Batak.js":405,"./Script_Extensions/Bengali.js":406,"./Script_Extensions/Bhaiksuki.js":407,"./Script_Extensions/Bopomofo.js":408,"./Script_Extensions/Brahmi.js":409,"./Script_Extensions/Braille.js":410,"./Script_Extensions/Buginese.js":411,"./Script_Extensions/Buhid.js":412,"./Script_Extensions/Canadian_Aboriginal.js":413,"./Script_Extensions/Carian.js":414,"./Script_Extensions/Caucasian_Albanian.js":415,"./Script_Extensions/Chakma.js":416,"./Script_Extensions/Cham.js":417,"./Script_Extensions/Cherokee.js":418,"./Script_Extensions/Chorasmian.js":419,"./Script_Extensions/Common.js":420,"./Script_Extensions/Coptic.js":421,"./Script_Extensions/Cuneiform.js":422,"./Script_Extensions/Cypriot.js":423,"./Script_Extensions/Cyrillic.js":424,"./Script_Extensions/Deseret.js":425,"./Script_Extensions/Devanagari.js":426,"./Script_Extensions/Dives_Akuru.js":427,"./Script_Extensions/Dogra.js":428,"./Script_Extensions/Duployan.js":429,"./Script_Extensions/Egyptian_Hieroglyphs.js":430,"./Script_Extensions/Elbasan.js":431,"./Script_Extensions/Elymaic.js":432,"./Script_Extensions/Ethiopic.js":433,"./Script_Extensions/Georgian.js":434,"./Script_Extensions/Glagolitic.js":435,"./Script_Extensions/Gothic.js":436,"./Script_Extensions/Grantha.js":437,"./Script_Extensions/Greek.js":438,"./Script_Extensions/Gujarati.js":439,"./Script_Extensions/Gunjala_Gondi.js":440,"./Script_Extensions/Gurmukhi.js":441,"./Script_Extensions/Han.js":442,"./Script_Extensions/Hangul.js":443,"./Script_Extensions/Hanifi_Rohingya.js":444,"./Script_Extensions/Hanunoo.js":445,"./Script_Extensions/Hatran.js":446,"./Script_Extensions/Hebrew.js":447,"./Script_Extensions/Hiragana.js":448,"./Script_Extensions/Imperial_Aramaic.js":449,"./Script_Extensions/Inherited.js":450,"./Script_Extensions/Inscriptional_Pahlavi.js":451,"./Script_Extensions/Inscriptional_Parthian.js":452,"./Script_Extensions/Javanese.js":453,"./Script_Extensions/Kaithi.js":454,"./Script_Extensions/Kannada.js":455,"./Script_Extensions/Katakana.js":456,"./Script_Extensions/Kayah_Li.js":457,"./Script_Extensions/Kharoshthi.js":458,"./Script_Extensions/Khitan_Small_Script.js":459,"./Script_Extensions/Khmer.js":460,"./Script_Extensions/Khojki.js":461,"./Script_Extensions/Khudawadi.js":462,"./Script_Extensions/Lao.js":463,"./Script_Extensions/Latin.js":464,"./Script_Extensions/Lepcha.js":465,"./Script_Extensions/Limbu.js":466,"./Script_Extensions/Linear_A.js":467,"./Script_Extensions/Linear_B.js":468,"./Script_Extensions/Lisu.js":469,"./Script_Extensions/Lycian.js":470,"./Script_Extensions/Lydian.js":471,"./Script_Extensions/Mahajani.js":472,"./Script_Extensions/Makasar.js":473,"./Script_Extensions/Malayalam.js":474,"./Script_Extensions/Mandaic.js":475,"./Script_Extensions/Manichaean.js":476,"./Script_Extensions/Marchen.js":477,"./Script_Extensions/Masaram_Gondi.js":478,"./Script_Extensions/Medefaidrin.js":479,"./Script_Extensions/Meetei_Mayek.js":480,"./Script_Extensions/Mende_Kikakui.js":481,"./Script_Extensions/Meroitic_Cursive.js":482,"./Script_Extensions/Meroitic_Hieroglyphs.js":483,"./Script_Extensions/Miao.js":484,"./Script_Extensions/Modi.js":485,"./Script_Extensions/Mongolian.js":486,"./Script_Extensions/Mro.js":487,"./Script_Extensions/Multani.js":488,"./Script_Extensions/Myanmar.js":489,"./Script_Extensions/Nabataean.js":490,"./Script_Extensions/Nandinagari.js":491,"./Script_Extensions/New_Tai_Lue.js":492,"./Script_Extensions/Newa.js":493,"./Script_Extensions/Nko.js":494,"./Script_Extensions/Nushu.js":495,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":496,"./Script_Extensions/Ogham.js":497,"./Script_Extensions/Ol_Chiki.js":498,"./Script_Extensions/Old_Hungarian.js":499,"./Script_Extensions/Old_Italic.js":500,"./Script_Extensions/Old_North_Arabian.js":501,"./Script_Extensions/Old_Permic.js":502,"./Script_Extensions/Old_Persian.js":503,"./Script_Extensions/Old_Sogdian.js":504,"./Script_Extensions/Old_South_Arabian.js":505,"./Script_Extensions/Old_Turkic.js":506,"./Script_Extensions/Oriya.js":507,"./Script_Extensions/Osage.js":508,"./Script_Extensions/Osmanya.js":509,"./Script_Extensions/Pahawh_Hmong.js":510,"./Script_Extensions/Palmyrene.js":511,"./Script_Extensions/Pau_Cin_Hau.js":512,"./Script_Extensions/Phags_Pa.js":513,"./Script_Extensions/Phoenician.js":514,"./Script_Extensions/Psalter_Pahlavi.js":515,"./Script_Extensions/Rejang.js":516,"./Script_Extensions/Runic.js":517,"./Script_Extensions/Samaritan.js":518,"./Script_Extensions/Saurashtra.js":519,"./Script_Extensions/Sharada.js":520,"./Script_Extensions/Shavian.js":521,"./Script_Extensions/Siddham.js":522,"./Script_Extensions/SignWriting.js":523,"./Script_Extensions/Sinhala.js":524,"./Script_Extensions/Sogdian.js":525,"./Script_Extensions/Sora_Sompeng.js":526,"./Script_Extensions/Soyombo.js":527,"./Script_Extensions/Sundanese.js":528,"./Script_Extensions/Syloti_Nagri.js":529,"./Script_Extensions/Syriac.js":530,"./Script_Extensions/Tagalog.js":531,"./Script_Extensions/Tagbanwa.js":532,"./Script_Extensions/Tai_Le.js":533,"./Script_Extensions/Tai_Tham.js":534,"./Script_Extensions/Tai_Viet.js":535,"./Script_Extensions/Takri.js":536,"./Script_Extensions/Tamil.js":537,"./Script_Extensions/Tangut.js":538,"./Script_Extensions/Telugu.js":539,"./Script_Extensions/Thaana.js":540,"./Script_Extensions/Thai.js":541,"./Script_Extensions/Tibetan.js":542,"./Script_Extensions/Tifinagh.js":543,"./Script_Extensions/Tirhuta.js":544,"./Script_Extensions/Ugaritic.js":545,"./Script_Extensions/Vai.js":546,"./Script_Extensions/Wancho.js":547,"./Script_Extensions/Warang_Citi.js":548,"./Script_Extensions/Yezidi.js":549,"./Script_Extensions/Yi.js":550,"./Script_Extensions/Zanabazar_Square.js":551,"./index.js":552,"./unicode-version.js":553};function r(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id=148},68:function(t,e,i){"use strict";i.r(e);var s=i(2),r=i(0),n=i.n(r),a=i(71),o=i(85),c=i(72),p=i(70),j=i(73),_=i(63),S=i.n(_),l=i(75),y=i(74),m=i(76),E=i(128),x=i(586),h=i(78);var g=({noInline:t,code:e,scope:i,height:s})=>{const{isDarkTheme:r}=Object(h.a)(),a=Object(E.b)(x.d)`
    border-radius: 3px;
    box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
    overflow: hidden;
    margin-bottom: 100px;
    `,o=E.b.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    @media (max-width: 600px) {
        flex-direction: column;
    }
    `,c=E.a`
    flex-basis: 50%;
    width: 50%;
    max-width: 50%;
    @media (max-width: 600px) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
        height: ${s};
        max-height: ${s};
    }
    `,p=E.b.div`
    background: rgb(41, 45, 62);
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    height: ${s};
    max-height: ${s};
    overflow: auto;
    ${c};
    * > textarea:focus {
        outline: none;
    }
    `,j=Object(E.b)(x.c)`
    position: relative;
    padding: 0.5rem;
    background: ${r?"#0c0e0e":"#e3eaea"};
    color: black;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    ${c};
    `,_=Object(E.b)(x.b)`
    display: block;
    padding: 0.5rem;
    background: ${"#ff5555"};
    color: ${"#f8f8f2"};
    white-space: pre-wrap;
    text-align: left;
    font-size: 0.9em;
    font-family: 'Source Code Pro', monospace;
    `;return n.a.createElement(a,{code:e,noInline:t,theme:{plain:{color:"#e7d2ed"},styles:[{types:["prolog","comment","doctype","cdata"],style:{color:"hsl(30, 20%, 50%)"}},{types:["property","tag","boolean","number","constant","symbol"],style:{color:"#f677e1"}},{types:["attr-name","string","char","builtin","insterted"],style:{color:"hsl(75, 70%, 70%)"}},{types:["operator","entity","url","string","variable","language-css"],style:{color:"hsl(40, 90%, 70%)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["regex","important"],style:{color:"#e90"}},{types:["atrule","attr-value","keyword"],style:{color:"#f677e1"}},{types:["punctuation","symbol"],style:{opacity:"0.7"}}]},scope:i},n.a.createElement(o,null,n.a.createElement(p,null,n.a.createElement(x.a,null)),n.a.createElement(j,null)),n.a.createElement(_,null))};const u="\n  function App() {\n    const [state, setState] = useState('idle');\n    const onClickHandler = () => {\n      setState('loading');\n      setTimeout(() => {\n        setState('success');\n      }, 2000);\n    }\n    return (\n      <ReactiveButton\n        buttonState={state}\n        onClick={onClickHandler}\n        color={'green'}\n        idleText={'I am in idle state'}\n        loadingText={<span><i className=\"reactive-btn-spinner\"></i>I am in loading state</span>}\n        successText={'I am in success state'}\n        errorText={'I am in error state'}\n        type={'button'}\n        className={'class1 class2'}\n        style={{ textAlign: 'center' }}\n        outline={true}\n        shadow={true}\n        rounded={false}\n        size={'large'}\n        block={false}\n        messageDuration={2000}\n        disabled={false}\n        buttonRef={null}\n        width={'200px'}\n        height={'50px'}\n      />\n    );\n  }\n".trim(),d={ReactiveButton:l.a,useState:r.useState},C=[{title:"Reactive",imageUrl:"img/reactive.svg",description:n.a.createElement(n.a.Fragment,null,"Replacing traditional button with reactive behaviour")},{title:"Customizable",imageUrl:"img/customizable.svg",description:n.a.createElement(n.a.Fragment,null,"Comes with proper customization option.")},{title:"Progress Indicator",imageUrl:"img/progress.svg",description:n.a.createElement(n.a.Fragment,null,"Knows what is happening behind your button click.")}];function P({imageUrl:t,title:e,description:i}){const s=Object(j.a)(t);return n.a.createElement("div",{className:Object(a.a)("col col--4 text--center",S.a.feature)},s&&n.a.createElement("div",{className:"text--center"},n.a.createElement("img",{className:S.a.featureImage,src:s,alt:e})),n.a.createElement("h3",null,e),n.a.createElement("p",null,i))}e.default=function(){const t=Object(p.a)(),{siteConfig:e={}}=t;return n.a.createElement(o.a,{title:""+e.title,description:"A React Button component that thinks like React."},n.a.createElement("header",{className:Object(a.a)("hero ",S.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"hero__title"},e.title),n.a.createElement("p",{className:"hero__subtitle"},e.tagline),n.a.createElement("div",{className:S.a.buttons},n.a.createElement(c.a,{className:Object(a.a)("",S.a.getStarted),to:Object(j.a)("docs/")},n.a.createElement(l.a,{color:"dark",size:"large",idleText:n.a.createElement("span",null,"Get Started \xa0\xa0",n.a.createElement(y.a,{icon:m.a})),width:"170px",height:"49px"}))))),n.a.createElement("main",null,n.a.createElement("section",{className:S.a.exampleComponent},n.a.createElement("div",{className:S.a.exampleComponent__container},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--12"},n.a.createElement("div",{className:S.a.exampleComponent__item},n.a.createElement(g,{code:u,scope:d,height:"250px"}))))))),n.a.createElement("main",null,C&&C.length>0&&n.a.createElement("section",{className:S.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},C.map((t,e)=>n.a.createElement(P,Object(s.a)({key:e},t))))))))}}}]);