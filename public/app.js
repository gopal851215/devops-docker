fetch("/api/employees")
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("employeeTable");
    let active = 0, leave = 0;

    data.forEach(emp => {
      if (emp.status === "Active") active++;
      else leave++;

      table.innerHTML += `
        <tr>
          <td>${emp.name}</td>
          <td>${emp.role}</td>
          <td class="${emp.status === "Active" ? "green" : "orange"}">
            ${emp.status}
          </td>
        </tr>
      `;
    });

    document.getElementById("total").innerText = data.length;
    document.getElementById("active").innerText = active;
    document.getElementById("leave").innerText = leave;
  });
