const loadData = async() =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayHub(data.data.tools)
}
const displayHub = hubData =>{
    const cardContainer =document.getElementById('card-container');
    const seeMore =document.getElementById('see-more');
    if(hubData.length > 6){
        hubData =hubData.slice(0, 6);
        seeMore.classList.remove('d-none')
    }
    else{

    }

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
                    <button id="toggle-btn" type="button" class=" btn d-flex justify-content-between align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
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