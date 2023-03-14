let allData = []
const loadData = async() =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data.tools);
    allData = data.data.tools;
    const arr = data.data.tools.slice(0,6)
    render(arr)
}
const seeMoreBtn = document.getElementById('see-more');
seeMoreBtn.addEventListener('click',()=>{
    const arr = allData.slice(6,allData.length)
    render(arr)
    seeMoreBtn.style.display = 'none'
})

let tool= {}

async function  loadDataById(id) {
    const Detailsurl = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const rest = await fetch(Detailsurl);
    const detailData  = await rest.json();
    console.log(detailData);
    tool = detailData.data
    
    const title = document.getElementById('model-title')
    title.innerHTML = `
        <div class="d-flex gap-4">
            <div class="card w-100 p-4 bg-danger-subtle">
                <h4 class="text-justify">${tool.description}</h4>
                <div class="d-flex justify-content-between text-center  gap-3 mt-3">
                    <div class=" px-3 py-4 bg-white rounded w-50">
                        <h5 class="text-success">$10/month
                        Basic</h5>
                    </div>
                    <div class="px-3 py-4 bg-white rounded w-50">
                        <h5 class="text-warning">$50/month
                        Pro</h5>
                    </div>
                    <div class="px-3 py-4 bg-white rounded w-50">
                        <h5 class="text-danger">Contact 
                        us
                        Enterprise</h5>
                    </div>
                </div>
                
                <div class="d-flex gap-4">
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
                <div class="card w-100">
                    <img src="${tool.logo}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    `
    

}


const render = hubData =>{
    const cardContainer =document.getElementById('card-container');
    hubData.forEach(hub =>{
        const hubDiv =document.createElement('div');
        hubDiv.classList.add('col');
        hubDiv.innerHTML =`
        <div class="card mt-5 p-3 h-100">
            <img src="${hub.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold">Features</h4>
                <ol>

                    <li>Natural language processing</li>
                    <li>Contextual understanding</li>
                    <li>Text generation</li>
                </ol>
                <div class="d-flex justify-content-between">
                    <div>
                        <h4 class="fw-bold mt-3">${hub.name}</h4>
                        <input type="date" class="border-0 mt-1" id="start" name="trip-start"
                        value="2022-01-11"
                        min="2022-01-11" max="2022-01-11">
                    </div>
                    <button onclick="loadDataById('${hub.id}')" id="toggle-btn" type="button" class=" btn d-flex justify-content-between align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-arrow-right text-danger bg-danger-subtle rounded-circle fs-5 p-2"></i>
                    </button>  
                    
 
                </div>
            </div> 
          
        </div>
        
        ` 
        cardContainer.appendChild(hubDiv);
    })
   
}


loadData();

