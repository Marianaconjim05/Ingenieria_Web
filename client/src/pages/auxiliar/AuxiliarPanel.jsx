import React from 'react';
import NavbarAuxiliar from '../../components/NavbarAuxiliar';

export default function AuxiliarPanel() {
  return (
    <>
      <NavbarAuxiliar />
      <div className="container py-5 text-black">
        <h2>Bienvenido al panel de auxiliar 🛠️</h2>
        <p>Desde aquí puedes agregar productos, consultar stock o ver entregas estimadas.</p>
      </div>
    </>
  );
}

