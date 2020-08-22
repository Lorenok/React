import React from 'react';

import StatsUsers from './StatsUsers';
import Categorias from './Categorias';
import UltimoUsuario from './UltimoUsuario'


class MainUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuarios: [],
            contador: [],
            categorias: [],
            lastUsuario: []


        }
    }

    apiCall(url, consecuencia) {
        fetch(url).then(response => response.json()).then(data => consecuencia(data)).catch(error => console.log(error))
    }

    componentDidMount() {
        this.apiCall('http://localhost:3000/api/users', this.traerUsuario)

    }
    traerUsuario = (data) => {
        console.log(data.count)

        this.setState({
            categorias: data.countByCategory,
            totalusuarios: data.count,
            contador: [data.count],
            usuarios: data.usuarios,
            lastUsuario: data.usuarios.pop()


        })


    }


    render() {
        let productosTotales = this.state.contador;
        let categoriasTotales = this.state.categorias;


        let datos = [
            {
                title: 'Total de Usuarios Registrados',
                number: this.state.totalusuarios,
                variant: 'primary',
                icono: "fas fa-clipboard-list fa-2x text-gray-300"
            },
        ]


        return (
            <div className="container-fluid">
                <h1>NUESTROS CLIENTES</h1>

                <div className="row">

                    {
                        datos.map(dato => {
                            return <StatsUsers info={dato} />
                        })
                    }
                </div>

                <div className="row">


                    <UltimoUsuario info={
                        this.state.lastUsuario
                    } />






                </div>
                </div>
       


        )
    }

}

export default MainUsers;
