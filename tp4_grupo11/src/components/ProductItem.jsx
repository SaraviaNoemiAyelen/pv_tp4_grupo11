import React, { useState } from "react";

const ProductItem = ({ producto, onEdit, onDelete}) => {
  const [editando, setEditando] = useState(false);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  const [precioUnitario, setPrecioUnitario] = useState(producto.precioUnitario);
  const [descuento, setDescuento] = useState(producto.descuento);
  const [stock, setStock] = useState(producto.stock);

  const handleEditClick = () => setEditando(true);

};

export default ProductItem;