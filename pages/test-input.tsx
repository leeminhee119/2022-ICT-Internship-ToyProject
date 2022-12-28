import React, {useState} from 'react'

interface MyInputOptionInterface {
    label:string,
    value:string,
}

interface MyInputInterface {
    type?:string,
    options: MyInputOptionInterface[],
    nowValue?:string,
    name:string,
}
const MyInput = (props: MyInputInterface) => {
    const [selectedItem,setselectedItem] = useState('');

    function handleBtnClick(event: any) {
        setselectedItem(event.target.value)
        // event.target.style={
        //     backgroundColor: 'black'
        // }
        // console.log(event)
    }
    function handleInputChange(event:any) {

    }
    return (
        <form action='/test-input' method='get'>
            {
                props.options.map((option:any, index:number) => {
                    return (
                        <div style={{
                            display: 'flex'
                        }} key={index}>
                            <button style={{
                                borderRadius: '50%',
                                border: '1px solid black'
                            }}
                            value={option.value}
                            onClick={handleBtnClick}></button>
                            <label>{option.label}</label>
                        </div>
                    )
                })
            }
            <label>결과: </label>
            <input name={props.name} type='text' value={selectedItem} onChange={handleInputChange}></input>
        </form>

    )
}
const MyInputParent = () => {
    const options:MyInputOptionInterface[] = [
        {
            label: 'red',
            value: 'red'
        },
        {
            label: 'orange',
            value: 'orange'
        },
        {
            label: 'yellow',
            value: 'yellow'
        }
    ]
    return (
        <MyInput type="radio" name={'test'} options={options}></MyInput>
    )
}
export default MyInputParent