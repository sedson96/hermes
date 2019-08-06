import {useState} from "react" 

function useDisplayToggle() {
    let [show, setShow] = useState(false)
    
    let toggle = () => {
        setShow(!show)
    }
    let setTrue = () => {
        setShow(true)
    }
    let setFalse = () => {
        setShow(false)
    }
    return { show, toggle, setTrue, setFalse }
}

export default useDisplayToggle