import {BUTTON, LABEL, PANEL} from "../constants/ElementTypes";
import Panel from "../items/Panel";
import Span from "../items/Span";
import Button from "../items/Button";
import { v4 as uuidv4 } from 'uuid';

export default (content) => {
    return content.map(contentItem => {
        if (contentItem.type === PANEL) {
            return <Panel key={uuidv4()}
                width={contentItem.props.width}
                height={contentItem.props.height}
                visible={contentItem.props.visible}
                content={contentItem.props.content}
            />
        } else if (contentItem.type === LABEL) {
            return <Span key={uuidv4()}
                caption={contentItem.props.caption}
                visible={contentItem.props.visible}/>
        } else if (contentItem.type === BUTTON) {
            return <Button key={uuidv4()}
                caption={contentItem.props.caption}
                width={contentItem.props.width}
                height={contentItem.props.height}
                visible={contentItem.props.visible}
            />
        }
    });
};