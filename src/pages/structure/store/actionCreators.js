import * as constants from './constants';
import { fromJS } from 'immutable';
export const handleaddbatteryfactory = (value)=>{
    return {
        type:constants.addbatteryfactory,
        value:value
    }
}
export const handleaddsoldierfactory = (value)=>{
    return {
        type:constants.addsoldierfactory,
        value:value
    }
}
export const handleadddiamondfactory = (value)=>{
    return {
        type:constants.adddiamondfactory,
        value:value
    }
}
export const handleaddwarchariotfactory = (value)=>{
    return {
        type:constants.addwarchariotfactory,
        value:value
    }
}
export const handleaddairforcefactory = (value)=>{
    return {
        type:constants.addairforcefactory,
        value:value
    }
}
export const handleaddfightlaboratory = (value)=>{
    return {
        type:constants.addfightlaboratory,
        value:value
    }
}
export const handleaddnuclearfactory = (value)=>{
    return {
        type:constants.addnuclearfactory,
        value:value
    }
}
