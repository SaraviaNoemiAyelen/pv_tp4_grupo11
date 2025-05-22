import React, { useState } from "react";

const ProductItem = ({ producto, onEdit, onDelete }) => {
    const [editando, setEditando] = useState(false);
    const [descripcion, setDescripcion] = useState(producto.descripcion);
    const [precioUnitario, setPrecioUnitario] = useState(producto.precioUnitario);
    const [descuento, setDescuento] = useState(producto.descuento);
    const [stock, setStock] = useState(producto.stock);

    const handleEditClick = () => setEditando(true);

    const handleSave = () => {
        const precioConDescuento = precioUnitario * (1 - descuento / 100);
        onEdit(producto.id, {
            descripcion,
            precioUnitario,
            descuento,
            stock,
            precioConDescuento,
        });
        setEditando(false);
    };
    const handleCancel = () => {
        setDescripcion(producto.descripcion);
        setPrecioUnitario(producto.precioUnitario);
        setDescuento(producto.descuento);
        setStock(producto.stock);
        setEditando(false);
    };
    return (
    <tr>
      <td>{producto.id}</td>
      <td>
        {editando ? (
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        ) : (
          producto.descripcion
        )}
      </td>
      <td>
        {editando ? (
          <input
            type="number"
            value={precioUnitario}
            onChange={(e) => setPrecioUnitario(Number(e.target.value))}
          />
        ) : (
          producto.precioUnitario
        )}
      </td>
      <td>{producto.descuento}</td>
      <td>{producto.precioConDescuento}</td>
      <td>{producto.stock}</td>
      <td>
        {editando ? (
          <>
            <button onClick={handleSave}>Guardar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </>
        ) : (
          <button onClick={handleEditClick}>Editar</button>
        )}
          <button onClick={() => {  
          if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            onDelete(producto.id); 
          }
        }}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductItem;