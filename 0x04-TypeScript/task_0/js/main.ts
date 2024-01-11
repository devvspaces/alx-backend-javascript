interface Student {
  firstName: string;
  age: number;
  location: string;
}

const std1: Student = {
  firstName: 'John',
  age: 25,
  location: 'USA',
};

const std2: Student = {
  firstName: 'Alex',
  age: 21,
  location: 'Ukraine',
};

const studentsList = [std1, std2];


const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Creating table header
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';

headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);

// Creating table body
studentsList.forEach((student) => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

  td1.textContent = student.firstName;
  td2.textContent = student.location;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
