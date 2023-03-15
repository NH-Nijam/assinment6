let allData = []
const loadData = async() =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
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

const  loadDataById = async id =>{
    const Detailsurl = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const rest = await fetch(Detailsurl);
    const detailData  = await rest.json();
    console.log(detailData);
    tool = detailData.data
    
    const title = document.getElementById('model-title')
    title.innerHTML = `
        <div class="d-flex gap-4">
            <div class="card w-100 p-4 bg-danger-subtle rounded-4 border-danger ">
                <h4 class="text-justify">${tool.description}</h4>
                <div class="d-flex justify-content-between text-center  gap-2 mt-3">
                    <div class=" p-3 bg-white rounded d-flex justify-content-center align-items-center w-25">
                        <h5 class="text-success fs-6">${tool.pricing[0].price ? tool.pricing[0].price :'dibo na tore'} ${tool.pricing[0].plan}</h5>
                    </div>
                    <div class="p-3 bg-white rounded d-flex justify-content-center align-items-center w-25">
                        <h5 class="text-warning fs-6">${tool.pricing[1].price} ${tool.pricing[1].plan}</h5>
                    </div>
                    <div class="p-3 bg-white rounded d-flex justify-content-center align-items-center w-25">
                        <h5 class="text-danger fs-6">${tool.pricing[2].price} ${tool.pricing[1].plan}</h5> 
                    </div>
                </div>

                <div class="mt-5 d-flex gap-5">
                    <div>
                         <h4>Features</h4>
                         <ul class="mt-3 text-body-secondary fs-6">
                            <li>${tool.features[1].feature_name }</li>
                            <li>${tool.features[2].feature_name }</li>
                            <li>${tool.features[3].feature_name }</li>
                            
                         </ul>
                    </div>
                    <div>
                        <h4>Integrations</h4>
                        <ul class="mt-3 text-body-secondary fs-6" >
                            <li>${tool.integrations[0] ? tool.integrations[0] : 'No data Found'}</li>
                            <li>${tool.integrations[1] ? tool.integrations[1] : 'No data Found'}</li>
                            <li>${tool.integrations[2] ? tool.integrations[2] : 'No data Found'}</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="border rounded-4 p-4  ">
                <div class="card w-100 border-0">
                    <img src="${tool.image_link[0]}" class="card-img-top rounded-4  " alt="...">
                </div>
                <div class="text-center  mt-3  mx-auto">
                    <h3 class=" text-center">${tool.input_output_examples[0].input ? tool.input_output_examples[0].input : tool.input_output_examples[1].input}</h3>
                    <p class="mt-3 px-4">${tool.input_output_examples[0].output ? tool.input_output_examples[0].output : tool.input_output_examples[1].output}</p>
                </div>
                
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

