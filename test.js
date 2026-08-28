/*Cree un programa que dado un arreglo de números desordenados los ordene
ascendentemente*/
const arrayFive = [5, 12, 33, 13, 15, 16, 7, 11, 9, 1];

function orderAscending() {

    for (let i = 0; i < arrayFive.length; i++) {

        for (let j = 0; j < arrayFive.length - 1; j++) {

            if (arrayFive[j] > arrayFive[j + 1]) {

                let temporary = arrayFive[j];

                arrayFive[j] = arrayFive[j + 1];

                arrayFive[j + 1] = temporary;
            }
        }
    }

    return arrayFive;
}

console.log(orderAscending());
