import {useState} from 'react'
import "./ItemCount.css";

const ItemCount = ({item, initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='contador'>
            <button className='boton' onClick={ () => decrease() }>-</button>
            <p className='valorContador'>{count}</p>
            <button className='boton' onClick={ () => increment() }>+</button>
            <button className='botonCarrito' onClick={() => onAdd(count, item.id, item.category, item.brand, item.name, item.price)}> Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount