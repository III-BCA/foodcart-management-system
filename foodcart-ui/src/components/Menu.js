import { useEffect, useState } from "react";
import {
  getMenus,
  addMenu,
  updateMenu,
  deleteMenu
} from "../services/MenuService";

function Menu() {
  const [menus, setMenus] = useState([]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = () => {
    getMenus().then(res => setMenus(res.data));
  };

  const handleSubmit = () => {
    const menuData = { itemName, price, category };

    if (editId === null) {
      // ADD
      addMenu(menuData).then(loadMenus);
    } else {
      // UPDATE
      updateMenu(editId, menuData).then(() => {
        setEditId(null);
        loadMenus();
      });
    }

    clearForm();
  };

  const handleEdit = (menu) => {
    setEditId(menu.id);
    setItemName(menu.itemName);
    setPrice(menu.price);
    setCategory(menu.category);
  };

  const clearForm = () => {
    setItemName("");
    setPrice("");
    setCategory("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Food Cart Menu</h2>

      <input
        placeholder="Item Name"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update Item" : "Add Item"}
      </button>

      <hr />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {menus.map(menu => (
            <tr key={menu.id}>
              <td>{menu.itemName}</td>
              <td>{menu.price}</td>
              <td>{menu.category}</td>
              <td>
                <button onClick={() => handleEdit(menu)}>Edit</button>
                <button
                  onClick={() =>
                    deleteMenu(menu.id).then(loadMenus)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
