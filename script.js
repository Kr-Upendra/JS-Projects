const cardContainer = document.querySelector(".container");

async function getProjects() {
  try {
    const response = await axios.get("./projects.json");
    const projects = response.data;
    const output = projects
      .map((item) => {
        return `
        <div class="cards">
          <div class="cards__img">
            <img src="${item.image}" alt="Projects Image" />
            <div class="daycount">
              <span>Project No. ${item.projectNumber}</span>
            </div>
          </div>
          <div class="cards__detail">
            <h4>${item.name}</h4>
          </div>
          <div class="cards__link">
            <a class="btn" href="${
              item.sourcelink
            }" target="_blank">Source Code</a>
          </div>
          <div class="cards__tag">
            <span class="el-tags">${item.tags[0]}</span>
            ${
              item.tags[1] ? `<span class="el-tags">${item.tags[1]}</span>` : ""
            }
            ${
              item.tags[2] ? `<span class="el-tags">${item.tags[2]}</span>` : ""
            }
          </div>
        </div>
        `;
      })
      .join("");
    cardContainer.innerHTML = output;
  } catch (err) {
    console.log(err);
  }
}

getProjects();
