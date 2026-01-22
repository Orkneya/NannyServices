function countItems(arr) {
  const obj = arr.reduce((acc, item) => {
    const key = item.trim().toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  let keyMax = null;
  let maxResult = 0;
  for (const key in obj) {
    if (obj[key] > maxResult) {
      keyMax = key;
      maxResult = obj[key];
    }
  }
  return { obj, keyMax, maxResult };
}

function countItems(arr) {
  let keyMax = null;
  let maxResult = 0;

  const obj = arr.reduce((acc, item) => {
    const key = item.trim().toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    if (acc[key] > maxResult) {
      keyMax = key;
      maxResult = acc[key];
    }
    return acc;
  }, {});

  return { obj, keyMax, maxResult };
}

const users = [
  { name: "Anna", orders: 3 },
  { name: "Oleh", orders: 7 },
  { name: "Ivan", orders: 5 },
];

// const user = users.reduce(
//   (max, u) => (u.orders > max.orders ? u : max),
//   { name: null, orders: 0 }
// );

const user = users.reduce(
  (acc, us) => {
    if (us.orders > acc.orders) {
      acc.orders = us.orders;
      acc.name = us.name;
    }
    return acc;
  },
  { name: null, orders: null }
);

const users1 = [
  { name: "Anna", orders: 3 },
  { name: "Oleh", orders: 7 },
  { name: "Ivan", orders: 3 },
];

function groupByOrders(users1) {
  return users1.reduce((acc, item) => {
    // acc.push();
    // item.orders = acc.orders;
    if (!acc[item.orders]) {
      acc[item.orders] = [];
    }
    acc[item.orders].push(item.name);
    return acc;
  }, {});
}
