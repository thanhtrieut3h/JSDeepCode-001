import { linearSearch } from "./Search.js";
let product = [
    {id: 1, name: "iphone", price: 500},
    {id: 2, name: "samsung", price: 400},
    {id: 3, name: "sony", price: 300},
];
let test = [
    [],
    {},
    [],
    {},
    1,
    2,
    "khoa",
    "phuong"
]

linearSearch(product,["name", "price", "id"], "iphone");