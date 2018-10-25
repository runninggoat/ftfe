import React from 'react';
import { Divider } from "antd";

const intro='道取持主百市儿色平，千查油民对车布反，间格B证万局千。张又元济气手子选更进你，级点起结外因象支打，决气蠢思世两思问求。华格可统育使织式家认被传马油我类，做员时子识团孤形2自最求抓。层设众然没果始局来效便观，形长上月经打老种技定半较，物军6芳整特往率枕情。此热家验步无万学活上，离院果分放与使始进，任称杨县张样问志。节持基来置界素，会群束称。 必派多文厂今收育先，条连已不下或越真王，少杏知府走画定。商术王火说府些计龙增，心响类并术高少或区月，细政J清济秤V见Q。位同选思规很选大亲民，业米车合约要民开住然，事飞M动问和展批。众增全来成劳形特山条，运解克用米果科有装，派还豆两同大日段。级近别展包观划京，应圆那风事想求，制详C个干才。九总米劳权今断质采，即没厂求传志业史史，象询个记机心省。增强元飞色出最革，院土转些集每，采2呀图F。交具意体育已社织十意，条起大往专面飞风，质活束证赚县吼陕。严下色生别来，每较育究，开建委观。';
const str1 = intro.slice(5,160).length>50?intro.slice(5,160)+'...':intro;
const str2 = intro.length>50?intro.slice(50,90)+'...':intro;
const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";


export default () => (
  <div style={{width: '100%'}}>
  
  <Divider />
    <img src={img1}  style={{width:60,height:60,float:'left',margin:'10px 5px  60px' }}/>
    
    <span style={{fontSize:'10px', color: 'white'}}>
    <span style={{textDecoration:"underline"}}>导演老安</span>
    :{str1}
    </span>
    <h3 style={{fontSize:'10px', color: 'black',margin:'10px 0px' }} >2018/10/12   21:30
      <span style={{fontSize:'10px', color: 'black',float:'right'}}> 
       喜欢|回复
      </span>
    </h3>

    <Divider />

    <img src={img1}  style={{width:60,height:60,float:'left',margin:'10px 5px  60px' }}/>
    
    <span style={{fontSize:'10px', color: 'white'}}>
    <span style={{textDecoration:"underline"}}>演员娜丽</span>
    :{str2}
    <br/>
    <img src={img1}  style={{width:'100%',height:180 }}/>
    </span>
    <h3 style={{fontSize:'10px', color: 'black',margin:'10px 0px' }} >2018/10/12   21:30
      <span style={{fontSize:'10px', color: 'black',float:'right'}}> 
       喜欢|回复
      </span>
    </h3>

  </div>
  )