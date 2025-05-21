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
};

export default ProductForm;
