// new CircleType(document.getElementById('texttocircle'));

let butter;
window.onload = () => {
    butter = Butter('key'); // key = ButterCMS_token ???

    butter.page.retrieve('*', 'sample-page'
    ).then(function (resp) {
        console.log(resp.data)
    }).catch(function (resp) {
        console.log(resp)
    });
}