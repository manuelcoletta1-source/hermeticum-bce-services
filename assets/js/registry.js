// PUBLIC NODE REGISTRY ENGINE

async function loadRegistry(){
  const res = await fetch("registry.json");
  return await res.json();
}

async function render(){

  const data = await loadRegistry();
  const list = document.getElementById("node_list");

  if(!data.nodes.length){
    list.textContent = "No nodes registered yet.";
    return;
  }

  let out="";
  data.nodes.forEach(n=>{
    out += "nickname: " + n.nickname + "\n";
    out += "payload: " + n.payload_sha256 + "\n";
    out += "time: " + n.timestamp + "\n";
    out += "----\n";
  });

  list.textContent = out;
}

async function registerNode(){

  const payload = localStorage.getItem("HBCE_VERIFIED_PAYLOAD");
  const receipt = JSON.parse(localStorage.getItem("HBCE_LAST_RECEIPT")||"{}");

  const status = document.getElementById("reg_status");

  if(!payload){
    status.className="result bad";
    status.textContent="DENIED: verify IPR first";
    return;
  }

  const node = {
    nickname: receipt.public?.nickname || "public",
    payload_sha256: payload,
    timestamp: new Date().toISOString()
  };

  status.className="result ok";
  status.textContent=
`NODE READY TO REGISTER

Copy this block and append to registry.json:

` + JSON.stringify(node,null,2);
}

window.addEventListener("DOMContentLoaded", render);
