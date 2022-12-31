const items = [
    {
        id: '1',
        category: 'PLC',
        brand: 'SCHNEIDER',
        name: 'M221',
        description: 'M221 Este producto forma parte de la gama Modicon M221, una oferta de controladores lógicos programables para arquitecturas cableadas. Este controlador lógico proporciona 9 entradas discretas y 7 salidas de relé con resolución de entrada de 1 bits, salida de relé normalmente abierta. Es un controlador lógico Modicon con tensión de alimentación nominal de 1V a 24V CA, tensión de salida de 5V a 125V CC, 5V a 25V CA y corriente de salida de 2A con lógica de entrada de fuente o colector. Este producto requiere una instalación mínima y ofrece una gran versatilidad. Las conexiones integradas son puerto USB con conector mini B USB 2., serial 1 de enlace serie no aislado con conector RJ45 e interfaz RS485 y serial 2 de enlace serie no aislado con conector RJ45 e interfaz RS232/RS485. Es un controlador Modicon M221 con una frecuencia de red de 5/6Hz, 256KB para variables internas RAM, aplicación de usuario y datos RAM, memoria flash integrada de 256KB y memoria de tarjeta SD de 2 GB. Producto con clasificación IP2. Sus dimensiones son 95mm (ancho) x 7mm (profundidad) x 9mm (alto). Pesa ,346 kg. Admite montaje en riel DIN. Logre un rendimiento de referencia mientras aumenta la rentabilidad con Modicon M221 a través de una programación de máquina intuitiva con EcoStruxure Machine Expert Basic',
        price: '2100',
        pictureURL: 'https://download.schneider-electric.com/files?p_Doc_Ref=62128_main&p_File_Type=rendition_369_jpg'
    },
    {
        id: '2',
        category: 'PLC',
        brand: 'SIEMENS',
        name: 'SIMATIC S7-1200',
        description: 'SIMATIC S7-1200, CPU 1214C, CPU compacta, DC/DC/Relé',
        price: '2200',
        pictureURL: 'https://masvoltaje.com/2088-large/simatic-s7-1200-cpu-1214c-cpu-compacta-dc-dc-rele.jpg'
    },
    {
        id: '3',
        category: 'PLC',
        brand: 'OMRON',
        name: 'CP1E',
        description: 'CP1E',
        price: '1800',
        pictureURL: 'https://www.cpi.com.ar/wp-content/uploads/2014/08/cp1e.jpg'
    },
    {
        id: '4',
        category: 'PLC',
        brand: 'ROCKWELL',
        name: 'SmartGuard 600',
        description: 'SmartGuard 600 Safety Controllers with Safety',
        price: '3000',
        pictureURL: 'https://rockwellautomation.scene7.com/is/image/rockwellautomation/1752-smartguard600controllers-left1-large-312w255h.312.jpg'
    },
    {
        id: '5',
        category: 'HMI',
        brand: 'SCHNEIDER',
        name: 'Harmony ST6 HMIST6400',
        description: 'Terminal LCD Táctil Schneider HMI 7" Color / Ethernet - Harmony ST6 HMIST6400',
        price: '1800',
        pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_775355-MLA49501578382_032022-O.webp'
    },
    {
        id: '6',
        category: 'HMI',
        brand: 'SIEMENS',
        name: 'KTP700 Basic',
        description: 'SIMATIC HMI, KTP700 Basic, Basic Panel, Manejo con teclado/táctil, pantalla TFT de 7", 65536 colores, Interfaz PROFINET, configurable a partir de WinCC Basic V13/ STEP 7 Basic V13, incluye software Open Source, que se cede gratuitamente ver CD adjunto',
        price: '750',
        pictureURL: 'https://ar.wiautomation.com/public/images/landing/anticipa/product/6AV21232GB030AX0.jpg'
    },
    {
        id: '7',
        category: 'HMI',
        brand: 'DELTA',
        name: 'DOP-B07E415',
        description: 'Pantalla táctil HMI,7 pulg-DOP-B07E415,TFT LCD, Color, 800 x 480 pixels, 215 x 161 x 50 mm;BOP-B07 HMI – Pantalla panorámica de alta resolución de 7 pulgadas',
        price: '640',
        pictureURL: 'https://nvsautomatizacion.com/wp-content/uploads/2018/04/F7951633-01-1.jpg'
    },
    {
        id: '8',
        category: 'PLC',
        brand: 'SCHNEIDER',
        name: 'Modicon M172',
        description: 'Plc Schneider Modicon M172 18 E/s C/disp Eth, Modbus',
        price: '681',
        pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_693282-MLA44169686280_112020-O.webp'
    },
    {
        id: '9',
        category: 'HMI',
        brand: 'SCHNEIDER',
        name: 'Magelis SCU',
        description: 'Este controlador de interfaz de operador de pantalla táctil pequeño (HMI) Magelis SCU se suministra con 24 V CC, con pantalla LCD TFT en color de 5,7" y EPROM de 128 MB. También dispone de 8 entradas digitales, 8 salidas digitales, 4 entradas analógicas, 2 salidas analógicas, 1 host + 1 puerto mini-B USB, 1 puerto RS232C / RS485 y 1 puerto CANopen. Es ideal para la información y comunicación optimizadas con sistemas de automatización de la industria e infraestructura como máquinas compactas, sistemas de manejo, máquinas de alimentos y bebidas y la industria farmacéutica. La pantalla muestra mensajes de texto, objetos gráficos y diagramas mímicos, control y configuración de datos. Sus puertos host RS485 y CANopen lo hacen ideal para supervisar y controlar sistemas y máquinas simples. Sus múltiples I/Os, incluidos los contadores de alta velocidad, le permiten realizar procesos con cadenas de detección rápidas.',
        price: '2500',
        pictureURL: 'https://download.schneider-electric.com/files?p_Doc_Ref=PF122207&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png'
    },
    {
        id: '10',
        category: 'HMI',
        brand: 'OMRON',
        name: 'NA',
        description: 'NA - Terminal de Operación Avanzada OMRON : Una interfaz HMI que sea dinámica, intuitiva y predictiva permite diseñar maquinaria industrial más atractiva y competitiva. La interfaz NA OMRON  permite obtener un control más rápido y eficiente, además de una relación más natural y proactiva entre el operador y la máquina. El diseño se basa en las aplicaciones y las necesidades reales de los clientes para dar lugar a una plataforma preparada para el futuro y con una excelente capacidad de adaptación que evolucionará junto con sus cambiantes necesidades, y permitirá reaccionar a los eventos en tiempo real. Como parte de la familia, la serie NA puede controlar la máquina al completo.',
        price: '1200',
        pictureURL: 'https://www.cpi.com.ar/wp-content/uploads/2016/07/na.jpg'
    },
    {
        id: '11',
        category: 'PLC',
        brand: 'SIEMENS',
        name: 'LOGO!',
        description: '6ED1052-1HB08-0BA1 - LOGO! 24RCE, 8ED/4SD, 400 Bloques, LOGO! 24RCE, módulo lógico,display FA/E/S: 24 V AC/DC 24 V/relé, 8 DI/4 DO, mem. 400 bloques, posibilidad de ampliación modular, Ethernet, servidor web integrado, Datalog, páginas web personalizadas, tarjeta microSD estándar para LOGO! Soft Comfort a partir de V8.3, proyectos anteriores ejecutables conexión a la nube en todos los aparatos base LOGO! 8.3',
        price: '430',
        pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_920589-MLA51421285205_092022-O.webp'
    },
    {
        id: '12',
        category: 'PLC',
        brand: 'SCHNEIDER',
        name: 'Zelio',
        description: 'Relé inteligente compacto Zelio Logic Schneider, Código SR2B121BD, Alimentación 24VCC, 8 entradas, 4 salidas',
        price: '356',
        pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_635392-MLA48578557539_122021-O.webp'
    }
]

export const getItems = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
}

export const getItemById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(items => items.id === id))
        }, 2000)
    })
}

export const getItemByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.filter(items => items.category === categoryId))
        }, 2000)
    })
}