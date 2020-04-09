import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    structures:{
        batteryfactory:[],
        soldierfactory:[],
        diamondfactory:[], //钻石精炼厂
        warchariotfactory:[],//战车工厂
        airforcefactory:[],//空指部
        fightlaboratory:[],//作战实验室
        nuclearfactory:[]//核能工厂
    }
  
});

export default (state=defaultState,action)=>{
    let tempstate = JSON.parse(JSON.stringify(state));
    let handletype = action.type.split('add')[1];
        console.log(handletype,66666666666666666)
        if(action.type===constants.addbatteryfactory){
            tempstate.structures.batteryfactory.push(action.value)
        }
        if(action.type===constants.addsoldierfactory){
            tempstate.structures.soldierfactory.push(action.value)
        }
        if(action.type===constants.adddiamondfactory){
            tempstate.structures.diamondfactory.push(action.value)
        }
        if(action.type===constants.addwarchariotfactory){
            tempstate.structures.warchariotfactory.push(action.value)
        }
        if(action.type===constants.addairforcefactory){
            tempstate.structures.airforcefactory.push(action.value)
        }
        if(action.type===constants.addfightlaboratory){
            tempstate.structures.fightlaboratory.push(action.value)
        }
        if(action.type===constants.addnuclearfactory){
            tempstate.structures.nuclearfactory.push(action.value)
        }
    return tempstate
}