import "./ItemListContainer.css"

const ItemListContainer = (props) => {
        const {greeting, color, tamaño} = props;

        return (
            <h2 className="tituloItem" style={{color: color, fontSize: tamaño}}>{greeting}</h2>
    )
}

export default ItemListContainer