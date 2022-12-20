import {UPDATE_DATA} from "../constants/Actions";

const INITIAL_STATE = {
    content: [
        {
            type: 'panel',
            props: {
                width: 500,
                height: 200,
                visible: true,
                content: [
                    {
                        type: 'panel',
                        props: {
                            width: 200,
                            height: 100,
                            visible: true,
                        }
                    }
                ]
            },
        },
        {
            type: 'label',
            props: {
                caption: 'test',
                visible: false
            },
        },
        {
            type: 'button',
            props: {
                width: 100,
                height: 50,
                visible: true,
                caption: 'test'
            },
        }
    ],
}

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                content: [...action.content]
            };
        default:
            return state;
    }
};