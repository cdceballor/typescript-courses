import { House } from './module/module1';

function readHouse(house: House) {
    console.log(house);
}

const h =({
    doors: 4,
    capacity: 2,
    address: "myHouse address"
});
readHouse(h);