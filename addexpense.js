function addexpense() {
  const category = document.getElementById("user-cat").value.trim();
  const amount = document.getElementById("amt").value.trim();
  const date = document.getElementById("date").value.trim();
  const note = document.getElementById("note").value.trim();

  // Validate inputs
  if (category === "" || amount === "" || date === "" || note === "") {
    alert("Please fill all required fields (Category, Amount, Date, Note)");
    return;
  }

  if (isNaN(amount) || Number(amount) <= 0) {
    alert("Please enter a valid numeric amount.");
    return;
  }

  const transactionDiv = document.getElementById("transaction");

  // Create table if not exists
  if (!document.getElementById("expense-table")) {
    transactionDiv.innerHTML = `
      <table id="expense-table" border="1" style="width: 97%; background-color: white; color: black; margin-top: 10px;">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="expense-body"></tbody>
      </table>
    `;
  }

  const tbody = document.getElementById("expense-body");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td style='text-align:center'>${category}</td>
    <td style='text-align:center'>₹${parseFloat(amount).toFixed(2)}</td>
    <td style='text-align:center'>${date}</td>
    <td style='text-align:center'>${note}</td>
    <td style='text-align:center'>
      <button id='dlt' onclick="this.parentElement.parentElement.remove()" style="background: red;  width:120px; margin-top:0px;  color: white; border: none; padding: 0px; border-radius: 4px;">
        Delete
      </button>
    </td>
  `;

  tbody.appendChild(newRow);

  // Clear form
  document.getElementById("user-cat").selectedIndex = 0;
  document.getElementById("amt").value = "";
  document.getElementById("date").value = "";
  document.getElementById("note").value = "";
}
