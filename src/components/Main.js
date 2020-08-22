import React from 'react';

import Stats from './Stats';
import Categorias from './Categorias';
import UltimoProducto from './UltimoProducto'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productos: [],
            contador: [],
            categorias: [],
            lastProducto: []


        }
    }

    apiCall(url, consecuencia) {
        fetch(url).then(response => response.json()).then(data => consecuencia(data)).catch(error => console.log(error))
    }

    componentDidMount() {
        this.apiCall('http://localhost:3000/api/products', this.traerProducto)

    }
    traerProducto = (data) => {
        console.log(data.countByCategory)

        this.setState({
            categorias: data.countByCategory,
            totalproductos: data.count,
            contador: [data.count],
            productos: data.productos,
            lastProducto: data.productos.pop()


        })


    }


    render() {
        let productosTotales = this.state.contador;
        let categoriasTotales = this.state.categorias;


        let datos = [
            {
                title: 'Total de Productos',
                number: this.state.totalproductos,
                variant: 'primary',
                icono: "fas fa-clipboard-list fa-2x text-gray-300"
            }, {
                title: 'Total de Categorias',
                number:  this.state.categorias.length,
                icono: "gi gi-envelope",
                variant: 'primary'
            }
        ]


        return (
            <div className="container-fluid">
                <h1>NUESTROS PRODUCTOS</h1>

                <div className="row">

                    {
                        datos.map(dato => {
                            return <Stats info={dato} />
                        })
                    } </div>

               
                 
                <div className="row">
                    <UltimoProducto info={
                        this.state.lastProducto
                    } />


                    <Categorias info={
                        this.state.categorias
                    } />
                    </div>
                


                </div>
       


        )
    }

}

export default Main;
