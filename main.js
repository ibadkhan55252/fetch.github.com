let cardContainer =  document.querySelector('.card-container');
let body = document.get

const fetchAPI = function(){
    fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>{
        return res.json()
    }).then((data)=>{
    const filterData = data.map(item => {
            const {albumId, id, title, thumbnailUrl} = item;
            return  `<div onclick="getData(this)" class="card">
            <div class="img-wrapper">
                <img src="${thumbnailUrl}" alt="">
            </div>
            <div class="card-body">
            <p id="employeeId">Employee Id ${id}</p>    
            <p id="title">title ${title}</p>    
            </div>
        </div>`
        }).join('');
        document.querySelector('.cards-container').innerHTML = filterData
    }).catch((error)=>{
        console.log('fetching error', error);
    })
};


fetchAPI()

const getData = function(item){
    let img = item.querySelector('img').src;
    let employeeId = item.querySelector('#employeeId').innerText;
    let title = item.querySelector('#title').innerText
    console.log(img, employeeId, title);
}