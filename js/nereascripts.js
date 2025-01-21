function playAnimation(avatarId){
    const avatar=document.getElementById(avatarId);
    avatar.pause();
    avatar.addEventListener('mouseenter',()=>{
        avatar.play().catch(error => console.error("Error al reproducir la animacion", error));
    });

}