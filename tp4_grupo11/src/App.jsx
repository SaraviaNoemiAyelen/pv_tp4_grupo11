import { useState, useCallback, useEffect, useMemo } from "react";
import "./App.css";
import ProductList from "./components/ProductList.jsx";
import ProductForm from "./components/ProductForm.jsx";
import SearchBar from "./components/Searchbar.jsx";

function App() {
  const [productos, setProductos] = useState([
    { id: "1", descripcion: "Monitor Samsung", precioUnitario: 160000 },
    { id: "2", descripcion: "Memoria Kingston", precioUnitario: 16500 },
    { id: "3", descripcion: "Auriculares Inalambricos", precioUnitario: 20000 },
    { id: "4", descripcion: "Placa de video", precioUnitario: 80000 },
    { id: "5", descripcion: "Mouse", precioUnitario: 12000 },
  ]);

  useEffect(() => {
    console.log("Lista de productos actualizada:", productos);
  }, [productos]);

  const [searchTerm, setSearchTerm] = useState("");

  const productosFiltrados = useMemo(() => {
    if (!searchTerm.trim()) return productos;

    return productos.filter(
      (producto) =>
        producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.id.includes(searchTerm)
    );
  }, [productos, searchTerm]);
  
  const buscarProducto = useCallback((termino) => {
    console.log("Valor ingresado en barra de búsqueda:", termino);
    setSearchTerm(termino.trim());
  }, []);

  const editarProducto = useCallback((id, datosActualizados) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id ? { ...producto, ...datosActualizados } : producto
      )
    );
  }, []);
  const eliminarProducto = useCallback((id) => {
    setProductos((prevProductos) =>
      prevProductos.filter((producto) => producto.id !== id)
    );
  }, []);

  return (
    <>
      <div className="container">
        <h1>Lista de Productos</h1>
        <SearchBar searchTerm={searchTerm} onSearch={buscarProducto} />

        <ProductForm
          onAddProducto={(nuevoProducto) => {
            const existe = productos.some((p) => p.id === nuevoProducto.id);
            if (existe) {
              alert("Ya existe un producto con ese ID.");
              return;
            }
            setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
          }}
        />

        <ProductList
          productos={productosFiltrados}
          onEditProducto={editarProducto}
          onDeleteProducto={eliminarProducto}
        />
      </div>
    </>
  );  
}

export default App;
