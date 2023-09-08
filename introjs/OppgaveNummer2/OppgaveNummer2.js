const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");
const userUl = document.getElementById("users");

const users = [
  { id: 1, name: 'Ksenia', age: 25 },
  { id: 2, name: 'Raymond', age: 30 },
  { id: 3, name: 'Alex', age: 22 },
  { id: 4, name: "Inger", age: 30},
  { id: 5, name: "Karoline", age: 42}
  // Her kan det legges til flere brukere etter behov
];

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span></p><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  const searchName = searchInput.value;

  if (searchName) {
    const searchResult = users.find(user => user.name === searchName);

    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      userUl.innerHTML = '<li>Ingen treff funnet</li>';
    }
  } else {
    createTableUI(users);
  }
};

const handleFilter = () => {
  const filterValue = filterInput.value;

  if (filterValue && Number(filterValue)) {
    const filterResult = users.filter(user => user.age > Number(filterValue));

    if (filterResult && filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUl.innerHTML = '<li>Ingen brukere med høyere alder enn filterverdien</li>';
    }
  } else {
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

searchInput.addEventListener('keyup', handleSearch);
filterButton.addEventListener('click', handleFilter);