import React, { useState } from "react";

const ProductItem = ({ producto, onEdit, onDelete}) => {
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
};

export default ProductItem;