import { Component } from 'react/cjs/react.production.min';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Main.css'
import jquery from 'jquery';
import $ from 'jquery';



class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            bannerImg:[
                {id:1,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211209_banner_pc01.png"},
                {id:2,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211018_banner_pc01.png"},
                {id:3,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211216_banner_pc01.png"},
                {id:4,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20220112_banner_pc02.png"},
                {id:5,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211105_banner_pc02.png"},
                {id:6,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211213_banner_pc01.png"},
                {id:7,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211214_banner_pc01.png"},
                {id:8,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211209_banner_pc02.png"},
                {id:9,url:"	https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211228_banner_pc01.png"},
                {id:10,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20220106_banner_pc01.png"},
                {id:11,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20220107_banner_pc03.png"},
                {id:12,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20220112_banner_pc01.png"},
                {id:13,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20220118_banner_pc01.png"},
                {id:14,url:"https://www.nhis.or.kr/_res/nhis/nhis/img/banner/20211125_banner_pc02.png"},
            ]
        }
    }
    componentDidMount(){
      $(document).ready(function(){
        $("#main .main_wrap .user_menu .menu_list ul li").hover(function(){
          var src=$(this).find("img").attr("class")
          $(this).find("img").attr("src","https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-"+src+"-on.png")
        },function(){
          var src=$(this).find("img").attr("class")
          $(this).find("img").attr("src","https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-"+src+".png")
        })
        $("#main .main_wrap .user_menu .title_wrap .click a").click(function(){
          var a=$(this).index()
          $("#main .main_wrap .user_menu .menu_list").hide()
          $("#main .main_wrap .user_menu .title_wrap .click a").removeClass("on")
          $("#main .main_wrap .user_menu .menu_list").eq(a).show()
          $(this).toggleClass("on")
          
        })
      })
    }
  render(){
      const settings={
          dots:false,
          infinite:true,
          slidesToShow:1,    
          autoplay: true,
          autoplaySpeed: 9000,
          slidesToScroll:1,
      }
      const main_bn=this.state.bannerImg.map(
          (data)=>(<div className="slick" id={data.id} key={data.id}><img src={data.url} alt="????????????"></img></div>)
      )
    return(
      <div id="main">
        <div className='main_wrap'> 
          <div className='main_input'>
            <div className='main_search'>
                <input placeholder='????????? ?????? ?????????????'></input>
                <a href="#" className='search_btn'></a>
            </div>
            <div className='main_banner'><Slider {...settings}>{main_bn}</Slider><div className='num'>{this.state.bannerImg[0].id}/14<span className='stop'/></div></div>
            </div>
            <div className='user_menu'>
              <div className='title_wrap'>
              <h2>???????????? ?????? ??????</h2><div className='click'><a className='on' href="#">??????</a><a href="#">?????????</a></div>
              </div>
              <div className='menu_list'>
                <ul>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='qualification' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-qualification.png"/>
                    </div>
                    <p>????????????<br/>????????? ??????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='refund' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-refund.png"/>
                    </div>
                    <p>?????????<br/>??????/??????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='insurance' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-insurance.png"/>
                    </div>
                    <p>?????????<br/>??????/??????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='burden' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-burden.png"/>
                    </div>
                    <p>????????????<br/>???????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='calculation' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-calculation.png"/>
                    </div>
                    <p>?????????<br/>?????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='transfer' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-transfer.png"/>
                    </div>
                    <p>??????????????????<br/>????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='checkups'  src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-checkups.png"/>
                    </div>
                    <p>????????????<br/>????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='family' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-family.png"/>
                    </div>
                    <p>??????<br/>????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_??????" className='company-inquiry' src="	https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-company-inquiry.png"/>
                    </div>
                    <p>??????<br/>????????????</p></a>
                  </li>
                </ul>
              </div>
              <div className='menu_list'>
                <ul>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='staff-search' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-staff-search.png"/>
                    </div>
                    <p>?????????<br/>????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='inform' src="	https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-inform.png"/>
                    </div>
                    <p>???????????????<br/>?????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='amount-money' src="	https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-amount-money.png"/>
                      <a href="#" className='btn'/>
                    </div>
                    <p>?????????<br/>??????????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='insurance' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-insurance.png"/>
                    <a href="#" className='btn'/>
                    </div>
                    <p>?????????<br/>??????????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='insurance-payment' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-insurance-payment.png"/>
                    <a href="#" className='btn'/>
                    </div>
                    <p>4?????????<br/>???????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='edi' src="	https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-edi.png"/>
                    <a href="#" className='btn'/>
                    </div>
                    <p>????????????<br/>???????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='company-form' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-company-form.png"/>
                    <a href="#" className='btn'/>
                    </div>
                    <p>??????<br/>???????????????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='company-certificate' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-company-certificate.png"/>
                    <a href="#" className='btn'/>
                    </div>
                    <p>????????? ??????<br/>?????? ??????</p></a>
                  </li>
                  <li><a href="#">
                    <div className='img_box'><img alt="????????????_?????????" className='company-inquiry' src="https://www.nhis.or.kr/_res/nhis/nhis/img/icon/ico-company-inquiry.png"/>
                    <a href="#" className='btn'/>
                    </div>
                    <p>?????????<br/>??????????????????</p></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='banner'>
              <div className='banner_top'><span className='num'>1 / 1</span><span className='stop'></span></div>
              <div className='banner_list'>
                <div className='banner_img'>
                  <p>???????????????</p>
                  <span>?????????????????? ????????? ???????????????.</span>
                </div>
                <a className='arrow down' href="#"></a>
                <a className='arrow up' href="#"></a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Main;
