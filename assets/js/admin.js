document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");
  const tablesContainer = document.getElementById("tablesContainer");

  // Load products from localStorage
  const products = JSON.parse(localStorage.getItem("products")) || {};

  // Generate tables for each type
  for (const type in products) {
    createTable(type, products[type]);
  }

  // Form submit handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productDetails = document.getElementById("productDetails").value;
    const costPrice = parseFloat(document.getElementById("costPrice").value);
    const customerPrice = parseFloat(document.getElementById("customerPrice").value);
    const discountPrice = document.getElementById("discountPrice").value
      ? parseFloat(document.getElementById("discountPrice").value)
      : "N/A";
    const productImage = document.getElementById("productImage").value;
    const productType = document.getElementById("productType").value;
    const productQuantity = parseInt(document.getElementById("productQuantity").value, 10);

    // Check if all numbers are greater than 0
    if (costPrice <= 0 || customerPrice <= 0 || (discountPrice !== "N/A" && discountPrice <= 0) || productQuantity <= 0) {
      alert("All numerical fields (Cost Price, Customer Price, Discount Price, and Quantity) must be greater than 0.");
      return;
    }

    // Check if costPrice is less than customerPrice, and customerPrice is greater than discountPrice
    if (costPrice >= customerPrice) {
      alert("Cost Price must be less than Customer Price.");
      return;
    }

    if (discountPrice !== "N/A" && customerPrice <= discountPrice) {
      alert("Customer Price must be greater than Discount Price.");
      return;
    }

    const product = {
      name: productName,
      details: productDetails,
      costPrice,
      customerPrice,
      discountPrice,
      image: productImage,
      quantity: productQuantity,
    };

    if (!products[productType]) {
      products[productType] = [];
    }

    products[productType].push(product);

    localStorage.setItem("products", JSON.stringify(products));
    updateTable(productType, product);

    form.reset();
  });

  function createTable(type, productList) {
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");

    const title = document.createElement("h3");
    title.textContent = type;
    console.log(type)

    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Details</th>
          <th>Cost Price</th>
          <th>Customer Price</th>
          <th>Discount Price</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    tableContainer.appendChild(title);
    tableContainer.appendChild(table);
    tablesContainer.appendChild(tableContainer);

    productList.forEach((product) => {
      addRow(table, type, product);
    });
  }

  function updateTable(type, product) {
    let table = null;

    // Find the correct table for the product type
    const headings = tablesContainer.querySelectorAll("h3");
    headings.forEach((heading) => {
      if (heading.textContent.trim() === type) {
        table = heading.nextElementSibling; // Select the table next to the h3
      }
    });

    if (!table) {
      createTable(type, [product]);
    } else {
      addRow(table, type, product);
    }
  }

  function addRow(table, type, product) {
    const tbody = table.querySelector("tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.details}</td>
      <td>${product.costPrice}</td>
      <td>${product.customerPrice}</td>
      <td>${product.discountPrice}</td>
      <td><a href="${product.image}" target="_blank">View Image</a></td>
      <td>${product.quantity}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;

    // Highlight the row if the quantity is less than 5
    if (product.quantity < 5) {
      row.style.backgroundColor = "#f8d7da"; // Change color for low quantity
    }

    // Edit product
    row.querySelector(".edit-btn").addEventListener("click", () => {
      const productIndex = Array.from(tbody.children).indexOf(row);
      const editedProduct = products[type][productIndex];

      document.getElementById("productName").value = editedProduct.name;
      document.getElementById("productDetails").value = editedProduct.details;
      document.getElementById("costPrice").value = editedProduct.costPrice;
      document.getElementById("customerPrice").value = editedProduct.customerPrice;
      document.getElementById("discountPrice").value =
        editedProduct.discountPrice === "N/A" ? "" : editedProduct.discountPrice;
      document.getElementById("productImage").value = editedProduct.image;
      document.getElementById("productType").value = type;
      document.getElementById("productQuantity").value = editedProduct.quantity;

      products[type].splice(productIndex, 1);
      row.remove();

      localStorage.setItem("products", JSON.stringify(products));
    });

    // Delete product
    row.querySelector(".delete-btn").addEventListener("click", () => {
      const productIndex = Array.from(tbody.children).indexOf(row);

      products[type].splice(productIndex, 1);
      row.remove();

      localStorage.setItem("products", JSON.stringify(products));
    });

    tbody.appendChild(row);
  }
});
