const username = "daniele0118";
const followers = document.getElementById('seguidores');
const publicRepos = document.querySelector('#repositorios');
const foto = document.getElementById('foto');

async function getApiGitHub(){
    try{
        const dadosPerfil = await fetch(`https://api.github.com/users/${username}`);
        const perfil = await dadosPerfil.json();
        followers.innerHTML = `seguidores ${perfil.followers}`;
        publicRepos.innerHTML = `repositorios ${perfil.public_repos}`;
        foto.src = `${perfil.avatar_url}`;
    }catch(error){
        console.log(error);
    }
}

getApiGitHub();

