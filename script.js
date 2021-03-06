'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countryName=document.querySelector('.country')
const submit=document.querySelector('.btn')
///////////////////////////////////////
function rendercountry(data){
    const html=`<article class="country">
    <img class="country__img" src=${data.flags.svg} />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>đŠī¸</span>${data.capital}</p>
      <p class="country__row"><span>đĢ</span>${(+data.population/100000000).toFixed(1)}M people</p>
      <p class="country__row"><span>đŖī¸</span>${data.languages[0].name}</p>
      <p class="country__row"><span>đ°</span>${data.currencies[0].name}</p>
      
    </div>
  </article>`
  countriesContainer.insertAdjacentHTML('beforeend',html)
  countriesContainer.style.opacity=1;
}
function countryData(country){

    //jsx call by old method
    /*
    let request=new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v2/name/${country}`
    )
    request.send();
    
    request.addEventListener('load',function(){
        const [data]=JSON.parse(this.response)
        console.log(data);
    })
    */

    // jsx call by promise

// fetch(`https://restcountries.com/v2/name/${country}`).then(function(res){
// console.log(res);
// return res.json()
// }).then(function([data]){
// console.log(data);
// rendercountry(data)
// })

fetch(`https://restcountries.com/v2/name/${country}`).then((res)=>res.json()
).then(([data])=>
rendercountry(data)
)

}
submit.addEventListener('click',function(e){
const name=countryName.value
console.log(name);
countryData(name)
})
