import { SelectProduct } from './styled-components/style';
import React, {useState} from 'react';

interface SelectProductTypeInterface {
    musicalData: object[],
    concertData: object[]
}
const SelectProductType = (props:SelectProductTypeInterface) => {
    // 뮤지컬/콘서트 select한 결과값 저장
    const [selectedType, setSelectedType] = useState('musical');
    const handleSelectType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    }
    return (
        <SelectProduct.Box>
        <SelectProduct.SelectType onChange={handleSelectType}>
            {
                ['뮤지컬', '콘서트'].map((type:string, index:number) => {
                    return (
                        <option key={index} value={type==='뮤지컬' ? 'musical' : 'concert'}>{type}</option>
                    )
                })
            }
        </SelectProduct.SelectType>
        <SelectProduct.SelectProduct>
            {
                selectedType === 'musical'
                ? props.musicalData.map((item:any, index:number) => {
                    return (
                        <option key={index} value={item.id}>{item.title}</option>
                    )
                })
                : props.concertData.map((item:any, index:number) => {
                    return (
                        <option key={index} value={item.id}>{item.title}</option>
                    )
                })
            }
        </SelectProduct.SelectProduct>
    </SelectProduct.Box>
    )
}

export default SelectProductType;