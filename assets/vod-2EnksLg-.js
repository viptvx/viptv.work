import{d as i}from"./artConst-CoBZaXXQ.js";const{vod:t}=i,d={async all(){return await t.toArray()},async clear(){return await t.clear()},async add(a){return await t.add(a)},async bulkAdd(a){return await t.bulkAdd(a)},async find(a){return await t.get(a)},async get(a){return await t.get(a)},async update(a,r){return await t.update(a,r)},async remove(a){return await t.delete(a)},async pagination(a){let r=await t.toArray();a&&(r=r.filter(e=>e.name.includes(a)));const n=r.length;return{list:r,total:n}}};export{d as v};
