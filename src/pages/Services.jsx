import '../styles/Services.css'
import '../styles/Productos.css'
import {servicios} from '../dataServices.js'
import xItem from '../assets/xItem.svg'
import { useState } from 'react';

export function Services(){

    const [open, setOpen] = useState(false);
    const [contentDialog, setContentDialog] = useState('')
    const [title, setTitle] = useState('')
    const [setImagen] = useState('')

    //Handle that open a dialog with his properities by service id
    const handleClickToOpen = product => {
        setTitle(product.nombreProducto)
        setContentDialog(product.descripcion)
        setOpen(true)
        setImagen(product.imagenServicio)
    }
    //Close the dialog
    const handleToClose = () => {
        setOpen(false)
    }
    return (
        <div className="containerPr">
            <h1>SERVICES</h1>
            <div className="productos">
                {servicios.map(product => (
                    <div className="producto" key={product.id}>
                        <img src={product.imagenSRC} alt={product.id} />
                        <div className="infoProducto">
                            <h4>{product.nombreProducto}</h4>
                            <p>{product.precioUnidad}USD by unit - {product.precioDocena}USD by dozen</p>
                        </div>
                        <button onClick={() => handleClickToOpen(product)}>See more +</button>
                    </div>
                ))}
                {open && (
                <dialog open={open} className={'infoServicios'}>
                    <img src={xItem} onClick={handleToClose} alt="Close" />
                    <h2>{title}</h2>
                    <p>{contentDialog}</p>
                </dialog>
                )}
            </div>
        </div>
    )
}