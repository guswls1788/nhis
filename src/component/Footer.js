import { Component } from 'react/cjs/react.production.min';
import Slider from 'react-slick';
import '../css/Footer.css'
import jquery from 'jquery';
import $ from 'jquery';


class Footer extends Component{
    constructor(props){
        super(props)
      

    }
    componentDidMount(){
        $(document).ready(function(){
          $("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_area .default").click(function(){
            var idx = $(this).parent().index()
            $(this).toggleClass("click")
            $("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_box").eq(idx).toggleClass("show")
          })
          $("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_box ul li a").click(function(e){
              e.preventDefault()
              var idx = $(this).closest("div").parent().index()
              var $site_a_attr=$(this).attr("href")
              $("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_area").eq(idx).children(".site_box").toggleClass("show")
              $("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_area").eq(idx).children(".default").toggleClass("click")
              $("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_area").eq(idx).children(".site").find("a").attr("href",$site_a_attr)
              $("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_area").eq(idx).find("button").eq(0).text($(this).text())
            //   alert($("#footer .footer_wrap .footer_wrap_top .footer_wrap_right .site_area").eq(idx).find("button").eq(0).element.innerHTML)
            // alert($(this).attr("href"))
          })
        })
      }
      SiteClick=(idx)=>{
          alert(idx)
      }
  render(){
    return(
      <div id="footer">
          <div className='footer_wrap'>
              <div className='footer_wrap_top'>
                  <ul>
                      <li><a href='#'>이용약관</a></li>
                      <li><a href='#'>영상정보처리기기 운영지침</a></li>
                      <li><a className='color' href='#'>개인정보처리방침</a></li>
                      <li><a href='#'>온라인도우미</a></li>
                  </ul>
                  <div className='footer_wrap_right'>
                      <div className='site_area'>
                         <button className='default'>내부관련사이트</button>
                         <button className='site'><a target="_blank" href="#">이동</a></button>
                         <div className='site_box'>
                             <ul>
                                 <li><a href="https://www.longtermcare.or.kr/npbs/indexr.jsp">노인장기요양보험</a></li>
                                 <li><a href="https://si4n.nhis.or.kr/jpza/JpZaa00101.do">사회보험징수포털</a></li>
                                 <li><a href="https://medicare.nhis.or.kr/portal/index.do">요양기관정보마당 사이트</a></li>
                                 <li><a href="https://edi.nhis.or.kr/homeapp/wep/m/retrieveMain.xx">국민건강보험 EDI서비스</a></li>
                                 <li><a href="https://sis.nhis.or.kr/nxui/index.do">건강관리포털시스템</a></li>
                                 <li><a href="https://lifenhis.learningfactory.co.kr/userLogin.do">국가건강검진교육연수원</a></li>
                                 <li><a href="https://nhiss.nhis.or.kr/bd/ay/bdaya001iv.do;jsessionid=fzdLZlCZGuLgpJxHoipPH56ev1XsygWPAA3PIvRVZcSGftoepq60A81etCXSyMcK.primrose2_servlet_engine10">국민건강보험자료 공유서비스</a></li>
                                 <li><a href="https://hrd.nhis.or.kr/portal/home/mainIntroAction.do">국민건강보험공단 인재개발원</a></li>
                                 <li><a href="http://lib.nhis.or.kr/">국민건강보험공단 전문도서관</a></li>
                                 <li><a href="https://www.nhis.or.kr/family/retrieveFamilyLogin.do">국민건강보험공단 공단가족</a></li>
                             </ul>
                         </div>
                      </div>
                      <div className='site_area'>
                         <button className='default'>관련사이트</button>
                         <button className='site'><a target="_blank" href="#">이동</a></button>
                         <div className='site_box'>
                             <ul>
                                 <li><a href="https://www.xn--2i4bo5fgwadewe.kr/sgcf/">서울요양원</a></li>
                                 <li><a href="https://www.nhimc.or.kr/index.do">일산병원</a></li>
                                 <li><a href="https://share.go.kr/main_www_2018.jsp">행정정보공동이용센터</a></li>
                                 <li><a href="https://www.nps.or.kr/jsppage/main.jsp">국민연금</a></li>
                                 <li><a href="https://www.comwel.or.kr/comwel/main.jsp">근로복지공단</a></li>
                                 <li><a href="http://www.mohw.go.kr/react/index.jsp">보건복지부</a></li>
                                 <li><a href="https://www.acrc.go.kr/acrc/index.do">국민권익위원회</a></li>
                                 <li><a href="https://www.giro.or.kr/">인터넷 지로납부</a></li>
                                 <li><a href="https://www.hira.or.kr/main.do">건강보험심사평가원</a></li>
                                 <li><a href="https://www.gov.kr/portal/main">정부24</a></li>
                                 <li><a href="https://efamily.scourt.go.kr/index.jsp">대한민국 법원 전자가족관계</a></li>
                                 <li><a href="https://www.129.go.kr/">보건복지부 인터넷채팅상담</a></li>
                                 <li><a href="https://data.kihasa.re.kr/">보건복지부 통계포털</a></li>
                                 <li><a href="http://www.ssis.or.kr/index.do">한국사회보장정보원</a></li>
                                 <li><a href="https://www.ei.go.kr/ei/eih/cm/hm/main.do">고용보험 인터넷서비스</a></li>
                                 <li><a href="https://total.comwel.or.kr/">고용산재보험 토탈서비스</a></li>
                                 <li><a href="https://www.neca.re.kr/index.do">한국보건의료연구원</a></li>
                                 <li><a href="http://www.k-medi.or.kr/">한국의료분쟁조정중재원</a></li>
                                 <li><a href="https://www.hikorea.go.kr/Main.pt">하이코리아</a></li>
                                 <li><a href="http://www.obnhic.co.kr/">국민건강보험 동우회</a></li>
                                 <li><a href="https://www.4insure.or.kr/ins4/ptl/Main.do">4대사회보험 정보연계센터</a></li>
                                 <li><a href="https://www.safekorea.go.kr/idsiSFK/neo/main/main.html">행정안전부 국민재난안전포털</a></li>
                             </ul>
                         </div>
                      </div>
                  </div>
              </div>
              <div className='footer_wrap_bottom'>
                  <div className='footer_bottom_txt'>
                      <p>본 홈페이지에 게시된 이메일주소가 수집되는 것을 거부하며, 이를 위반 시 정보통신망법에 의해 처벌됨을 유념하시기 바랍니다.<br/>
                      26464 강원도 원주시 건강로 32(반곡동) 국민건강보험공단 고객센터 :1577-1000(발신자 부담) 업무시간 : 09시~18시(월~금)<br/>
                      Copyright @ 2020 by National Health Insurance Service. All rights reserved.</p>
                  </div>
                  <div className='list'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                  </div>
                  <div className='sns_list'>
                      <ul>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                          <li><a href="#"></a></li>
                      </ul>
                  </div>
              </div>
          </div>

      </div>
    )
  }
}

export default Footer;
