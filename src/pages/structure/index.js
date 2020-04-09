import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './structure.less'
import {actionCreators} from './store'
class Structure extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      importimglist:[]
    }
  
  }
  render() {
    console.log(this.props.structureslist)
    return (
      <div className="structure">
        <div className="structure_cntainer">
        
          {
             this.state.importimglist.map((item,index)=>{
             return (<div className="items" key={index}>
               <img src={item.path} />
               <div ref={(el)=>{this[item.name]=el}} onClick={()=>{
                 this.props.handleStructureclick(item.name,this)
               }} className="floating" >{index}</div>
             </div>)
             })
          }
        </div>
      </div>
    )
  }
  initStructureimgs() {
    let importimglist = []
    let loopcounts=0;
    const { structureslist } = this.props;
    for (let k in structureslist) {
      console.log(k)
      import(`../../assets/structure/${k}.png`).then((res) => {
       
        importimglist.push({
          path:res.default,
          name:k
        });
        if(importimglist.length==7){
        
           this.setState({
            importimglist:importimglist
           })
          
        }
      })
    }
  }
  componentDidMount(){
    this.initStructureimgs()
  }
  
}
   
const mapstateToprops = (state) => ({

  structureslist: state.getIn(['structure', 'structures'])
})
const mapDispatch = (dispatch) => ({
  handleStructureclick(name,that){
    if(that.canClick){
      return
    }
      console.log(that[name])
      that[name].style.background='rgba(0,0,0,0.7)'
      that.canClick = true
      that[name].style.height = '0vw'
      setTimeout(()=>{
        that.canClick = false;
        that[name].style.height = '39.75vw';
        that[name].style.background='rgba(0,0,0,0)';
        const item={
          name:name,
          id: (parseInt((10**8)*Math.random())).toString()
        }
       dispatch(actionCreators['handleadd'+name](item));
      },1000)
  }
})
export default connect(mapstateToprops, mapDispatch)(Structure)