
type Department = "Engineering" | "Design" | "Data Science" | "Marketing";

interface Employee {
  id: number;
  uid: string;
  name: string;
  role: string;
  department: Department;
  email: string;
}


const employees: Employee[] = [
  {
    id: 1,
    uid: "akshayanair@mulearn",
    name: "Akshaya Nair",
    role: "Data Science Lead",
    department: "Data Science",
    email: "nairakshaya59@gmail.com"
  },
  {
    id: 2,
    uid: "Albyy",
    name: "Alby Shaji",
    role: "Frontend Engineer",
    department: "Engineering",
    email: "alebyy.shajiii@example.com"
  },
  {
    id: 3,
    uid: "s_sarah",
    name: "Sarah Matthew",
    role: "UI/UX Designer",
    department: "Design",
    email: "sarah.matthew@example.com"
  },
  {
    id: 4,
    uid: "m_priya",
    name: "Priya Sharma",
    role: "Marketing Manager",
    department: "Marketing",
    email: "priya.s@example.com"
  }
];

// DOM Elements
const employeeGrid = document.getElementById("employeeGrid") as HTMLDivElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

// Render Employee Cards
function renderEmployees(list: Employee[]): void {
  if (!employeeGrid) return;
  employeeGrid.innerHTML = "";

  if (list.length === 0) {
    employeeGrid.innerHTML = `<div class="no-results">No employees found matching your search.</div>`;
    return;
  }

  list.forEach((employee: Employee) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${employee.name}</h3>
      <div class="uid">ID: ${employee.uid}</div>
      <p><strong>Role:</strong> ${employee.role}</p>
      <p><strong>Dept:</strong> ${employee.department}</p>
      <p><strong>Email:</strong> ${employee.email}</p>
    `;
    employeeGrid.appendChild(card);
  });
}


function handleSearch(): void {
  const query = searchInput.value.toLowerCase().trim();
  
  const filtered = employees.filter((emp: Employee) => {
    return (
      emp.name.toLowerCase().includes(query) ||
      emp.role.toLowerCase().includes(query) ||
      emp.department.toLowerCase().includes(query) ||
      emp.uid.toLowerCase().includes(query)
    );
  });

  renderEmployees(filtered);
}

// Event Listeners
searchInput.addEventListener("input", handleSearch);

// Initial Render
renderEmployees(employees);