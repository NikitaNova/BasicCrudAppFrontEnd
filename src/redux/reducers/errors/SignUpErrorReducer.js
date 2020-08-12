import {SIGNUP_ERROR} from "../../actionTypes";

export default function (state, action) {
    switch (action.type) {
        case SIGNUP_ERROR:
            return {
                ...state,
                errors: {
                    ...action.payload
                }
            }
            break
        default:
            return null
            break

    }
}