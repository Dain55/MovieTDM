import { headerCreate } from "./ui";

let header = document.querySelector('header')
let favorite = location.search.split('=').at(-1)


headerCreate(header)