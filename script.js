    var clickableDivs = document.querySelectorAll('.click');
    // console.log(clickableDivs);

      // Iterate over the NodeList and attach a click event listener to each div(outer foreach)
      // Onclicking the food area div do display the foods in specified area
      clickableDivs.forEach(function(div) {
        div.addEventListener('click',()=>{
           
            // To access the innertext value of element
            var area_food= document.getElementById('card-title');
            var titleValue = area_food.textContent;

            // console.log("came");
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${titleValue}`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                // console.log(data,"kkkk");
    
            let section = document.getElementById('food_cousing');
            section.setAttribute('style','display:block');
    
            let container= document.createElement('div');
            container.classList.add('container','food_area');
            // container.innerHTML="<p d-flex justify-content-center>Here is your list of foods</p>";
           
            let row= document.createElement('div');
            row.classList.add('row');

            var div= document.createElement('div');
            div.classList.add('col-12','d-flex','justify-content-center','para');
            div.innerHTML=`<p>Food for your choice</p>`;

            
            row.appendChild(div);
            // Foreach method to iterate all the elements in the array. each element consists objects with key and value
            data['meals'].forEach(obj => {
           
            var col = document.createElement('div');
            col.classList.add('col-1g-2', 'col-md-3', 'col-12','mb-3', 'd-flex', 'justify-content-center');
            col.innerHTML=`<div class="card" style="width: 100%; height: 100%;">
                <img src=${obj.strMealThumb} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${obj.strMeal}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
        </div> `;
        // console.log(col);
        row.appendChild(col);
        container.appendChild(row);
        section.appendChild(container);
            });
        })
    });
    
    });

   // Onclick event to search the specfic food receipe

let btn= document.getElementById('button');

btn.addEventListener('click',receipe_fetch);

function receipe_fetch()
   {
       async function search_receipe()
       {
         let food= document.getElementById('src_fd').value;
         console.log(food);
         let resp= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
         let result= await resp.json();
        
         result['meals'].forEach(ele=>{
            // console.log(ele.strYoutube);
            var col= document.createElement('div');
            col.classList.add('col-1g-6' ,'col-md-6', 'col-12', 'mb-3', 'd-flex', 'justify-content-center');

            col.innerHTML=`<div class="card card_search" style="width: 100%; height: 100%;">
                         <img src=${ele.strMealThumb} class="card-img-top" alt="...">
                         <div class="card-body">
                           <h5 class="card-title">${ele.strMeal}</h5>
                           <h6>${ele.strArea}</h6>
                           <p class="card-text">${ele.strInstructions}</p><br>
                           <p> <b>Ingredients:</b> ${ele.strIngredient1},${ele.strIngredient2},${ele.strIngredient3},
                           ${ele.strIngredient4},${ele.strIngredient5},${ele.strIngredient6},${ele.strIngredient7},
                           ${ele.strIngredient8},${ele.strIngredient9},${ele.strIngredient11},${ele.strIngredient12},
                           ${ele.strIngredient13},${ele.strIngredient14},${ele.strIngredient15},${ele.strIngredient16},
                           ${ele.strIngredient17},${ele.strIngredient18},${ele.strIngredient19},${ele.strIngredient20}
                           </p>
                           <a href=${ele.strYoutube} target="_blank" class="btn btn-primary">Watch youtube</a>
                         </div>
                       </div>`
                    //    <iframe width="100%" height="315" src=${ele.strYoutube} frameborder="1" allowfullscreen>video loading...</iframe>
                       var row = document.getElementById('row');
         row.appendChild(col);
         });
         
         

           // To show the modal
         $('#infoModal').modal('show');
       
       // console.log(result);
       
       }
       search_receipe();
}


    // Onclicking the food area div do display the foods in specified area

    // let america = document.getElementById('amer');
    // let indian = document.getElementById('indi');
    // let chinese = document.getElementById('chni');
    // let Egyptian = document.getElementById('egy');
    // let Filipino = document.getElementById('filip');
    // let French = document.getElementById('fren');
    // let Canadian = document.getElementById('cand');
    // let Italian = document.getElementById('ital');
    // let Thai = document.getElementById('thai');

//     america.addEventListener('click',()=>{
//         // return area ="American";
//         console.log("came");
//         fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((data)=>{
//             // console.log(data,"kkkk");

//         let section = document.getElementById('food_cousing');
//         section.setAttribute('style','display:block');

//         let container= document.createElement('div');
//         container.classList.add('container','food_area');
//         // container.innerHTML="<p d-flex justify-content-center>Here is your list of foods</p>";
       
//         let row= document.createElement('div');
//         row.classList.add('row');
      
//         // Foreach method to iterate all the elements in the array. each element consists objects with key and value
//         data['meals'].forEach(obj => {
       
//         var col = document.createElement('div');
//         col.classList.add('col-1g-2', 'col-md-3', 'col-12', 'd-flex', 'justify-content-center');
//         col.innerHTML=`<div class="card" style="width: 100%; height: 100%;">
//             <img src=${obj.strMealThumb} class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${obj.strMeal}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//           </div>
//     </div> `;
//     // console.log(col);
//     row.appendChild(col);
//     container.appendChild(row);
//     section.appendChild(container);
//         });
//     })
// });

