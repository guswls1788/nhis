import { Component } from 'react/cjs/react.production.min';
import '../css/Footer.css'
import '../css/Menu_modal.css'
import jquery from 'jquery';
import $ from 'jquery';


class Modal extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $(document).ready(function(){
            $("#menu_modal .menu_wrap .menu_content .menu_side ul li").click(function(){
                var idx=$(this).index()
                $("#menu_modal .menu_wrap .menu_content .menu_side ul li").removeClass("color")
                $(this).addClass("color")
                $("#menu_modal .menu_wrap .menu_content .menu_right .menu_right_list").hide()
                $("#menu_modal .menu_wrap .menu_content .menu_right .menu_right_list").eq(idx).show()
            })
        })
        
    }
    ModalMenu=()=>{
        this.props.ModalMenu()
        }
  render(){
    return(
      <div id="menu_modal">
          <div className='menu_wrap'>
              <div className='menu_wrap_top'><p>전체메뉴</p><a onClick={this.ModalMenu} className='close'></a></div>
              <div className='link'>
                  <ul>
                      <li><a>공동인증서안내</a></li>
                      <li><a>홈페이지도움센터</a></li>
                      <li><a>고객센터</a></li>
                      <li><a>모바일서비스안내</a></li>
                  </ul>
              </div>
              <div className='menu_content'>
                  <div className='menu_side'>
                      <ul>
                          <li className='color'>민원여기요</li>
                          <li>건강iN</li>
                          <li>정책센터</li>
                          <li>국민과함께</li>
                          <li>공단요모조모</li>
                          <li>기타</li>
                      </ul>
                  </div>
                  <div className='menu_right'>
                      <div className='menu_right_list'>
                          <div className='menu_area'>
                              <h2>민원안내</h2>
                              <ul>
                                  <li className='left'><a>개인민원안내</a>
                                    <ul>
                                        <li><a>민원업무 목록</a></li>
                                        <li><a>민원서비스 변경안내</a></li>
                                        <li><a>민원신청따라하기</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>사업장민원안내</a>
                                    <ul>
                                        <li><a>민원업무 목록</a></li>
                                        <li><a>민원신청따라하기</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>자주묻는질문</a>
                                     <ul>
                                           <li><a>자주묻는질문</a></li>
                                           <li><a>보안프로그램장애해결</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>서식자료실</a></li>
                                  <li className='left'><a>장기요양 서식자료실</a></li>
                                  <li className='left'><a>사업장 신고서식</a></li>
                                  <li className='left'><a>무인민원발급안내</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>개인민원</h2>
                              <ul>
                                  <li className='left'><a>개인민원업무 목록</a></li>
                                  <li className='left'><a>증명서 발급/확인</a>
                                    <ul>
                                        <li><a>자격확인서</a></li>
                                        <li><a>자격득실확인서</a></li>
                                        <li><a>보험료 완납증명서</a></li>
                                        <li><a>보험료 납부확인서</a></li>
                                        <li><a>건강보험 본인부담금 확인서</a></li>
                                        <li><a>기타징수금 납부확인서</a></li>
                                        <li><a>차상위본인부담경감증명서</a></li>
                                        <li><a>건강보험증 발급 신청</a></li>
                                        <li><a>증명서진위확인</a></li>
                                        <li><a>증명서 팩스발급 처리결과 조회</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>자격조회</a>
                                     <ul>
                                           <li><a>자격사항</a></li>
                                           <li><a>급여정지사항</a></li>
                                           <li><a>지역자격 취득변동사항</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>보험료조회</a>
                                     <ul>
                                           <li><a>지역보험료조회</a></li>
                                           <li><a>홈페이지 납부 보험료</a></li>
                                           <li><a>고지내역조회</a></li>
                                           <li><a>사회보험료 완납조회</a></li>
                                           <li><a>직장보험료조회</a></li>
                                           <li><a>4대보험료계산</a></li>
                                           <li><a>연말정산내역</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>보험료납부</a>
                                    <ul>
                                           <li><a>보험료납부</a></li>
                                           <li><a>보험료대납</a></li>
                                           <li><a>자동이체신청</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>보험료고지서</a>
                                     <ul>
                                           <li><a>이메일 고지서 신청</a></li>
                                           <li><a>모바일 고지서 신청</a></li>
                                           <li><a>홈페이지 고지서 신청</a></li>
                                           <li><a>고지서 송달지 변경 신청</a></li>
                                           <li><a>보험료 고지서 재발급</a></li>
                                           <li><a>홈페이지 고지내역 조회</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>보험급여</a>
                                    <ul>
                                           <li><a>진료받은 내용 및 신고</a></li>
                                           <li><a>진료받은 내용 및 신고포상금 제도</a></li>
                                           <li><a>임신/출산 진료비</a></li>
                                           <li><a>난임시술대상자 잔여급여횟수 조회</a></li>
                                           <li><a>치석제거 진료정보 조회</a></li>
                                           <li><a>현금급여 지급내역 조회</a></li>
                                           <li><a>산정특례 등록내역 조회</a></li>
                                           <li><a>대여가능 보조기기 조회</a></li>
                                           <li><a>분만취약지 재택의료 시범사업</a></li>
                                           <li><a>요양비청구</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>환급금(지원금) 조회/신청</a>
                                     <ul>
                                           <li><a>환급금(지원금) 조회/신청</a></li>
                                           <li><a>환급금(지원금) 신청내역 조회</a></li>
                                           <li><a>환급금(지원금) 안내</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>건강검진</a>
                                     <ul>
                                           <li><a>검진대상여부 조회</a></li>
                                           <li><a>건강검진결과 조회</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>사업장 의료비 자료제공 동의</a></li>
                                  <li className='left'><a>외국인 민원센터 예약</a></li>
                                  <li className='left'><a>팩스 수신 결과 조회</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>사업장민원</h2>
                              <ul>
                                  <li className='left'><a>사업장민원업무 목록</a></li>
                                  <li className='left'><a>조회/발급</a>
                                    <ul>
                                        <li><a>사업장직원조회</a></li>
                                        <li><a>사업장 적용 통보서</a></li>
                                        <li><a>보험료 고지/납부현황</a></li>
                                        <li><a>산출내역조회</a></li>
                                        <li><a>보험료납부확인서</a></li>
                                        <li><a>사회보험료 완납조회</a></li>
                                        <li><a>보험료 환급금 조회</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>보험료납부</a>
                                     <ul>
                                           <li><a>보험료납부</a></li>
                                           <li><a>보험료납부현황</a></li>
                                           <li><a>이메일고지</a></li>
                                           <li><a>모바일고지</a></li>
                                           <li><a>보험료 고지서 재발급</a></li>
                                           <li><a>인터넷지로납부</a></li>
                                           <li><a>자동이체신청</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>증명서 발급사실 확인</a>
                                     <ul>
                                           <li><a>사업장 적용통보서 및 기타 징수금 납부 확인서</a></li>
                                           <li><a>기타(자격득실확인서 등)</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>EDI서비스</a></li>
                                  <li className='left'><a>사업장 신고서식</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>상담문의</h2>
                              <ul>
                                  <li className='left'><a>상담문의안내</a></li>
                                  <li className='left'><a>개인 상담</a></li>
                                  <li className='left'><a>일반 상담</a></li>
                                  <li className='left'><a>칭찬해요/속상해요</a></li>
                                  <li className='left'><a>카카오상담톡</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>신고센터</h2>
                              <ul>
                                  <li className='left'><a>부당청구요양기관 신고</a>
                                    <ul>
                                        <li><a>부당청구요양기관 신고안내</a></li>
                                        <li><a>부당청구요양기관 신고하기</a></li>
                                        <li><a>부당청구요양기관 신고결과조회</a></li>
                                        <li><a>거짓청구 요양기관 명단공표</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>익명신고(헬프라인)</a></li>
                                  <li className='left'><a>예산낭비신고</a>
                                     <ul>
                                        <li><a>예산낭비 신고안내</a></li>
                                        <li><a>예산낭비 신고/제안하기</a></li>
                                        <li><a>신고결과조회</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>청탁금지위반신고</a>
                                    <ul>
                                        <li><a>청탁금지위반 신고안내</a></li>
                                        <li><a>청탁금지위반 신고하기</a></li>
                                        <li><a>청탁금지위반 신고결과조회</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>1회용 주사기 등 재사용 신고</a>
                                     <ul>
                                        <li><a>1회용 주사기 등 재사용 신고안내</a></li>
                                        <li><a>1회용 주사기 등 재사용 신고하기</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>불법개설기관신고</a>
                                     <ul>
                                        <li><a>불법개설기관 신고안내</a></li>
                                        <li><a>불법개설기관 신고하기</a></li>
                                        <li><a>불법개설기관 신고결과조회</a></li>
                                    </ul>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className='menu_right_list'>
                          <div className='menu_area'>
                              <h2>나의 건강관리</h2>
                              <ul>
                                  <li className='left'><a>건강검진정보</a>
                                    <ul>
                                        <li><a>건강점진 실시안내</a></li>
                                        <li><a>검진대상조회</a></li>
                                        <li><a>문진표/평가도구 작성</a></li>
                                        <li><a>건강검진 결과조회</a></li>
                                        <li><a>건강검진 제외신청</a></li>
                                        <li><a>건강검진 실시확인서(직장제출용)</a></li>
                                        <li><a>건강검진 내역서 출력(운전면허적성검사용)</a></li>
                                        <li><a>건강검진 관련법령</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강검진 로드맵</a></li>
                                  <li className='left'><a>진료 및 투약정보</a></li>
                                  <li className='left'><a>자가건강기록</a>
                                     <ul>
                                           <li><a>나의건강기록</a></li>
                                           <li><a>나의 건강기록 현황</a></li>
                                           <li><a>건강보고서</a></li>
                                           <li><a>(구)똑건업 서비스 안내</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>나의검진현황</a>
                                     <ul>
                                           <li><a>검진정보목록</a></li>
                                           <li><a>검진정보입력</a></li>
                                           <li><a>생활습관 설문입력</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>나의 검진 현황안내</a>
                                     <ul>
                                           <li><a>대사증후군</a></li>
                                           <li><a>측정혈압</a></li>
                                           <li><a>공복혈당수치</a></li>
                                           <li><a>혈중지질수치</a></li>
                                           <li><a>비만</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>생활습관</a>
                                     <ul>
                                           <li><a>흡연</a></li>
                                           <li><a>음주</a></li>
                                           <li><a>운동</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>건강예측</a>
                                     <ul>
                                           <li><a>건강나이 알아보기</a></li>
                                           <li><a>뇌졸중 예측</a></li>
                                           <li><a>심장질환 예측</a></li>
                                           <li><a>골다공증성 골절 예측</a></li>
                                           <li><a>당뇨병 예측(인공지능)</a></li>
                                           <li><a>심뇌혈관 예측(인공지능)</a></li>
                                           <li><a>우리아이 AI 건강지킴이</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>약제비 본인부담 차등적용<br/>질환지료</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>가족건강관리</h2>
                              <ul>
                                  <li className='left'><a>자녀(영유아) 건강검진정보</a>
                                    <ul>
                                        <li><a>검진대상조회</a></li>
                                        <li><a>문진표/발달선별 검사지 작성</a></li>
                                        <li><a>영유아 건강검진 결과조회</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>자녀(영유아)수첩</a>
                                    <ul>
                                        <li><a>자녀관리</a></li>
                                        <li><a>예방접종관리</a></li>
                                        <li><a>병원진료관리</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>자녀(영유아)진료 및 투약 정보</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>건강프로그램</h2>
                              <ul>
                                  <li className='left'><a>대사증후군 프로그램</a></li>
                                  <li className='left'><a>금연프로그램</a>
                                    <ul>
                                        <li><a>금연정보</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>비만개선프로그램</a>
                                    <ul>
                                        <li><a>비만개선프로그램 안내</a></li>
                                        <li><a>비만테스트</a></li>
                                        <li><a>비만자료실</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>만성질환관리</a>
                                    <ul>
                                        <li><a>건강지원서비스</a></li>
                                        <li><a>자가관리수준진단</a></li>
                                        <li><a>고혈압질환관리</a></li>
                                        <li><a>당뇨병질환관리</a></li>
                                        <li><a>일차의료 만성질환관리 시범사업</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강상담/복약상담</a>
                                    <ul>
                                        <li><a>건강상담</a></li>
                                        <li><a>복약상담</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강증진센터</a>
                                    <ul>
                                        <li><a>건강증진센터 이용안네</a></li>
                                        <li><a>건강증진센터 측정결과</a></li>
                                        <li><a>건강증진센터 운동결과</a></li>
                                        <li><a>건강증진센터 영양상담</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>지역별 건강관리프로그램</a></li>
                                  <li className='left'><a>건강백세운동교실</a></li>
                                  <li className='left'><a>아동치과 주치의</a>
                                    <ul>
                                        <li><a>아동치과주치의 시범사업</a></li>
                                        <li><a>보호자관계확인</a></li>
                                        <li><a>아동치과주치의 서비스 이용종합</a></li>
                                    </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>건강생활</h2>
                              <ul>
                                  <li className='left'><a>자가건강진단</a>
                                    <ul>
                                        <li><a>증상평가</a></li>
                                        <li><a>질환평가</a></li>
                                        <li><a>여성평가</a></li>
                                        <li><a>백세건강</a></li>
                                        <li><a>정신건강</a></li>
                                        <li><a>음주/영양/운동</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>운동과생활</a>
                                    <ul>
                                        <li><a>걷기</a></li>
                                        <li><a>자전거</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>임출산육아</a>
                                    <ul>
                                        <li><a>임신</a></li>
                                        <li><a>출산</a></li>
                                        <li><a>육아</a></li>
                                        <li><a>임신가능기간</a></li>
                                        <li><a>임출산가이드</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>영양과건강</a></li>
                                  <li className='left'><a>청소년건강</a>
                                    <ul>
                                        <li><a>청소년정서장애</a></li>
                                        <li><a>청소년행동장애</a></li>
                                        <li><a>청소년학교생활</a></li>
                                        <li><a>청소년흡연</a></li>
                                        <li><a>청소년치아건강</a></li>
                                        <li><a>청소년영양</a></li>
                                        <li><a>청소년도움기관</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>정신겅강</a>
                                    <ul>
                                        <li><a>정신건강 바로알기</a></li>
                                        <li><a>우울증바로알기</a></li>
                                        <li><a>정신건강 도우미기관</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강/질병정보</a>
                                    <ul>
                                        <li><a>건강/질병정보 안내</a></li>
                                        <li><a>진단/검사정보 안내</a></li>
                                        <li><a>신체부위정보</a></li>
                                        <li><a>인체 주요 장기정보</a></li>
                                        <li><a>의학백과사전 검색</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>해외여행의학/질병정보</a>
                                    <ul>
                                        <li><a>일반적인 주의사항</a></li>
                                        <li><a>질병정보</a></li>
                                        <li><a>예방접종</a></li>
                                        <li><a>해외여행 질병정보센터</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>예장접종도우미</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>건강자료실</h2>
                              <ul>
                                  <li className='left'><a>의약품정보</a>
                                    <ul>
                                        <li><a>의약품정보검색</a></li>
                                        <li><a>일반사용시 주의사항</a></li>
                                        <li><a>생애주기별 사용정보</a></li>
                                        <li><a>안전상비약 길라잡이</a></li>
                                        <li><a>의약품 안전사용 관련 사이트</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강소식</a>
                                    <ul>
                                        <li><a>건강뉴스</a></li>
                                        <li><a>전문가칼럼</a></li>
                                        <li><a>건강iN매거진</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강동영상</a>
                                    <ul>
                                        <li><a>건강검진</a></li>
                                        <li><a>만성질환</a></li>
                                        <li><a>암질환</a></li>
                                        <li><a>질병예방과 전염성 질환</a></li>
                                        <li><a>청소년건강</a></li>
                                        <li><a>일산병원 겅강강좌</a></li>
                                        <li><a>운동매뉴얼</a></li>
                                        <li><a>건강백세운동표준프로그램</a></li>
                                        <li><a>청소년생활체육</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강웹툰</a>
                                    <ul>
                                        <li><a>일반건강웹툰</a></li>
                                        <li><a>청소년건강웹툰</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강전자도서</a></li>
                                  <li className='left'><a>건강FAQ</a></li>
                                  <li className='left'><a>건강청구 공지사항</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>검진기관/병원찾기</h2>
                              <ul>
                                  <li className='left'><a>검진기관정보</a>
                                    <ul>
                                        <li><a>검진기관찾기</a></li>
                                        <li><a>검진기관 평가정보</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>병(의)원정보</a>
                                    <ul>
                                        <li><a>병(의)원찾기</a></li>
                                        <li><a>금연치료 의료기관 찾기</a></li>
                                        <li><a>간호·간병 통합서비스 병원찾기</a></li>
                                        <li><a>장애인 건강주치의 의료기관 찾기</a></li>
                                        <li><a>일차의료 만성질환관리 시범사업 참여 의료기관 찾기</a></li>
                                        <li><a>병원평가정보</a></li>
                                        <li><a>아동치과주치의 의료기관 찾기</a></li>
                                    </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>국민건강알람</h2>
                              <ul>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>건강생활실천지원금제</h2>
                              <ul>
                                  <li className='left'><a>건강생활실천지원금제 제도소개</a></li>
                                  <li className='left'><a>건강생활실천지원금제 참여신청</a></li>
                                  <li className='left'><a>나의건강생활실천지원금제</a></li>
                                  <li className='left'><a>지원금 조회</a></li>
                                  <li className='left'><a>지원금 전환</a></li>
                                  <li className='left'><a>종료신청</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className='menu_right_list'>
                          <div className='menu_area'>
                              <h2>국민건강보험</h2>
                              <ul>
                                  <li className='left'><a>건강보험의 이해</a>
                                    <ul>
                                        <li><a>건강보험 적용대상 및 인구</a></li>
                                        <li><a>건강보험보험료</a></li>
                                        <li><a>건강보험 보험재정</a></li>
                                        <li><a>건강보험 보험급여</a></li>
                                        <li><a>외국인·재외국민 건강보험제도</a></li>
                                        <li><a>건강보험과 민간보험</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>귑게 이해하는 국민건강보험</a></li>
                                  <li className='left'><a>자격</a>
                                     <ul>
                                           <li><a>자격취득/가입</a></li>
                                           <li><a>자격상실/탈퇴</a></li>
                                           <li><a>피부양자 취득</a></li>
                                           <li><a>피부양자 상실</a></li>
                                           <li><a>지역가입자 주소변경</a></li>
                                           <li><a>건강보험증 발급</a></li>
                                           <li><a>건강보험 추가증</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>보험료</a>
                                     <ul>
                                           <li><a>보험료 부과/산정</a></li>
                                           <li><a>보험료 경감/면제</a></li>
                                           <li><a>보험료 납부/정산</a></li>
                                           <li><a>보험료조정</a></li>
                                           <li><a>독촉/체납처분(지역가입자)</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>건강검진</a>
                                     <ul>
                                           <li><a>제도소개</a></li>
                                           <li><a>건강검진기본법</a></li>
                                           <li><a>실시기준 및 운영세칙</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>보험급여</a>
                                     <ul>
                                           <li><a>보험급여개요</a></li>
                                           <li><a>요양급여의 종류</a></li>
                                           <li><a>요양급여에 관한 규칙</a></li>
                                           <li><a>의료비신청</a></li>
                                           <li><a>의료비지원</a></li>
                                           <li><a>건강프로그램</a></li>
                                           <li><a>진료내역</a></li>
                                           <li><a>주요 민간단체 의료비 지원사업</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>의료급여</a>
                                     <ul>
                                           <li><a>제도안내</a></li>
                                           <li><a>자격대상 및 기간</a></li>
                                           <li><a>급여비용의 부담</a></li>
                                           <li><a>진료체계 및 급여비용지급</a></li>
                                     </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>노인장기요양보험</h2>
                              <ul>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>정책홍보관</h2>
                              <ul>
                                  <li className='left'><a>보장성강화안내</a>
                                    <ul>
                                        <li><a>보장성강화 정책안내</a></li>
                                        <li><a>숫자로 보는 보장성강화</a></li>
                                        <li><a>보장성강화 스토리룸</a></li>
                                        <li><a>보장성강화 뉴스룸</a></li>
                                        <li><a>보장성강화 자주묻는질문</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>지역사회통합돌봄 안내</a>
                                    <ul>
                                        <li><a>지역사회통합돌봄 정책안내</a></li>
                                        <li><a>선도사업추진계획</a></li>
                                        <li><a>시범사업추진계획</a></li>
                                        <li><a>지역사회통합돌봄 스토리룸</a></li>
                                        <li><a>지역사회통합돌봄 뉴스룸</a></li>
                                        <li><a>지역사회통합돌봄 해외사례</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>분리과세 주택임대금융소득 부과안내</a>
                                    <ul>
                                        <li><a>정책안내</a></li>
                                        <li><a>스토리룸</a></li>
                                        <li><a>자주 묻는 질문&amp;답변</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>긴규 부과자료 적용안내</a>
                                    <ul>
                                        <li><a>정책안내</a></li>
                                        <li><a>스토리룸</a></li>
                                        <li><a>부담완화 방안</a></li>
                                        <li><a>자주 묻는 질문&amp;답변</a></li>
                                    </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>사회보험통합징수</h2>
                              <ul>
                                  <li className='left'><a>토압징수 제도안내</a>
                                    <ul>
                                        <li><a>연혁</a></li>
                                        <li><a>제도안내</a></li>
                                        <li><a>이전과 달라지는 내용</a></li>
                                        <li><a>외궁의 사례</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>사회보험료 고지 및 납부안내</a></li>
                             </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>권리구제제도</h2>
                              <ul>
                                  <li className='left'><a>자가건강진단</a>
                                    <ul>
                                        <li><a>이의신청제도 소개</a></li>
                                        <li><a>이의신청위원회</a></li>
                                        <li><a>이의신청 관련법령</a></li>
                                        <li><a>이의신청 관련용어</a></li>
                                        <li><a>이의신청제도 FAQ</a></li>
                                        <li><a>이의신청방법/서식</a></li>
                                        <li><a>이의신청/취하 및 조회</a></li>
                                        <li><a>이의신청 공지사항</a></li>
                                        <li><a>이의신청위원회 검토자료</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>징수심사청구</a>
                                    <ul>
                                        <li><a>징수심사청구제도 소개</a></li>
                                        <li><a>징수심사위원회</a></li>
                                        <li><a>심사청구 신청</a></li>
                                        <li><a>심사청구/취하 및 조회</a></li>
                                        <li><a>심사청구방법</a></li>
                                        <li><a>심사청구 방법/서식</a></li>
                                    </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>법령정보 건강Law</h2>
                              <ul>
                              </ul>
                          </div>
                      </div>
                      <div className='menu_right_list'>
                          <div className='menu_area'>
                              <h2>정보공개</h2>
                              <ul>
                                  <li className='left'><a>정보공개제도 안내</a>
                                    <ul>
                                        <li><a>정보공개제도란</a></li>
                                        <li><a>청구권자 및 대상정보</a></li>
                                        <li><a>청구 및 처리절차</a></li>
                                        <li><a>비공개대상 세부기준</a></li>
                                        <li><a>정보공개담당자</a></li>
                                        <li><a>수수료정보</a></li>
                                        <li><a>관련법령</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>사전정보공개</a>
                                     <ul>
                                           <li><a>국민생활 정보</a></li>
                                           <li><a>고액·상습 체납자 공개</a></li>
                                           <li><a>법령/업무기준 정보</a></li>
                                           <li><a>통계 정보</a></li>
                                           <li><a>기타사무 정보</a></li>
                                           <li><a>사업실명제</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>정보목록</a></li>
                                  <li className='left'><a>정보공개청구</a>
                                     <ul>
                                           <li><a>정보공개서식</a></li>
                                           <li><a>정보공개신청</a></li>
                                           <li><a>정보공개 진행상황확인</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>공공데이터 제공</a></li>
                                  <li className='left'><a>공시송달</a></li>
                                  <li className='left'><a>통합공시</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>경영공시</h2>
                              <ul>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>국민참여</h2>
                              <ul>
                                  <li className='left'><a>국민토론방</a>
                                    <ul>
                                        <li><a>토론방 안내</a></li>
                                        <li><a>토론방</a></li>
                                        <li><a>지난 토론 보기</a></li>
                                        <li><a>토론 주제 등록</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>국민제안</a>
                                    <ul>
                                        <li><a>국민제안안내</a></li>
                                        <li><a>국민제안등록</a></li>
                                        <li><a>나의제안확인</a></li>
                                        <li><a>제안목록</a></li>
                                        <li><a>우수제안사례</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>자유게시판</a></li>
                                  <li className='left'><a>건강보험 모니터단 커뮤니티</a>
                                    <ul>
                                        <li><a>모니터단 소개</a></li>
                                        <li><a>모니터단 모니터링 실시안내 및 결과</a></li>
                                        <li><a>모니터단 제안등록</a></li>
                                        <li><a>모니터단 나의제안 확인</a></li>
                                        <li><a>모니터단 회원정보 변경</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>시민참여혁신단</a>
                                    <ul>
                                        <li><a>시민참여혁신단 소개</a></li>
                                        <li><a>시민참여혁신단 혁신 모니터링</a></li>
                                        <li><a>자유의견 등록</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>IT기술제안</a>
                                    <ul>
                                        <li><a>IT기술제안 안내</a></li>
                                        <li><a>IT제품 제안신청서 등록</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>국민목소리 반영함</a>
                                    <ul>
                                        <li><a>국민목소리 반영함 이용안내</a></li>
                                        <li><a>주요 개선 사례</a></li>
                                        <li><a>추진 불가 사례</a></li>
                                    </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>뉴스/소식</h2>
                              <ul>
                                  <li className='left'><a>공지사항</a></li>
                                  <li className='left'><a>포토뉴스</a></li>
                                  <li className='left'><a>보도자료</a></li>
                                  <li className='left'><a>담배소송</a></li>
                                  <li className='left'><a>웹진</a></li>
                                  <li className='left'><a>공고입찰</a>
                                    <ul>
                                        <li><a>공고입찰</a></li>
                                        <li><a>거래희망업체 등록신청</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>채용</a>
                                    <ul>
                                        <li><a>인재상</a></li>
                                        <li><a>채용</a></li>
                                        <li><a>JOB ALIO</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>이벤트</a></li>
                             </ul>
                          </div>
                      </div>
                      <div className='menu_right_list'>
                          <div className='menu_area'>
                              <h2>공단소개</h2>
                              <ul>
                                  <li className='left'><a>이사장</a>
                                    <ul>
                                        <li><a>이사장 인사말</a></li>
                                        <li><a>현장/갤러리</a></li>
                                        <li><a>인터뷰/메시지</a></li>
                                        <li><a>역대 이사장</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>비전 및 핵심가치</a>
                                     <ul>
                                           <li><a>미션</a></li>
                                           <li><a>비전 및 비전선언문</a></li>
                                           <li><a>핵심가치</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>경영전략</a>
                                     <ul>
                                           <li><a>전략체계도</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>상징</a>
                                     <ul>
                                           <li><a>CI</a></li>
                                           <li><a>캐릭터</a></li>
                                           <li><a>건강보험의 노래</a></li>
                                     </ul>
                                  </li>
                                  <li className='left'><a>이사회</a>
                                     <ul>
                                           <li><a>이사회 구성 및 운영</a></li>
                                           <li><a>이사회 개최사항</a></li>
                                           <li><a>이사회 커뮤니티</a></li>
                                     </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>조직 및 인원</h2>
                              <ul>
                                  <li className='left'><a>조직도</a></li>
                                  <li className='left'><a>찾아오시는 길</a>
                                    <ul>
                                        <li><a>본부</a></li>
                                        <li><a>지사찾기</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>지역본부</a>
                                    <ul>
                                        <li><a>전국 지역본부/지사</a></li>
                                        <li><a>서울강원지역본부</a></li>
                                        <li><a>부산울산경남지역본부</a></li>
                                        <li><a>대구경북지역본부</a></li>
                                        <li><a>광주전라제주지역본부</a></li>
                                        <li><a>인천경기지역본부</a></li>
                                        <li><a>대전세종충청지역본부</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강보험연구원</a>
                                    <ul>
                                        <li><a>연구원 소개</a></li>
                                        <li><a>연구자료실</a></li>
                                        <li><a>기타자료실</a></li>
                                        <li><a>간행물</a></li>
                                        <li><a>연구원 소식 및 문의사항</a></li>
                                        <li><a>외국의 건강보험제도</a></li>
                                        <li><a>건강보험연구원 관련사이트</a></li>
                                        <li><a>건강보험 통계정보</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>외국인민원센터</a>
                                    <ul>
                                        <li><a>외국인민원센터 개요</a></li>
                                        <li><a>서울외국인민원센터</a></li>
                                        <li><a>인천경기외국인민원센터(안산)</a></li>
                                        <li><a>인천경기외국인민원센터(수원)</a></li>
                                        <li><a>인천경기외국인민원센터(인천)</a></li>
                                        <li><a>인천경기외국인민원센터(의정부)</a></li>
                                        <li><a>외국인민원센터 예약</a></li>
                                    </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>홍보센터</h2>
                              <ul>
                                  <li className='left'><a>포스터/리플릿</a></li>
                                  <li className='left'><a>건강보험화보집</a></li>
                                  <li className='left'><a>홍보브로슈어</a></li>
                                  <li className='left'><a>홍보동영상</a></li>
                                  <li className='left'><a>공간견학</a>
                                    <ul>
                                        <li><a>공단견학 안내</a></li>
                                        <li><a>공단견학 앨범</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>글로벌협력사업</a>
                                    <ul>
                                        <li><a>국제연수과정</a></li>
                                        <li><a>UHC 개발협력사업</a></li>
                                        <li><a>글로벌협력사업 갤러리</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>개릭터 배경화면</a></li>
                             </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>경영철학</h2>
                              <ul>
                                  <li className='left'><a>윤리/인권경영</a>
                                    <ul>
                                        <li><a>이사장실천의지</a></li>
                                        <li><a>윤리/인권경영 소개</a></li>
                                        <li><a>윤리/인권경영 행동기준</a></li>
                                        <li><a>윤리/인권경영 활동소식</a></li>
                                        <li><a>윤리/인권경영 자료실</a></li>
                                        <li><a>부패행위자 처벌 현황공개</a></li>
                                        <li><a>청탁금지위반신고</a></li>
                                        <li><a>예산낭비신고센터</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>사회적가치실현</a>
                                    <ul>
                                        <li><a>사회적가치실현 추진체계</a></li>
                                        <li><a>사회적가치실현 주요성과</a></li>
                                        <li><a>사회적가치실현 활동소식</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>고객만족경영</a>
                                    <ul>
                                        <li><a>고객만족경영 소개</a></li>
                                        <li><a>고객만족경영 고객헌장</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>안전보건경영</a>
                                    <ul>
                                        <li><a>안전보건경영방침</a></li>
                                        <li><a>안전신고</a></li>
                                    </ul>
                                  </li>
                             </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>사회공헌</h2>
                              <ul>
                                  <li className='left'><a>건이강이봉사단</a>
                                    <ul>
                                        <li><a>봉사단 인사말</a></li>
                                        <li><a>봉사단 소개</a></li>
                                        <li><a>중점사업안내</a></li>
                                        <li><a>봉사단 발자취</a></li>
                                        <li><a>우수봉사단</a></li>
                                        <li><a>봉사단 및 기금현황</a></li>
                                        <li><a>봉사단 활동소식</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>사회공헌 매거진</a>
                                    <ul>
                                        <li><a>사회공헌백서</a></li>
                                        <li><a>사회공헌소식지</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>의료봉사단</a>
                                    <ul>
                                        <li><a>의료봉사일정</a></li>
                                        <li><a>진료장비</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>건강보험 작은공부방</a></li>
                             </ul>
                          </div>
                      </div>
                      <div className='menu_right_list'>
                          <div className='menu_area'>
                              <h2>회원서비스</h2>
                              <ul>
                                  <li className='left'><a>로그인</a></li>
                                  <li className='left'><a>회원가입</a></li>
                                  <li className='left'><a>아이디/비밀번호 찾기</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>마이페이지</h2>
                              <ul>
                                  <li className='left'><a>기본정보</a></li>
                                  <li className='left'><a>민원신청내역</a></li>
                                  <li className='left'><a>내가 받은 건강보험혜택</a></li>
                                  <li className='left'><a>나의 찜목록</a></li>
                                  <li className='left'><a>마이메뉴 설정</a></li>
                                  <li className='left'><a>포인트 현황</a></li>
                                  <li className='left'><a>자주 사용하는 계좌관리</a></li>
                              </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>사업장마이페이지</h2>
                              <ul>
                                  <li className='left'><a>민원신청내역</a></li>
                                  <li className='left'><a>회원정보 수정/탈퇴</a></li>
                                  <li className='left'><a>마이메뉴설정</a></li>
                             </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>홈페이지도움센터</h2>
                              <ul>
                                  <li className='left'><a>전체메뉴</a></li>
                                  <li className='left'><a>통합로그인 서비스</a>
                                    <ul>
                                        <li><a>회원서비스 안내</a></li>
                                        <li><a>인증서안내</a></li>
                                        <li><a>브라우저 공동인증서 등록안내</a></li>
                                        <li><a>간편인증서 안내</a></li>
                                        <li><a>인증서 등록/해지</a></li>
                                        <li><a>인증서 내보내기</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>민원서비스 변경안내</a></li>
                                  <li className='left'><a>분야별업무사이트</a></li>
                                  <li className='left'><a>모바일서비스</a>
                                    <ul>
                                        <li><a>서비스안내</a></li>
                                        <li><a>앱설치용 QR코드</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>시스템이용도우미</a>
                                    <ul>
                                        <li><a>시스템오류도우미</a></li>
                                        <li><a>인터넷브라우저설정</a></li>
                                        <li><a>보안프로그램 설치</a></li>
                                        <li><a>뷰어다운로드</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>PHD(개인건강기기)연동서비스</a>
                                    <ul>
                                        <li><a>소개</a></li>
                                        <li><a>연동</a></li>
                                        <li><a>개발가이드</a></li>
                                        <li><a>검증신청</a></li>
                                        <li><a>질의응답</a></li>
                                    </ul>
                                  </li>
                                  <li className='left'><a>배너달기</a></li>
                                  <li className='left'><a>소식지신청</a></li>
                                  <li className='left'><a>건강iN 검진현황서비스 사용자 연동</a></li>
                                  <li className='left'><a>건강iN 메일링 서비스 관리</a></li>
                                  <li className='left'><a>사이트이용정책</a>
                                    <ul>
                                        <li><a>이용약관</a></li>
                                        <li><a>개인정보처리방침</a></li>
                                        <li><a>영상정보처리기기운영지침</a></li>
                                        <li><a>저작권정책</a></li>
                                    </ul>
                                  </li>
                             </ul>
                          </div>
                          <div className='menu_area'>
                              <h2>고객센터</h2>
                              <ul>
                                  <li className='left'><a>이용안내</a></li>
                                  <li className='left'><a>카카오상담톡</a></li>
                                  <li className='left'><a>수어상담</a></li>
                             </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Modal;
