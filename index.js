const here= document.getElementById('here')
const there= document.getElementById('there')
const login=document.getElementById('login')
const loginInfo=document.getElementById('loginInfo')
const signup = document.getElementById('signup')
const signupInfo = document.getElementById('signupInfo')

here.onclick = function(){
    login.style.display='none';
    loginInfo.style.display='block'
    signup.style.display='block'
    signupInfo.style.display='none'
}
there.onclick = function(){
    login.style.display='block';
    loginInfo.style.display='none'
    signup.style.display='none'
    signupInfo.style.display='block'
}