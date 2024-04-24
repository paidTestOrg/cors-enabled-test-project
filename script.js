console.log('Hello!');

async function test() {
    try {
      const response = await fetch("https://google.com");
      const test = await response.json();
      console.log('test', test);
    } catch {
      console.log('error');
    }

  }

  test();