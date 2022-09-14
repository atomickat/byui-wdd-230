document.getElementById("copyrightyear").textContent = new Date().getFullYear();

// const copyrigtyear = document.getElementById("copyrightyear");
// copyrigtyear.textContent = new Date().getFullYear();

// const lastDateModif = document.getElementById("lastupdated");
// lastupdated.textContent = new Date(document.lastModified);

const lastDateModif = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour12: true, hour:'numeric', minute:'numeric' };

document.getElementById("lastupdated").textContent = new Date().toLocaleDateString('en-US', lastDateModif);

