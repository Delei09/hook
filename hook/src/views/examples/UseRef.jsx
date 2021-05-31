import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
const [value1, setValue1] = useState(1)
const [value2, setValue2] = useState(1)
const myInput1 = useRef(null)
const myInput2 = useRef(null)

const count = useRef(0)

useEffect( () => {
    count.current++
    myInput2.current.focus()
}, [value1] )

useEffect( () => {
    count.current++
    myInput1.current.focus()
}, [value2] )





    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title = 'exercicio 01 ' />
            
            <div className="center">
            <div>
                <span className="text">Valor</span>
                <span className="text"> {value1} </span>
                <span className="text">Contador [</span>
                <span className="text red">{count.current}</span>
                <span className="text"> ]</span>
            </div>
                <input type="text" className="input"
                value = {value1}
                onChange = {e => setValue1(e.target.value)}
                ref = {myInput1}
                />
            </div>
        
        <SectionTitle title = 'exercicio 02 ' />

            <div className="center">
                        <input type="text" className="input"
                         value = {value2}
                         ref = {myInput2}
                         onChange = {e => setValue2(e.target.value)}
                         />
            </div>
        </div>
    )
}

export default UseRef
