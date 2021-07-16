/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hate :)')

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')
const formatPrice = (price) => {
   const newPrice = new window.Intl.NumberFormat("en-En", {
        style: "currency",
        currency: "USD",
    }).format(price)

    return price;
}

async function fetchData() {
    const response = await fetch(`${baseUrl}/api/avo`),
    data = await response.json(),
    allItems = [];
  
    data.data.forEach((item) => {
      const image = document.createElement("img");
      image.src = `${baseUrl}${item.image}`;
      const title = document.createElement("h2");
      title.textContent = item.name
      const price = document.createElement("div");
      price.className = "precio";
      price.textContent = ("$") + (item.price)
      const container = document.createElement("div");
      container.append(image, title, price);
   
  
      allItems.push(container);
    });
  
    appNode.append(...allItems)
  }
  
  fetchData();
  