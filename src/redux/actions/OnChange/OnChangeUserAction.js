import {ON_CHANGE_USER} from '../../actionTypes'

export default function(valSet){
    return{
        type:ON_CHANGE_USER,
        payload:{
            ...valSet
        }
    }
}