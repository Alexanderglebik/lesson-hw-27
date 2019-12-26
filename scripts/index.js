
async function readRepositories () {
    let response = await fetch('https://api.github.com/users/Alexanderglebik/repos');
    let repositories = await response.json();
    setTimeout(()=>{
    document.querySelector('#spinner').style.display = 'none';
    },2000);
    buildCards(repositories);

}

function buildCards(repositories) {
    let gridEl = document.querySelector('.grid');
    repositories.forEach(repositor => {
        let card = `
            <div class="card hoverable">
            <div class="card-image">
                <img src="${ repositor.owner.avatar_url }">
            </div>
            <div class="card-content text-darken-2">
                <span class="card-title"> ${ repositor.name } </span>
                <p> ${ repositor.description } </p>
            </div>
        </div>
        `;

        gridEl.insertAdjacentHTML('beforeend', card);
    });
}

readRepositories();

