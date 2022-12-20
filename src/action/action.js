import {UPDATE_DATA} from "../constants/Actions";

const updateContent = (content) => {
    return {
        type: UPDATE_DATA,
        content
    }
}

export {updateContent}