import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parImpar , setParImpar] = useState(0)

    function calcFatorial(num){
        const n = parseInt(num)
        if(n < 0) return -1
        if(n === 0) return 1
        return calcFatorial(n -1) *n
    }
    useEffect(function() {
        setFatorial(calcFatorial(number))
    },[number])

    function parOuImpar(n){
        if(number % 2 === 0){
            return 'Par'
        }else return 'Impar'
    }
    useEffect( () => {
        setParImpar(parOuImpar())
    } , [number] )
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title = 'Exercicio 01' />
            <div className="center">
                <div>
                    <span className="text"> Fatorial:</span>
                    <span className="text red"> {fatorial} </span>
                </div>
                
                <input type="number" className="input" value = {number}
                onChange = {e => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title = 'Exercicio 02' />
            <div className="center">
                 <div>
                    <span className="text"> Numero:</span>
                    <span className="text red"> {parImpar} </span>
                </div>
                <input type="number" className="input" value = {number}
                onChange = {e => setNumber(e.target.value)}
                />


            </div>


        </div>
    )
}

export default UseEffect
