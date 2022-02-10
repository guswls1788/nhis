import { Component } from 'react/cjs/react.production.min';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Graybackground.css'
import axios from 'axios';
import jquery from 'jquery';
import $ from 'jquery';


class Graybackground extends Component{
    constructor(props){
        super(props)
        this.state={
            side_banner_img:[
                {id:1,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/02%EC%82%AC%EC%9D%B4%EB%B2%84%ED%99%8D%EB%B3%B4%EA%B4%80.png"},
                {id:2,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/03%EA%B1%B4%EA%B0%95%EB%B3%B4%ED%97%98%ED%8C%9F%EC%BA%90%EC%8A%A4%ED%8A%B8.png"},
                {id:3,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/04%EA%B1%B4%EA%B0%95%EB%B3%B4%ED%97%98%EC%9B%B9%EC%A7%84.png"}
            ],
            graph_li:[
                {id:1,name:'감기'},
                {id:2,name:'눈병'},
                {id:3,name:'식중독'},
                {id:4,name:'천식'},
                {id:5,name:'피부염'},
            ],
            graph_data:[],
            graph_text:['관심','주의','','위험'],
            graph_text_total:''
        }
    }
    componentDidMount(){
        this.graphClick(1)
        $(document).ready(function(){
            $("#li1").addClass("on")
            $("#gray_background #background_wrap .background_about .state  .graph ul li").click(function(){
                $("#gray_background #background_wrap .background_about .state  .graph ul li").removeClass("on")                
                $(this).addClass("on")                
            })
            $("#gray_background #background_wrap .background_health .main_banner .main_banner_bottom>ul>li").hover(function(){
                $(this).find("div").show()
                $(this).find("a").addClass("ani")
            },function(){
                $(this).find("div").hide()
                $(this).find("a").removeClass("ani")
            })
        })
        
    }


    graphClick=async(data)=>{

        const dissCd=data
        const graph_list=await axios({
            method:'get',
            url:'/B550928/dissForecastInfoSvc/getDissForecastInfo?ServiceKey=M2qtErA0zHgy%2BGWZUfCrcnEISmUFZcYv8eH73FG08BBIR9c02icO5KcF2yp6gXi8u%2F25fo6c%2BsdMfGqbXhKxwg%3D%3D&type=json&numOfRows=1'
            +'&dissCd='+dissCd
        })
        this.setState({
            graph_data:graph_list.data.response.body.items
        })
        const risk=graph_list.data.response.body.items[0].risk
        console.log(graph_list.data.response.body.items[0])
        this.setState({
            graph_text_total:this.state.graph_text[risk-1]
        })
        const img=document.getElementById("ableu_img").src="https://www.nhis.or.kr/_res/_common/ableu/images/main/bg-health-noti-"+risk+".png"
    }
  render(){
    const now=new Date();
    const year = now.getFullYear();
    const month=now.getMonth()+1;
    const toMonth=month>=10?month:"0"+month
    const day=now.getDate();
    const today=day>=10?day:"0"+day
    const settings={
        dots:false,
        infinite:true,
        slidesToShow:1,
        autoplay: true,
        autoplaySpeed: 9000,
        slidesToScroll:1,
    }
    const side_bn_img=this.state.side_banner_img.map(
        (data)=>(<div className='slick' key={data.id}><img src={data.url} alt="홍보존_배너"></img></div>)
    )
    const graph_li=this.state.graph_li.map(
        (data)=>(<li id={'li'+data.id} onClick={()=>this.graphClick(data.id)}><a>{data.name}</a></li>)
    )
    return(
      <div id="gray_background">
          <div id="background_wrap">
              <div className='background_top'>
                  <div className='new_area'>
                      <ul>
                          <li><a href="#">공지사항</a></li>
                          <li><a href="#">채용공고</a></li>
                          <li><a href="#">보도자료</a></li>
                          <li><a href="#">입찰공고</a></li>
                          <li><a href="#">경영공시</a></li>
                      </ul>
                  </div>
                  <div className='health_area'>
                      <p className='title'>건강정보</p>
                      <ul>
                          <li><a href="#">가까운 병의원 찾기<span className='right'><img src="https://www.nhis.or.kr/_res/_common/ableu/images/main/icon-health-info-1.png"></img></span></a></li>
                          <li><a href="#">검진기관 찾기<span className='right'><img src="https://www.nhis.or.kr/_res/_common/ableu/images/main/icon-health-info-2.png"></img></span></a></li>
                          <li><a href="#">건강iN 매거진<span className='right'><img src="https://www.nhis.or.kr/_res/_common/ableu/images/main/icon-health-info-3.png"></img></span></a></li>
                          <li><a href="#">건강뉴스<span className='right'><img src="https://www.nhis.or.kr/_res/_common/ableu/images/main/icon-health-info-4.png"></img></span></a></li>
                      </ul>
                  </div>
                  <div className='guarantee_area'>
                      <div className='guarantee_top'>
                          <span className='title'>보장성강화</span>
                          <p>병원비 걱정없는 든든한 나라<br/>건강보험 보장성강화 대책을 알아보세요!</p>
                      </div>
                      <div className='guarantee_bottom'>
                          <span className='title'>건강보험연구원</span>
                          <p>Health Insurance Research<br/>Institute(HIRI)</p>
                      </div>
                  </div>
              </div>
              <div className='background_health'>
                  <div className='main_banner'>
                      <div className='main_banner_top'>
                          <span className='icon'></span>
                          <div className='text'>
                            <p className='top'>알아두면 건강해 지는 건강보험공단</p>
                            <p className='bottom'>주요정책</p>
                          </div>
                      </div>
                      <div className='main_banner_bottom'>
                          <ul>
                              <li><a href="#">소중한 나의 가족! 건강관리 쉽게 하는 방법은 없을까요?</a>
                                <div className='banner_box'>
                                    <span className='color'>가족건강관리</span>
                                    <span>서비스를 확인해 보세요!</span>
                                </div>
                              </li>
                              <li><a href="#">내가 받는 건강보험료 혜택! 얼마나 될까요?</a>
                                <div className='banner_box'>
                                    <span className='color'>내가 낸 보험료 혜택</span>
                                    <span>서비스를 확인해 보세요!</span>
                                </div>
                              </li>
                              <li><a href="#">공단은 지역사회에 어떤 일을 할까요?</a>
                                <div className='banner_box'>
                                    <span className='color white'>지역사회돌봄</span><span className='white'>에서</span>
                                    <span>서비스를 확인해 보세요!</span>
                                </div>
                              </li>
                              <li><a href="#">내 건강보험료는 어떻게 책정되었을까요?</a>
                                <div className='banner_box'>
                                    <span className='color'>보험료 부과 및 산점</span>
                                    <span>기분을 확인해 보세요!</span>
                                </div>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className='side_banner'>
                      <div className='side_banner_top'>
                          <p className='title'>이벤트</p>
                          <div className='num'>
                              <span>1 / 0</span>
                              <div className='arrow prev'></div>
                              <div className='stop'></div>
                              <div className='arrow next'></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='background_about'>
                  <div className='state'>
                        <p className='title'>국민건강 알람서비스</p>
                        <span className='data'>
                            {year}.{toMonth}.{today}
                        </span>
                        <span className='txt'>전국기준</span>
                            <div className='gr_img'>
                                <img id='ableu_img' src='https://www.nhis.or.kr/_res/_common/ableu/images/main/bg-health-noti-1.png'></img>
                                <span className='danger'>{this.state.graph_text_total}</span>
                            </div>
                        <div className='graph'>
                            <ul>
                                {graph_li}
                            </ul>
                        </div>
                  </div>
                  <div className='intro'>
                      <div className='top'>
                          <p className='title'>조직도</p>
                          <span className='desc'>국민건강보험공단의<br/>부서별 조직도를 확인해보세요.</span>
                      </div>
                      <div className='bottom'>
                          <p className='title'>지사찾기</p>
                          <span className='desc'>가까운 지사를 방문하시면<br/>민원업무를 처리하실 수 있습니다.</span>
                      </div>
                  </div>
                  <div className='banner'>
                      <div className='num'>
                            <p className='title'>홍보존 </p>
                            <div className='right'>
                              <span>1 / 3</span>
                              <div className='stop'></div>
                            </div>
                      </div>
                      <Slider {...settings}>{side_bn_img}</Slider>
                  </div>
              </div>
              <div className='background_news'>
                  <div className='notice'>
                      <p className='title'>고객센터</p>
                      <div className='wrap left'>
                          <div className='text'>
                            <p className='call'>1577-1000</p>
                            <p className='word_call'>(해외이용 : 82-33-811-2001)</p>
                            <p className='time'>업무 시간 09:00~18:00</p>
                            <p className='time_desc'>(이용료:발신자 부담)</p>
                          </div>
                          <span className='icon'></span>
                      </div>
                      <div className='wrap right'>
                          <p className='title'>외국인 민원센터</p>
                          <span className='icon'></span>
                      </div>
                  </div>
                  <div className='news'>
                      <p className='title'>소식지 신청/해지</p>
                      <div className='wrap'>
                          <p>더 빠르게<br/>건강보험 정책과<br/>정보를 제공합니다.</p>
                      </div>
                  </div>
                  <div className='app'>
                      <p className='title'>APP 다운로드</p>
                      <div className='wrap'>
                          <div className='android box'>
                              <div className='qr_code'>
                                  <img src="https://www.nhis.or.kr/_res/_common/ableu/images/main/qr-android.png" alt="android큐알코드"/>
                              </div>
                              <span className='name'>Android</span>
                          </div>
                          <div className='ios box'>
                              <div className='qr_code'>
                                  <img src="https://www.nhis.or.kr/_res/_common/ableu/images/main/qr-iso.png" alt="ios큐알코드"/>
                              </div>
                              <span className='name'>iOS</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Graybackground;
