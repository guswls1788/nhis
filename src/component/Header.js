import { Component } from 'react/cjs/react.production.min';
import '../css/Header.css'
import jquery from 'jquery';
import $ from 'jquery';

class Header extends Component{
    
    componentDidMount(){
        $(document).ready(function(){
          $("#header #bottom .header_wrap .gnb,#header .sub_menu").hover(function(){
            $("#header .sub_menu").css("display","block")
          },function(){
            $("#header .sub_menu").css("display","none")
          })
          $("#header #bottom .header_wrap  .gnb ul li").hover(function(){
              $(this).find("a").css("color","#d7021b").addClass("active")
          },function(){
              $("#header #bottom .header_wrap  .gnb ul li").find("a").css("color","").removeClass("active")
          })
          $("#header .sub_menu .sub_menu_wrap .sub_gnb ul").hover(function(){
            var a= $(this).index()
            $("#header #bottom .header_wrap  .gnb ul li").eq(a).find("a").css("color","#d7021b").addClass("active")
            },function(){
                $("#header #bottom .header_wrap  .gnb ul li").find("a").css("color","").removeClass("active")
            })
          $("#header #top .header_wrap .right > ul > li.color").click(function(){
                $("#header #top .header_wrap .right > ul > li.color .arrow").css("transform","rotate(0deg)")
                $("#header #top .header_wrap .right ul li.color .box").hide()
                $(this).find("div").show()
                $(this).find("span").css("transform","rotate(180deg)")
            })
          $("#header #bottom .header_wrap .support .btn.search").click(function(){
              $(this).toggleClass("on")
              $("#header .search_wrap").toggleClass("show")
          })
        })
    }
    ModalMenu=()=>{
    this.props.ModalMenu()
    }
  render(){
    return(
      <div id="header">
          <div id="top">
             <div className='header_wrap'>
              <div className='left'>
                  <div className='zomm'>
                      <span>화면</span>
                      <button className='btn plus'></button>
                      <button className='btn minus'></button>
                  </div>
                  <div className='sound'>
                  <span>소리</span>
                      <button className='btn plus'></button>
                      <button className='btn minus'></button>
                      <button className='btn sound'></button>
                  </div>
              </div>
              <div className='right'>
                  <ul>
                      <li><a href='#'>로그인</a></li>
                      <li><a href='#'>회원가입</a></li>
                      <li><a href='#'>인증서안내</a></li>
                      <li><a href='#'>전체메뉴</a></li>
                      <li className='color language'>
                        <a href='#'>Language</a><span className='arrow'></span>
                        <div className='box'>
                            <ul>
                                <li><a href="#">English</a></li>
                                <li><a href="#">中文</a></li>
                                <li><a href="#">日本</a></li>
                                <li><a href="#">Tiếng Việt</a></li>
                            </ul>
                        </div> 
                      </li>
                      <li className='color part'>
                          <a href='#'>분야별업무사이트</a><span className='arrow'></span>
                          <div className='box'>
                              <ul>
                                  <li><a href='#'><div className='box_img'></div><span>사회보험<br/>통합징수 포털</span></a></li>
                                  <li><a href='#'><div className='box_img'></div><span>노인장기<br/>요양보험</span></a></li>
                                  <li><a href='#'><div className='box_img'></div><span>요양기관<br/>정보마당</span></a></li>
                                  <li><a href='#'><div className='box_img'></div><span>EDI<br/>서비스</span></a></li>
                                  <li><a href='#'><div className='box_img'></div><span>건강검진<br/>기관포털</span></a></li>
                                  <li><a href='#'><div className='box_img'></div><span>건강보험자료<br/>공유서비스</span></a></li>
                              </ul>
                          </div>
                      </li>
                  </ul>
              </div>
             </div>
          </div>
          <div id="bottom">
              <div className='header_wrap'>
                  <div id="logo"><a href="#"></a></div>
                  <div className='gnb'>
                      <ul>
                          <li><a href="#">민원여기요</a></li>
                          <li><a href="#">건강iN</a></li>
                          <li><a href="#">정책센터</a></li>
                          <li><a href="#">국민과함께</a></li>
                          <li><a href="#">공단요모조모</a></li>
                      </ul>
                  </div>
                  <div className='support'>
                      <button className='btn search'></button>
                      <button onClick={this.ModalMenu} className='btn menu'></button>
                  </div>
              </div>
          </div>
            <div  className="sub_menu">
              <div className="sub_menu_wrap">
                    <div className='sub_gnb'>
                        <ul>
                      <li><a href='#'>민원안내</a></li>
                      <li><a href='#'>개인민원</a></li>
                      <li><a href='#'>사업장민원</a></li>
                      <li><a href='#'>상담문의</a></li>
                      <li><a href='#'>신고센터</a></li>
                        </ul>
                        <ul>
                      <li><a href='#'>나의건강관리</a></li>
                      <li><a href='#'>가족건강관리</a></li>
                      <li><a href='#'>건강프로그램</a></li>
                      <li><a href='#'>건강생활</a></li>
                      <li><a href='#'>건강자료실</a></li>
                      <li><a href='#'>검진기관/병원찾기</a></li>
                      <li><a className='link' href='#'>국민건강알람</a></li>
                      <li><a href='#'>건강생활실천지원금제</a></li>
                        </ul>
                        <ul>
                      <li><a href='#'>국민건강보험</a></li>
                      <li><a className='link' href='#'>노인장기요양보험</a></li>
                      <li><a href='#'>정책홍보관</a></li>
                      <li><a href='#'>사회보험통합징수</a></li>
                      <li><a href='#'>권리구제제도</a></li>
                      <li><a className='link' href='#'>법령정보 건강Law</a></li> 
                        </ul>
                        <ul>
                      <li><a href='#'>정보공개</a></li>
                      <li><a className='link' href='#'>경영공시</a></li>
                      <li><a href='#'>국민참여</a></li>
                      <li><a href='#'>뉴스/소식</a></li>
                        </ul>
                        <ul>
                      <li><a href='#'>공단소개</a></li>
                      <li><a href='#'>조직 및 인원</a></li>
                      <li><a href='#'>홍보센터</a></li>
                      <li><a href='#'>경영철학</a></li>
                      <li><a href='#'>사회공헌</a></li>
                        </ul>
                    </div>
                  </div>
                    <div className='sub_bottom'>
                        <ul>
                            <li><a href="#">자주 찾는 메뉴</a></li>
                            <li><a href="#">건강보험제도 유형</a></li>
                            <li><a href="#">자격취득/가입</a></li>
                            <li><a href="#">진료 및 투약정보</a></li>
                            <li><a href="#">검진대상조회</a></li>
                        </ul>
                    </div>
            </div>
            <div className='search_wrap'>
                <div className='inner'>
                    <div className='search'>
                        <input placeholder='찾으시는 단어를 입력해 주세요.'/>
                        <a className='total_search'></a>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Header;
