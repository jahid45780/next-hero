 export const getPost = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
   
}

// post  deatil
 export const postDetailPage = async (id)=>{
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

