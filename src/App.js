import logo from './logo.svg';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import GlobalStyle from './component/GlobalStyle';
import Header from './component/Header';
import Main from './component/Main';
import Graybackground from './component/Graybackground'
import Footer from './component/Footer'
import Modal from './component/Menu_modal'
import jquery from 'jquery';
import $ from 'jquery';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
        menu:false
    }
}
  componentDidMount(){
    $(document).ready(function(){
      $("a").click(function(e){
        e.preventDefault()
      })
    })

  }
  scrollTop=()=>{
    window.scrollTo(0, 0);
  }
  ModalMenu=()=>{
    this.setState({
      menu:!this.state.menu
    })
  }
  render(){
    return(
      <body>
        <GlobalStyle/>
        <Header ModalMenu={this.ModalMenu}/>
        <Main/> 
        <Graybackground/>
        <Footer/>
        {this.state.menu===true?<Modal ModalMenu={this.ModalMenu}/>:''}
        <div id="fix">
          <div className='right_side'>
            <ul>
              <li><a><span><img src="https://www.nhis.or.kr/_res/_common/ableu/images/icon/ico-release-info.png"/></span>정보공개</a></li>
              <li><a><span><img src="https://www.nhis.or.kr/_res/_common/ableu/images/icon/ico-civil-complaint.png"/></span>민원상담</a></li>
              <li><a><span><img src="https://www.nhis.or.kr/_res/_common/ableu/images/icon/ico-customer-center.png"/></span>고객센터</a></li>
              <li><a><span><img src="https://www.nhis.or.kr/_res/_common/ableu/images/icon/ico-customer-security.png"/></span>보안프로그램</a></li>
              <li><a><span><img src="https://www.nhis.or.kr/_res/_common/ableu/images/icon/ico-form.png"/></span>서식자료실</a></li>
              <li><a><span><img src="https://www.nhis.or.kr/_res/_common/ableu/images/icon/ico-help-center.png"/></span>홈페이지<br/>도움센터</a></li>
              <li><a><span><img src="https://www.nhis.or.kr/_res/_common/ableu/images/icon/ico-kakao-on.png"/></span>카카오상담</a></li>
            </ul> 
          </div>
          <div onClick={this.scrollTop} className='top'></div>
        </div>
      </body>
    )
  }
}

export default App;
