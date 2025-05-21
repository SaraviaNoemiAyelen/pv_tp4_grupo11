import React, { useState } from "react";

const ProductForm = ({ onAddProducto }) => {
  const [producto, setProducto] = useState({
    id: "",
    descripcion: "",
    precioUnitario: "",
    descuento: "",
    precioConDescuento: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(producto.precioUnitario) || Number(producto.precioUnitario) <= 0) {
      alert("El precio debe ser un número positivo.");
      return;
    }

    if (isNaN(producto.descuento) || Number(producto.descuento) < 0) {
      alert("El descuento debe ser un número mayor o igual a 0.");
      return;
    }

    if (isNaN(producto.stock) || Number(producto.stock) < 0) {
      alert("El stock debe ser un número mayor o igual a 0.");
      return;
    }

    const precioConDescuento =
      producto.precioUnitario * (1 - producto.descuento / 100);
    onAddProducto({ ...producto, precioConDescuento });
    setProducto({
      id: "",
      descripcion: "",
      precioUnitario: "",
      descuento: "",
      stock: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <label>ID:</label>
      <input
        type="text"
        name="id"
        value={producto.id}
        onChange={handleChange}
        required
      />

      <label>Descripción:</label>
      <input
        type="text"
        name="descripcion"
        value={producto.descripcion}
        onChange={handleChange}
        required
      />

      <label>Precio Unitario:</label>
      <input
        type="number"
        name="precioUnitario"
        value={producto.precioUnitario}
        onChange={handleChange}
        required
      />

      <label>Descuento (%):</label>
      <input
        type="number"
        name="descuento"
        value={producto.descuento}
        onChange={handleChange}
        required
      />

      <label>Stock:</label>
      <input
        type="number"
        name="stock"
        value={producto.stock}
        onChange={handleChange}
        required
      />

      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;

