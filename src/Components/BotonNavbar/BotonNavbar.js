// Componente de boton para el Navbar
// Este recibe atributo de color de fondo y borde, y el mensaje a mostrar

import "./BotonNavbar.css"

const BotonNavbar = (props) => {
    const {colorBorde, colorFondo, children} = props

    return <button className="botones" style = {{border: '1px solid ' + colorBorde, backgroundColor: colorFondo}}>{children}</button>
}

export default BotonNavbar