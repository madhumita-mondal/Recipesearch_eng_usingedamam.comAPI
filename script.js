// form = document.querySelector('form')


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     inpVal = e.target.querySelector('input').value;
//     console.log(inpVal)
//     app_id = 'd8feb9b1';
//     app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
//     fetchValue();
// })

// async function fetchValue() {
//     baseUrl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=4`

//     resp = await fetch(baseUrl)
//     data = await resp.json();
//     console.log(data.hits)
//     generateHTML(data.hits)
// }

// function generateHTML(results) {
//     showinHTML = '';
//     results.map(result => {
//         showinHTML += `
//         <div class="col-3 my-3">
//         <div class="card">
//             <div class="card-body">
//                 <img src="${result.recipe.image}" alt="" class='img-fluid'>
//                 <h6 class=' text-center my-2 
//                 text-truncate '>${result.recipe.label}</h6>
//                 <div class="d-flex justify-content-between align-items-center">
//                     <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
//                     <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//         `;
//     })
//     document.querySelector('#showRecipe').innerHTML = showinHTML
// }


form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    fetchData4mAPI(inpValue)
})

async function fetchData4mAPI(inpVal) {
    app_id = 'd8feb9b1';
    app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
    baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=4`;
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
    genrateHTML(datas.hits);
}

function genrateHTML(results) {
    showINHTML = '';
    results.map(result => {
        showINHTML += `
        <div class="col-3 my-3">
        <div class="card">
            <div class="card-body">
                <img src="${result.recipe.image}" alt="" class='img-fluid'>
                <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                    <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
                </div>
            </div>
        </div>
    </div> 
        `
        document.querySelector('#showRecipe').innerHTML = showINHTML;

    })
}