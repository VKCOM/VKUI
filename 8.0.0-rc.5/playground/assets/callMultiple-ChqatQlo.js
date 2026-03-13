const o=(...c)=>(...l)=>c.filter(t=>typeof t=="function").forEach(t=>t(...l));export{o as c};
