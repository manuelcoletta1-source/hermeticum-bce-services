// IPR NETWORK ENGINE
// append-only local registry
// hash-only identity references
// EU-first

let receipt = null;
let registry = null;

function loadReceipt(){
  try{
    const r = localStorage.getItem("HBCE_LAST_RECEIPT");
    if(!r) return null;
    return JSON.parse(r);
  }catch(e){return null;}
}

function saveRegistry(){
  localStorage.setItem("IPR_NETWORK_REGISTRY", JSON.stringify(registry));
}

function loadRegistry(){
  try{
    const r = localStorage.getItem("IPR_NETWORK_REGISTRY");
    if(!r) return null;
    return JSON.parse(r);
  }catch(e){return null;}
}

function set(el,txt,ok=true){
  const e=document.getElementById(el);
  if(!e) return;
  e.className="result "+(ok?"ok":"bad");
  e.textContent=txt;
}

function renderOrigin(){
  if(!registry || !registry.origin){
    set("origin_node","No origin node",false);
    return;
  }

  const o = registry.origin;

  set("origin_node",
`ORIGIN NODE ACTIVE

nickname: ${o.nickname}
payload: ${o.payload}
timestamp: ${o.ts}
role: ORIGIN_NODE`, true);
}

function renderList(){
  if(!registry || !registry.nodes){
    set("node_list","empty",false);
    return;
  }

  if(registry.nodes.length===0){
    set("node_list","no nodes yet",false);
    return;
  }

  let txt="";
  registry.nodes.forEach(n=>{
    txt+=`${n.nickname} | ${n.payload}\n`;
  });

  set("node_list",txt,true);
}

function init(){

  receipt = loadReceipt();

  if(!receipt){
    set("net_status","DENIED\nno verified receipt",false);
    return;
  }

  set("net_status","AUTHORIZED\nreceipt detected",true);

  registry = loadRegistry();

  if(!registry){
    registry = {
      proto:"IPR_NETWORK_v1",
      policy:["APPEND_ONLY","HASH_ONLY","EU_FIRST"],
      origin:null,
      nodes:[]
    };
  }

  // create origin if not exists
  if(!registry.origin){
    registry.origin={
      nickname:receipt.public.nickname,
      payload:receipt.payload_sha256,
      ts:new Date().toISOString(),
      role:"ORIGIN_NODE"
    };

    registry.nodes.push({
      nickname:receipt.public.nickname,
      payload:receipt.payload_sha256
    });

    saveRegistry();
  }

  renderOrigin();
  renderList();
}

function NET_join(){

  if(!receipt) return set("join_result","DENIED\nno receipt",false);

  const exists = registry.nodes.find(n=>n.payload===receipt.payload_sha256);
  if(exists) return set("join_result","already in network",false);

  registry.nodes.push({
    nickname:receipt.public.nickname,
    payload:receipt.payload_sha256
  });

  saveRegistry();
  renderList();

  set("join_result","AUTHORIZED\nnode appended",true);
}

window.NET_join = NET_join;

window.addEventListener("DOMContentLoaded", init);
