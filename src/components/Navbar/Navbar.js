import React from "react";

const Navbar = () => {
    let navlist = document.getElementById('navlist');

    function openMenu() {
        navlist.classList.toggle('mostrar')
    };

    return (
        <nav>
            <div className="logo">
                Logo
            </div>

            <div className="abrir" id="abrir" onClick={openMenu}>
                Abrir
            </div>

            <ul className="navlist" id="navlist" >
                <div className="cerrar" id="cerrar">
                    Cerrar
                </div>

                <li><a href="#">Hola</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Set</a></li>
            </ul>

            <div className="carro">
                Carro
            </div>
        </nav>
    )
};

export default Navbar;