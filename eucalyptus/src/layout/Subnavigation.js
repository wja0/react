import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import "./Subnavigation.css"
import ViewProblem from "../components/ViewProblem";
import Textarea from "../components/Textarea";

function Subnavigation({Pnum, Pname, Solved, Pcond, Pdetail, Pinout}) {

  // function toproblem(e) {
  //   e.preventDefault();
  //   <ViewProblem
  //     key={Pnum}
  //     Pnum={Pnum}
  //     Pname={Pname}
  //     Solved={Solved}
  //     Pcond={Pcond}
  //     Pdetail={Pdetail}
  //     Pinout={Pinout}
  //     />
  // }

  return( 
    <div class="subnavigation">
      <hr className="subline" /> 
        <ul className="subnav">
          <li className="sublist"><Link to={{pathname: `/problem/${Pnum}`}} className="subbtn">문제</Link></li>
          <li className="sublist"><Link to={{pathname: `/submit/${Pnum}`}} className="subbtn">제출</Link></li>
          <li className="sublist"><Link to='/status' className="subbtn">채점현황</Link></li> 
          <li className="sublist"><Link to="#" className="subbtn">내 제출</Link></li>
      </ul>
    </div>
  )
    
}

Subnavigation.propTypes = {
  Pnum: PropTypes.string.isRequired,
  Pname: PropTypes.string.isRequired,
  Solved: PropTypes.string.isRequired,
  Pcond: PropTypes.arrayOf(PropTypes.string).isRequired,
  Pdetail: PropTypes.arrayOf(PropTypes.string).isRequired,
  Pinout: PropTypes.arrayOf(PropTypes.string).isRequired

}


// function Subnavigation({Pnum, Pname, Solved, Pcond, Pdetail, Pinout}) {
//   return(
//     <div className="subnavigation">
//       <hr className="subline" /> 
//      <Subs>
//        <Subnav label="문제">
//          <div className="sub">
//            {/* <Link to ={{pathname: `/problem/${Pnum}`}}></Link> */}
//            <ViewProblem
//               key={Pnum}  
//               Pnum={Pnum}
//               Pname={Pname}
//               Solved={Solved}
//               Pcond={Pcond}
//               Pdetail={Pdetail}
//               Pinout={Pinout}
//             />
           
//          </div>
//        </Subnav>
//        {/* <Link to={{pathname: `/submit/${Pnum}`}} className="tosubmit"> */}
//        <Subnav label="제출" >
//          {/* <Link to={{pathname: `/submit/${Pnum}`}}>클릭</Link> */}
//          {/* <Route path="/submit/${Pnum}" exact={true}/> */}
//        </Subnav>
//        {/* </Link> */}
//        <Subnav label="채점현황">
//          <div className="sub">
//          </div>
//        </Subnav>
//        <Subnav label="내 제출">
//          <div className="sub">
//          <Link to ="/"></Link>
//          </div>
//        </Subnav>
//      </Subs>
//     </div>
//   )
    
// }

// class Subs extends Component{
//   state ={
//     activeSub: this.props.children[0].props.label 
//     // 기본 상태-> 첫번째 tab
//   }

//   changeSub = (sub) => {
//     this.setState({ activeSub: sub });
//     // 클릭한 해당 tab 지정하기
//   };

//   render(){
    
//     let content;
//     let buttons = [];
//     return (
//       <div>
//         {React.Children.map(this.props.children, child =>{
//           buttons.push(child.props.label)
//           if (child.props.label === this.state.activeSub) content = child.props.children
//         })}
         
//         <SubButtons activeSub={this.state.activeSub} buttons={buttons} changeSub={this.changeSub}/>
//         <div className="sub-content">{content}</div>
        
//       </div>
//     );
//   }
// }

// const SubButtons = ({buttons, changeSub, activeSub}) =>{
   
//   return(
//     <div className="sub-buttons">
//     {buttons.map(button =>{
//        return <div className="subbtn">
//        <button className={button === activeSub? 'active': ''} onClick={()=>changeSub(button)}>{button}</button>
//        </div>
//       //  id 만들어서  #id로 css지정하려고 했으나 잘 되지 않아서 일단 태그로 css 했는데 수정 예정임
//     })}
//     </div>
//   )
// }

// const Subnav = props =>{
//   return(
//     <React.Fragment>
//       {props.children}
//     </React.Fragment>
//   )
//   // 해당 Subbtn 페이지 fragment로 반환하는 코드
// }
export default Subnavigation;