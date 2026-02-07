// IPR access control (fail-closed)

window.addEventListener("DOMContentLoaded", ()=>{

  const verified = localStorage.getItem("HBCE_VERIFIED_PAYLOAD");

  if(!verified){
    document.getElementById("access_denied").style.display="block";
    document.getElementById("access_ok").style.display="none";
    return;
  }

  document.getElementById("access_denied").style.display="none";
  document.getElementById("access_ok").style.display="block";
});
