document.getElementById("copyrightyear").textContent = new Date().getFullYear();

// const copyrigtyear = document.getElementById("copyrightyear");
// copyrigtyear.textContent = new Date().getFullYear();

const lastDateModif = document.getElementById("lastupdated");
lastupdated.textContent = new Date(document.lastModified);
