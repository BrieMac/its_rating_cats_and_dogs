//Using JavaScript with Aysnc and Await -->
//
const getDog = async function() {
  const response = await fetch("https://random.dog/woof.json");
  const json = await response.json();

  if (document.getElementById("rando_dog") !== null) {
    if (json["url"].endsWith(".mp4")) {
      document.getElementById(
        "rando_dog"
      ).innerHTML = `<video autoplay=true width=250 muted=true>
    <source src="${json["url"]}" type="video/mp4">
    </video>`;
    } else {
      document.getElementById("rando_dog").innerHTML = `<img src ="${
        json["url"]
      }" \/>`;
    }
  }
};
getDog();

// //Using JavaScript with Fetch and .then -->
// //
//   $(document).ready(function(){
//     fetch('https://random.dog/woof.json')
//         .then(response => response.json())
//         //.then(json => document.getElementById('rando_dog').innerHTML = `<img src ="${json["url"]}" \/>`);
//   })
//
//
// //Get a rando dog with JQuery -->
// //
//   $(document).ready(function(){
//     $.get('https://random.dog/woof.json', function(data, status){
//       var rando_dog = `${data["url"]}`
//
//       // document.getElementById('rando_dog').innerHTML = `<img src ="${rando_dog}" \/>`
//     })
//   })
//
//
// //Get a rando dog with JavaScript-->
// //
//   const Http = new XMLHttpRequest();
//   const url='https://random.dog/woof.json';
//   Http.open("GET", url);
//   Http.send();
//
//   Http.onreadystatechange = function(){
//     if(this.readyState==4 && this.status==200){
//       var response = Http.responseText
//       var json = JSON.parse(response)
//       var rando_dog = json["url"]
//
//       // document.getElementById('rando_dog').innerHTML = `<img src ="${rando_dog}" \/>`
//     }
//   }
//
