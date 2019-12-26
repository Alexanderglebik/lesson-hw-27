function getDataFromServerCb(url = '', callback = function () {}) {
    setTimeout(() => {
        console.log(`Данные с ${ url } получены`);

        callback();
    }, 1500);
}

// https://api.github.com/users/USER_NAME/repos

/* <div class="card hoverable">
    <div class="card-image">
        <img src="${ AVATAR_URL }">
    </div>
    <div class="card-content text-darken-2">
        <span class="card-title"> REPOSITORY_NAME </span>
        <p> REPOSITORY_DESCRIPTION </p>
    </div>
</div  */

export { getDataFromServerCb };