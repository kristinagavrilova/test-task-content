import './css/main.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import mapContent from "./utils/mapContent";
import {updateContent} from "./action/action";

function App() {

    const inputPath = useRef()
    const inputValue = useRef()

    const dispatch = useDispatch()
    const content = useSelector((state) => state.content)

    const update = () => {
        const path = inputPath.current.value;
        const value = inputValue.current.value;
        let newContent = [...content]
        const pathSlice = path.slice(7, path.length)
        modifyContent(newContent, pathSlice, value);
        dispatch(updateContent(newContent))
    }

    const modifyContent = (newContent, path, value) => {
        const keys = path.split('.')

        let key = keys.splice(0, 1)[0]
        let arrayMatch = key.match(/\[(\d+)\]/);
        let contentMatch = key.match(/(content)\[(.*)]/);

        if (contentMatch) {
            key = contentMatch[1];
            keys.unshift(contentMatch[2])
        } else if (arrayMatch) {
            key = arrayMatch[1];
        }

        if (keys.length > 0) {
            modifyContent(newContent[key], keys.join('.'), value)
        } else {
            if (Number.isInteger(+key)) {
                value = value.replaceAll(`'`, `"`)
                let jsonStr = value.replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
                    return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
                });
                newContent[+key] = JSON.parse(jsonStr);
            } else if (key === 'visible') {
                newContent[key] = value === 'true';
            } else {
                newContent[key] = value;
            }
        }
    }


    return (
        <div className="App">
            <div className='app__container'>
                <header className='container__header'>
                <input className='container__item1 container__item_input'
                       ref={inputPath}
                       placeholder='Путь'/>
                <input className='container__item2 container__item_input'
                       ref={inputValue}
                       placeholder='Новое значение'/>
                <button className='container__item3 container__item_btn' onClick={update}>Применить</button>
                </header>

                <div className='container__content'>
                    {mapContent(content)}
                </div>
            </div>
        </div>
    );
}

export default App;
