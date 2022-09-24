let sourceArray = [
    { item: "breakfast", type: "sandwitch", price: 15 },
    { item: "breakfast", type: "fruit", price: 10 },
    { item: "lunch", type: "salad", price: 3 },
    { item: "lunch", type: "rice", price: 5 },
    { item: "dinner", type: "noodles", price: 8 },
]

function averagePerType(source, filter) {
    let result = {};
    filter.forEach(element => {
        let total = source.filter((c, i) => c.item === element).reduce(function (s, c) {
            return s + c.price;
        }, 0)
        result[element] = total / source.filter((c, i) => c.item === element).length;
    });
    return result;
}

console.log(averagePerType(sourceArray, ['breakfast', 'lunch']))
