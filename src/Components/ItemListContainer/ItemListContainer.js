// Componente para el cuerpo de la pagina, ahora solo con un mensaje fijo}
// falta agregar los productos a mostrar y la logica
// este es importado en App.js
// Este recibe atributo de color y tamaño de texto, y el mensaje a mostrar

import "./ItemListContainer.css"

const ItemListContainer = (props) => {
        const {greeting, color, tamaño} = props;

        return <h2 className="tituloItem" style={{color: color, fontSize: tamaño}}>{greeting}</h2>
}

export default ItemListContainer