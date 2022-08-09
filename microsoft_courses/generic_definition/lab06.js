var DataStore = /** @class */ (function () {
    function DataStore() {
        this._data = new Array(10);
    }
    DataStore.prototype.AddOrUpdate = function (index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    };
    DataStore.prototype.GetData = function (index) {
        return this._data[index];
    };
    return DataStore;
}());
var empIDs = new DataStore();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);
console.log(empIDs.GetData(0)); // returns 50
var pets = new DataStore();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5 });
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 });
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
