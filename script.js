console.log('Hello!');

async function shiba() {
    const response = await fetch("http://shibe.online/api/shibes");
    const shiba = await response.json();
    console.log(shiba);
  }

  shiba();