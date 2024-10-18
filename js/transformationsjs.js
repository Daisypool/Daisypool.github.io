window.onload = function() {
    document.getElementById('genshinContainer').scrollIntoView();
  };

function scrollPersona() {
    document.getElementById('personaContainer').scrollIntoView();
    document.getElementById('personaContainer').style.visibility = 'visible'; 
    document.getElementById('personaContainer').style.opacity = '1';

    document.getElementById('genshinContainer').style.opacity = '1'; 
    setTimeout(() => {
        document.getElementById('genshinContainer').style.opacity = '0'; 
    }, 0)

    document.getElementById('brokenrealityContainer').style.opacity = '1'; 
    setTimeout(() => {
        document.getElementById('brokenrealityContainer').style.opacity = '0'; 
    }, 0)
}

function scrollGenshin() {
    document.getElementById('genshinContainer').scrollIntoView();
    document.getElementById('genshinContainer').style.visibility = 'visible'; 
    document.getElementById('genshinContainer').style.opacity = '1';

    document.getElementById('personaContainer').style.opacity = '1'; 
    setTimeout(() => {
        document.getElementById('personaContainer').style.opacity = '0'; 
    }, 0)
}

function scrollBrokenReality() {
    document.getElementById('brokenrealityContainer').scrollIntoView();
    document.getElementById('brokenrealityContainer').style.visibility = 'visible'; 
    document.getElementById('brokenrealityContainer').style.opacity = '1';

    document.getElementById('personaContainer').style.opacity = '1'; 
    setTimeout(() => {
        document.getElementById('personaContainer').style.opacity = '0'; 
    }, 0)
}




