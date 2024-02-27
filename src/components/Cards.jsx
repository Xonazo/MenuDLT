import React from 'react';
import "../styles/Card.css";

function Cards() {
    const menuCompletos = [
        {
            id: 1,
            imageSrc: "https://www.concepcionchile.cl/images_content/receta-completo-italiano.jpg",
            subtitulo: "Completos",
            titulo: "Completo Italiano",
            descripcion: "Completo con palta, tomate y mayonesa.",
            precio: "2.000"
        },
        {
            id: 2,
            imageSrc: "https://i0.wp.com/amigospenquistas.cl/wp-content/uploads/2022/05/Marbella-media-676x480-1.jpg?w=676&ssl=1",
            subtitulo: "Completos",
            titulo: "Completo Chucrut",
            descripcion: "Completo con chucrut y mayonesa.",
            precio: "1.700"
        },
        {
            id: 3,
            imageSrc: "https://comidaschilenas.com/wp-content/uploads/2019/07/Receta-de-completo-chileno.jpg",
            subtitulo: "Completos",
            titulo: "Completo Alemán",
            descripcion: "Completo con chucrut, tomate y mayonesa.",
            precio: "2.000"
        },
        {
            id: 4,
            imageSrc: "https://comidaschilenas.com/wp-content/uploads/2019/07/Receta-de-completo-chileno.jpg",
            subtitulo: "Completos",
            titulo: "Completo Dinámico",
            descripcion: "Completo con chucrut, tomate, palta y mayonesa.",
            precio: "2.500"
        },
        {
            id: 5,
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Completo_italiano.jpg/1280px-Completo_italiano.jpg",
            subtitulo: "Completos",
            titulo: "Completo Mechada Italiano",
            descripcion: "Completo con carne mechada, tomate , palta y mayonesa.",
            precio: "3.200"
        },
        {
            id: 6,
            imageSrc: "https://comidaschilenas.com/wp-content/uploads/2019/07/Receta-de-completo-chileno.jpg",
            subtitulo: "Completos",
            titulo: "Completo Ave",
            descripcion: "Completo con Ave, tomate, palta y mayonesa.",
            precio: "3.000"
        },

    ];


    const menuSandwichs = [
        {
            id: 1,
            imageSrc: "https://www.beergeeks.cl/wp-content/uploads/2021/07/Receta-de-sandwich-italiano-con-carne-mechada.jpg",
            subtitulo: "Sandwichs",
            titulo: "Mechada Italiano",
            descripcion: "Sandwich Mechada con tomate, palta y mayonesa.",
            precio: "4.500"
        },
    ]


    return (
        <>
            <div id='header'>
                <h1>Menu Completos</h1>
            </div>
            <div className="container">
                {menuCompletos.map(item => (
                    <div key={item.id} className="card">
                        <div className="card-image">
                            <img src={item.imageSrc} alt={`Imagen de ${item.titulo}`} />
                        </div>
                        <div className="card-text">
                            <p className="card-meal-type">{item.subtitulo}</p>
                            <h2 className="card-title">{item.titulo}</h2>
                            <p className="card-body">{item.descripcion}</p>
                        </div>
                        <div className="card-price">${item.precio}</div>
                    </div>

                ))}
            </div>
            <div id='header'>
                <h1>Menu Sandwichs</h1>
            </div>
            <div className='container'>
                {menuSandwichs.map(item => (
                    <div key={item.id} className="card">
                        <div className="card-image">
                            <img src={item.imageSrc} alt={`Imagen de ${item.titulo}`} />
                        </div>
                        <div className="card-text">
                            <p className="card-meal-type">{item.subtitulo}</p>
                            <h2 className="card-title">{item.titulo}</h2>
                            <p className="card-body">{item.descripcion}</p>
                        </div>
                        <div className="card-price">${item.precio}</div>
                    </div>

                ))}

            </div>

        </>

    );
}

export default Cards;
