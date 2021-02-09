const form = document.querySelector("#searchForm");
const breweryListing = document.getElementById("breweries");
const rowEl = document.getElementById("rowCard");
const clearBtn = document.getElementById("clear-btn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("submitted");
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.openbrewerydb.org/breweries?by_city=${searchTerm}&per_page=50&sort=name`
  );
  createMarkup(res.data);
  //   console.log(res.data[0].name);
  form.elements.query.value = "";
  clearBtn.classList.remove("hidden");
});

function createMarkup(breweries) {
  let i = 0;
  for (let brewery of breweries) {
    i++;
    createListing(brewery);
    if ((i + 1) % 4 == 0) {
      createRow();
    }
    rowEl.appendChild(breweryEl);
  }
}

function createListing(data) {
  breweryEl = document.createElement("DIV");
  breweryEl.innerHTML = `
    <article class="brewery">
        <h3>${data.name}</h3>
        <p>${data.city}, ${data.state}, ${data.postal_code}</p>
        <a href="${data.website_url}">Home Page</a>
        </article>
        </div>
`;
  breweryEl.classList.add("col-md-4", "g-4", "brewery", "border", "rounded");
  console.log("createLising was called");
}

function createRow() {
  newRow = document.createElement("DIV");
  newRow.classList.add("row");
  console.log("createRow was called");
}

function clearResults() {
  var e = document.querySelector("#rowCard");

  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
  clearBtn.classList.add("hidden");
}

clearBtn.addEventListener("click", clearResults);

// div.innerHTML = `
// <div class="col-md-4">
// <article class="brewery">
//     <h3>${brewery.name}</h3>
//     <p>${brewery.city}, ${brewery.state}, ${brewery.postal_code}</p>
//     <a href="${brewery.website_url}">${brewery.website_url}</a>
//     </article>
//     </div>
// `;
// function createMarkup(breweries) {
//
//   for (let brewery of breweries) {
//
//     var div = document.createElement("DIV");
//     div.innerHTML = `
//     <article class="brewery">
//         <h3>${brewery.name}</h3>
//         <p>${brewery.city}, ${brewery.state}, ${brewery.postal_code}</p>
//         <a href="${brewery.website_url}">${brewery.website_url}</a>
//         </article>`;
//     breweryListing.appendChild(div);
//     div.classList.add("col-md-4");
//   }
// }

// function createMarkup(breweries) {
//   let content = [];
//   breweries.loci.forEach((loci, i) => {
//     if ((i + 1) % 4 == 0) {
//       content.push(
//         <div className="row" key={loci.id}>
//           <article key={loci.id} className="brewery col-md-3">
//             <h3>${brewery.name}</h3>
//             <p>
//               ${brewery.city}, ${brewery.state}, ${brewery.postal_code}
//             </p>
//             <a href="${brewery.website_url}">${brewery.website_url}</a>
//           </article>
//         </div>
//       );
//     } else {
//       content.push(
//         <article key={loci.id} className="brewery col-md-3">
//           <h3>${brewery.name}</h3>
//           <p>
//             ${brewery.city}, ${brewery.state}, ${brewery.postal_code}
//           </p>
//           <a href="${brewery.website_url}">${brewery.website_url}</a>
//         </article>
//       );
//     }
//   });
//   return <div>{content}</div>;
// }

// const makeDisplay = (breweries) => {
//   for (let brewery of breweries) {
//     // console.log(brewery);
//     //street city, state, postal_code
//     const block = document.createElement("div");
//     block.textContent = `${brewery.name}
//                          ${brewery.city} ${brewery.state} ${brewery.postal_code}
//                          ${brewery.website_url}`;
//     document.body.append(block);
//   }
// };
// return `
//     <article class="pokemon">
//         <h3>${data.name}</h3>
//         <p>The Pokemon ${data.name} has a base experience of ${data.base_experience}, they also weigh ${data.weight}</p>
//     </article>
// `
// const getBreweries = async () => {
//   const res = await axios.get(
//     "https://api.openbrewerydb.org/breweries?by_city=richmond"
//   );
//   console.log(res.data);
// };

// getBreweries()
