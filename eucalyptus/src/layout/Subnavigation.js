import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Subnavigation.css"



class Subnavigation extends Component{
  render(){
    return(
      <div className="subnavigation">
        <hr className="subline" /> 
       <Subs>
         <Subnav label="문제">
           <div className="sub">
             <Link to ="/"></Link>
           </div>
         </Subnav>
         <Subnav label="제출">
           <div className="sub">
           <Link to ="/"></Link>
           </div>
         </Subnav>
         <Subnav label="채점현황">
           <div className="sub">
           <Link to ="/"></Link>
           </div>
         </Subnav>
         <Subnav label="내 제출">
           <div className="sub">
           <Link to ="/"></Link>
           </div>
         </Subnav>
       </Subs>
      </div>
      
    )
  }
}

class Subs extends Component{
  state ={
    activeSub: this.props.children[0].props.label 
    // 기본 상태-> 첫번째 tab
  }

  changeSub = (sub) => {
    this.setState({ activeSub: sub });
    // 클릭한 해당 tab 지정하기
  };

  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeSub) content = child.props.children
        })}
         
        <SubButtons activeSub={this.state.activeSub} buttons={buttons} changeSub={this.changeSub}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const SubButtons = ({buttons, changeSub, activeSub}) =>{
   
  return(
    <div className="sub-buttons">
    {buttons.map(button =>{
       return <div className="subbtn">
       <button className={button === activeSub? 'active': ''} onClick={()=>changeSub(button)}>{button}</button>
       </div>
      //  id 만들어서  #id로 css지정하려고 했으나 잘 되지 않아서 일단 태그로 css 했는데 수정 예정임
    })}
    </div>
  )
}

const Subnav = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
  // 해당 Subbtn 페이지 fragment로 반환하는 코드
}

export default Subnavigation;