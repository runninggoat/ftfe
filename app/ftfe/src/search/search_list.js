import React, { Component } from 'react'
import { Row, Col} from 'antd'
import Card from './search_card'
import img6 from '../image/006.jpg'
import img10 from '../image/010.jpg'
import { Pagination } from 'antd';

const time = '1460:59'
const title1='搜索匹配到的'
const title2='关键字'
const title3='变成粉色变成团队采访徐峥徐峥…'
const searchr=(
<span>
    <Col span={24}>
        <Row gutter={12}>
            <Col span={2} />
            <Col span={4} >
                <Card  
                img={img6} 
                time={time} 
                title1={title1} 
                title2={title2} 
                title3={title3}
                icon={img10}
                type1={'分类'}
                type2={'分类'}
                type3={'分类'}
                />
            </Col>
            <Col span={4} >
                <Card  
                img={img6} 
                time={time} 
                title1={title1} 
                title2={title2} 
                title3={title3}
                icon={img10}
                type1={'分类'}
                type2={'分类'}
                type3={'分类'}
                />
            </Col>
            <Col span={4} >
                <Card  
                img={img6} 
                time={time} 
                title1={title1} 
                title2={title2} 
                title3={title3}
                icon={img10}
                type1={'分类'}
                type2={'分类'}
                type3={'分类'}
                />
            </Col>
            <Col span={4} >
                <Card  
                img={img6} 
                time={time} 
                title1={title1} 
                title2={title2} 
                title3={title3}
                icon={img10}
                type1={'分类'}
                type2={'分类'}
                type3={'分类'}
                />
            </Col>
            <Col span={4} >
                <Card  
                img={img6} 
                time={time} 
                title1={title1} 
                title2={title2} 
                title3={title3}
                icon={img10}
                type1={'分类'}
                type2={'分类'}
                type3={'分类'}
                />
            </Col>
            <Col span={2} />
        </Row>
    </Col>
</span>)
export default class SearchList extends Component {
    render(){
        return(
            <div style={{
            background:'#FEFEFE',
            boxShadow:'0px 2px 31px 0px rgba(205,205,205,0.27)',
            }}>
                <Row gutter={8}>
                    {searchr}
                    {searchr}
                    {searchr}
                    {searchr}
                    {searchr}
                    <Col offset={16} span={24}>
                        <div style={{margin:'15px 0 30px 0'}}>
                            <Pagination defaultCurrent={2} total={200} />
                        </div>
                    </Col>
                </Row>
            
            </div>
        )
    }
}