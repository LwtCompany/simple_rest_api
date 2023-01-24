


async function getData(url){
    const user = await fetch(url);
    await user.json();

    console.log(user)
}


getData('https://jsonplaceholder.typicode.com/posts/1')