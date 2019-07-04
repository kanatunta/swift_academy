function submit() {
    document.cookie = 'login=true';
    console.log(document.cookie);
}

function login() {
    const popup = `<div class="overlay">
<div class="popup">
<form action="" name="loginForm" >
<label for="" class="" >Username</label>
<input type="text" name="userNameinput">
<label for="" class="" >Password</label>
<input type="text" name="password">
<button type="button" value="Submit onclick="submit()">
</form>
</div>
</div>`;
    const body = document.body;
    const node = document.createElement('div');
    node.innerHTML = popup;
    body.appendChild(node);
}
