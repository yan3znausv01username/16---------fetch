let linkS = document.querySelector('img')
let inputSearch = document.querySelector('#inputSearch')
let btnSearchImg = document.querySelector('#btnSearchImg')
let btnRandomImg = document.querySelector('.anim-bg-gradient')

let request = false;

let API = 'g427Ok2GUeaw2pnpFZVDnNqWOCfSzelc'
let RequestURLRandom = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=&rating=g`


btnRandomImg.addEventListener('click', async () => {
    await requestRandom()
})

const requestRandom = async () =>{
    fetch(RequestURLRandom)
    .then((res)=>res.json())
    .then((res) => {
        let link = res['data']['images']['original']['url'] 
        linkS.src = link
    })
}

inputSearch.addEventListener('keydown', async() =>{
   
    console.log(1)
    fe
})
const requestRandom = async () =>{
    let RequestURLSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${inputSearch.value}&limit=1&offset=0&rating=g&lang=en`
    console.log(1)
    fetch(RequestURLRandom)
    .then((res)=>res.json())
    .then((res) => {
        //console.log(res)
        //console.log(res ['data'])
        //console.log(res ['data'][0])
        //console.log(res ['data'][0]['images'])
       // console.log(res ['data'][0]['images']['original'])
        //console.log(res ['data'][0]['images']['original']['url'])
        link = res['data']['images']['original']['url'] 
        linkS.src = link
    })
}
.catch((err) =>{
    linkS.src = link
    console.log(err)
    inputSearch.value = ''
    })
}

