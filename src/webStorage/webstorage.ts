
if (Storage === undefined) {
    console.info("user required");
  } else {
    console.log(Storage);
  }


  const token = "53gf8d0b-6b80-4e49-v60d-5b3ca2ce6678";

  sessionStorage.setItem("token", token);
  console.log(sessionStorage.getItem("token"));


  const key = "user-info";
  const shoppingCart = {
    items: [
      {
        id: 1,
        name: "Juan Martin Lopez",
        password: 1234567890,
      },
      {
        id: 2,
        name: "Juan Sebastian Silva",
        price: 0987654321,
      },
    ],
  };

  localStorage.setItem(key, JSON.stringify(shoppingCart));
  console.log(JSON.parse(localStorage.getItem(key)));

  /** Cookies */
  const expirationDate = new Date(2023, 6, 1);
  const cookieKey = "USERINFO";
  const cookieValue = true;
  document.cookie = `${cookieKey}=${cookieValue}; expires=${expirationDate.toUTCString()}`;
  //document.cookie = "isAlive=true; expires=2023-07-01T05:00:00.000Z";
  console.log(document.cookie);




  // TODO: create a web component counter that persist the count even after closing the browser