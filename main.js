// Header
let navbarContainerOpen = false;
$(`.navBarBtn`).click(function () {
    if (navbarContainerOpen == false) {
        $(`.navbarContainer`).animate({ left: '0' });
        navbarContainerOpen = true
    } else if (navbarContainerOpen == true) {
        $(`.navbarContainer`).animate({ left: '-100%' });
        navbarContainerOpen = false
    }

})


$(`.home`).addClass(`openPage`);

$(`.home`).click(function () {
    $(`.home`).addClass(`openPage`);
    $(`.shares`).removeClass(`openPage`);
    $(`.pizzaContainer`).removeClass(`openPage`);
    $(`.drinks`).removeClass(`openPage`);
    $(`.sites`).removeClass(`openPage`);
    $(`.desserts`).removeClass(`openPage`);
    $(`.pizzaConstructor`).removeClass(`openPage`);
    $(`.homePage`).css(`display`, `flex`);
    $(`.sharesPage`).css(`display`, `none`);
    $(`.pizzaContainerPage`).css(`display`, `none`);
    $(`.drinksPage`).css(`display`, `none`);
    $(`.sitesPage`).css(`display`, `none`);
    $(`.dessertsPage`).css(`display`, `none`);
    $(`.pizzaConstructorPage`).css(`display`, `none`);
})

$(`.shares`).click(function () {
    $(`.home`).removeClass(`openPage`);
    $(`.shares`).addClass(`openPage`);
    $(`.pizzaContainer`).removeClass(`openPage`);
    $(`.drinks`).removeClass(`openPage`);
    $(`.sites`).removeClass(`openPage`);
    $(`.desserts`).removeClass(`openPage`);
    $(`.pizzaConstructor`).removeClass(`openPage`);
    $(`.homePage`).css(`display`, `none`);
    $(`.sharesPage`).css(`display`, `flex`);
    $(`.pizzaContainerPage`).css(`display`, `none`);
    $(`.drinksPage`).css(`display`, `none`);
    $(`.sitesPage`).css(`display`, `none`);
    $(`.dessertsPage`).css(`display`, `none`);
    $(`.pizzaConstructorPage`).css(`display`, `none`);
})

$(`.pizzaContainer`).click(function () {
    $(`.home`).removeClass(`openPage`);
    $(`.shares`).removeClass(`openPage`);
    $(`.pizzaContainer`).addClass(`openPage`);
    $(`.drinks`).removeClass(`openPage`);
    $(`.sites`).removeClass(`openPage`);
    $(`.desserts`).removeClass(`openPage`);
    $(`.pizzaConstructor`).removeClass(`openPage`);
    $(`.homePage`).css(`display`, `none`);
    $(`.sharesPage`).css(`display`, `none`);
    $(`.pizzaContainerPage`).css(`display`, `flex`);
    $(`.drinksPage`).css(`display`, `none`);
    $(`.sitesPage`).css(`display`, `none`);
    $(`.dessertsPage`).css(`display`, `none`);
    $(`.pizzaConstructorPage`).css(`display`, `none`);
})

$(`.drinks`).click(function () {
    $(`.home`).removeClass(`openPage`);
    $(`.shares`).removeClass(`openPage`);
    $(`.pizzaContainer`).removeClass(`openPage`);
    $(`.drinks`).addClass(`openPage`);
    $(`.sites`).removeClass(`openPage`);
    $(`.desserts`).removeClass(`openPage`);
    $(`.pizzaConstructor`).removeClass(`openPage`);
    $(`.homePage`).css(`display`, `none`);
    $(`.sharesPage`).css(`display`, `none`);
    $(`.pizzaContainerPage`).css(`display`, `none`);
    $(`.drinksPage`).css(`display`, `flex`);
    $(`.sitesPage`).css(`display`, `none`);
    $(`.dessertsPage`).css(`display`, `none`);
    $(`.pizzaConstructorPage`).css(`display`, `none`);
})

$(`.sites`).click(function () {
    $(`.home`).removeClass(`openPage`);
    $(`.shares`).removeClass(`openPage`);
    $(`.pizzaContainer`).removeClass(`openPage`);
    $(`.drinks`).removeClass(`openPage`);
    $(`.sites`).addClass(`openPage`);
    $(`.desserts`).removeClass(`openPage`);
    $(`.pizzaConstructor`).removeClass(`openPage`);
    $(`.homePage`).css(`display`, `none`);
    $(`.sharesPage`).css(`display`, `none`);
    $(`.pizzaContainerPage`).css(`display`, `none`);
    $(`.drinksPage`).css(`display`, `none`);
    $(`.sitesPage`).css(`display`, `flex`);
    $(`.dessertsPage`).css(`display`, `none`);
    $(`.pizzaConstructorPage`).css(`display`, `none`);
})

$(`.desserts`).click(function () {
    $(`.home`).removeClass(`openPage`);
    $(`.shares`).removeClass(`openPage`);
    $(`.pizzaContainer`).removeClass(`openPage`);
    $(`.drinks`).removeClass(`openPage`);
    $(`.sites`).removeClass(`openPage`);
    $(`.desserts`).addClass(`openPage`);
    $(`.pizzaConstructor`).removeClass(`openPage`);
    $(`.homePage`).css(`display`, `none`);
    $(`.sharesPage`).css(`display`, `none`);
    $(`.pizzaContainerPage`).css(`display`, `none`);
    $(`.drinksPage`).css(`display`, `none`);
    $(`.sitesPage`).css(`display`, `none`);
    $(`.dessertsPage`).css(`display`, `flex`);
    $(`.pizzaConstructorPage`).css(`display`, `none`);
})

$(`.pizzaConstructor`).click(function () {
    $(`.home`).removeClass(`openPage`);
    $(`.shares`).removeClass(`openPage`);
    $(`.pizzaContainer`).removeClass(`openPage`);
    $(`.drinks`).removeClass(`openPage`);
    $(`.sites`).removeClass(`openPage`);
    $(`.desserts`).removeClass(`openPage`);
    $(`.pizzaConstructor`).addClass(`openPage`);
    $(`.homePage`).css(`display`, `none`);
    $(`.sharesPage`).css(`display`, `none`);
    $(`.pizzaContainerPage`).css(`display`, `none`);
    $(`.drinksPage`).css(`display`, `none`);
    $(`.sitesPage`).css(`display`, `none`);
    $(`.dessertsPage`).css(`display`, `none`);
    $(`.pizzaConstructorPage`).css(`display`, `flex`);
})
$(`.SelectedOrderContainer`).hide()

let numberPizzaBasket = 0;
$(`.basketContainer`).click(function () {
    $(`.SelectedOrderContainer`).toggle();
    if (numberPizzaBasket == 0) {
        $(`.SelectedOrderContainerFalse`).css(`display`, `flex`)
        $(`.SelectedOrderContainerTrue`).css(`display`, `none`)
        // haveOrderCart = true
    } else if (numberPizzaBasket >= 1) {
        $(`.SelectedOrderContainerFalse`).css(`display`, `none`)
        $(`.SelectedOrderContainerTrue`).css(`display`, `flex`)
        // haveOrderCart = false
    }
});

$(document).ready(function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        if (slideIndex >= $('.banner-slider img').length) {
            slideIndex = 0;
        }
        $('.banner-slider img').hide().eq(slideIndex).show();
        slideIndex++;
        setTimeout(showSlides, 3000);
    }
});

let oredrtoday = 0;
let customertoday = 0;
let manytoday = 0;

setInterval(() => {
    if (oredrtoday < 137) {
        oredrtoday++;
        $(`.NumberCompletedOrdersContainerTxt`).text(oredrtoday);
    } else if (oredrtoday === 137) {
        setTimeout(() => {
            oredrtoday = 0;
        },2000);
    }
}, 1);


setInterval(() => {
    if (customertoday < 136) {
        customertoday++;
        $(`.NumberSatisfiedCustomersContainerTxt`).text(customertoday);
    } else if (customertoday === 136) {
        setTimeout(() => {
            customertoday = 0;
        }, 2000);
    }
}, 1);

setInterval(() => {
    if (manytoday < 275) {
        manytoday++;
        $(`.AmountMoneyEarnedContainerTxt`).text(manytoday);
    } else if (manytoday === 275) {
        setTimeout(() => {
            manytoday = 0;
        }, 2000);
    }
}, 1);




// Сторінка акцій
let data = [
    {
        pizzaName: `Папероні`,
        price: 285,
        weight: 514,
        souses: `Domino's`,
        meets: `Папероні`,
        cheeses: `Моцарела`,
        vegitables: `Немає`,
    },
    {
        pizzaName: `Барбекю`,
        price: 285,
        weight: 543,
        souses: `Domino's`,
        meets: `Бекон, Курка`,
        cheeses: `Моцарела`,
        vegitables: `Гриби, Цибуля`,
    },
    {
        pizzaName: `Карбонара`,
        price: 285,
        weight: 502,
        souses: `Альфредо`,
        meets: `Бекон, Шинка`,
        cheeses: `Моцарела`,
        vegitables: `Гриби, Цибуля`,
    },
    {
        pizzaName: `Кантрі`,
        price: 285,
        weight: 527,
        souses: `Часниковий`,
        meets: `Бекон, Шинка`,
        cheeses: `Моцарела`,
        vegitables: `Гриби, Цибуля, Огірки мариновані`,
    }
]

let angle = 0;
let currentPosition = 0;

$('.nextBtn').click(function () {
    angle += 90;
    $('.plate').css('transform', `rotate(${angle}deg)`);

    if (currentPosition < data.length - 1) {
        currentPosition++;
        showInfo();

    } else {
        currentPosition = 0;
        showInfo();

    }

})

$('.backBtn').click(function () {
    angle -= 90;
    $('.plate').css('transform', `rotate(${angle}deg)`);

    if (currentPosition > 0) {
        currentPosition--;
        showInfo();


    } else {
        currentPosition = data.length - 1;
        showInfo();

    }
})

let totalPrice = 0;

let numberPaperoni = 0;
let numberBarbeku = 0;
let numberKarbonara = 0;
let numberKantri = 0;

$(`.cardSelectedPizza`).hide();
$(`.cardSelectedPizzaPaperoni`).hide();

$(`.buyBtn`).click(function () {
    if (data[currentPosition].pizzaName == `Папероні`) {
        if (numberPaperoni == 0) {
            numberPizzaBasket++;
            numberPaperoni++;
            $(`.cardSelectedPizzaTxtNamePaperoni`).text(data[currentPosition].pizzaName);
            $(`.priceCardSelectedPizzaPaperoni`).text(`${data[currentPosition].price} Грн`);
            $(`.cardSelectedPizzaPaperoni`).show();
            totalPrice += data[currentPosition].price
            $(`.price`).text(`${totalPrice} Грн`);
        } else if (numberPaperoni >= 1) {
            $(`.numberPizzaPaperoni`).text(numberPaperoni + 1);
            numberPaperoni++;
            numberPizzaBasket++;
            $(`.priceCardSelectedPizzaPaperoni`).text(`${data[currentPosition].price * numberPaperoni} Грн`);
            totalPrice += data[currentPosition].price
            $(`.price`).text(`${totalPrice} Грн`);
            $(`.cardSelectedPizzaPaperoni`).show();
        }
    } else if (data[currentPosition].pizzaName == `Барбекю`) {
        if (numberBarbeku == 0) {
            numberPizzaBasket++;
            numberBarbeku++;
            $(`.cardSelectedPizzaTxtNameBarbeku`).text(data[currentPosition].pizzaName);
            $(`.priceCardSelectedPizzaBarbeku`).text(`${data[currentPosition].price} Грн`);
            $(`.cardSelectedPizzaBarbeku`).show();
            totalPrice += data[currentPosition].price
            $(`.price`).text(`${totalPrice} Грн`);
        } else if (numberBarbeku >= 1) {
            $(`.numberPizzaBarbeku`).text(numberBarbeku + 1);
            numberBarbeku++;
            numberPizzaBasket++;
            $(`.priceCardSelectedPizzaBarbeku`).text(`${data[currentPosition].price * numberBarbeku} Грн`);
            totalPrice += data[currentPosition].price
            $(`.price`).text(`${totalPrice} Грн`);
            $(`.cardSelectedPizzaBarbeku`).show();
        }
    }
    else if (data[currentPosition].pizzaName == `Карбонара`) {
        if (numberKarbonara == 0) {
            numberPizzaBasket++;
            numberKarbonara++;
            $(`.cardSelectedPizzaTxtNameKarbonara`).text(data[currentPosition].pizzaName);
            $(`.priceCardSelectedPizzaKarbonara`).text(`${data[currentPosition].price} Грн`);
            $(`.cardSelectedPizzaKarbonara`).show();
            totalPrice += data[currentPosition].price;
            $(`.price`).text(`${totalPrice} Грн`);
            $(`.numberPizzaKarbonara`).text(numberKarbonara);
        } else if (numberKarbonara >= 1) {
            $(`.numberPizzaKarbonara`).text(numberKarbonara + 1);
            numberKarbonara++;
            numberPizzaBasket++;
            $(`.priceCardSelectedPizzaKarbonara`).text(`${data[currentPosition].price * numberKarbonara} Грн`);
            totalPrice += data[currentPosition].price;
            $(`.price`).text(`${totalPrice} Грн`);
            $(`.cardSelectedPizzaKarbonara`).show();
        }
    } else if (data[currentPosition].pizzaName == `Кантрі`) {
        if (numberKantri == 0) {
            numberPizzaBasket++;
            numberKantri++;
            $(`.cardSelectedPizzaTxtNameKantri`).text(data[currentPosition].pizzaName);
            $(`.priceCardSelectedPizzaKantri`).text(`${data[currentPosition].price} Грн`);
            $(`.cardSelectedPizzaKantri`).show();
            totalPrice += data[currentPosition].price;
            $(`.price`).text(`${totalPrice} Грн`);
            $(`.numberPizzaKantri`).text(numberKantri);
        } else if (numberKantri >= 1) {
            $(`.numberPizzaKantri`).text(numberKantri + 1);
            numberKantri++;
            numberPizzaBasket++;
            $(`.priceCardSelectedPizzaKantri`).text(`${data[currentPosition].price * numberKantri} Грн`);
            totalPrice += data[currentPosition].price;
            $(`.price`).text(`${totalPrice} Грн`);
            $(`.cardSelectedPizzaKantri`).show();
        }
    }
    $(`.txtNmberOrders`).text(numberPizzaBasket)
});

$(`.arrowPluscardSelectedPizzaBarbeku`).click(function () {
    $(`.numberPizzaBarbeku`).text(numberBarbeku + 1);
    numberBarbeku++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket)
    $(`.priceCardSelectedPizzaBarbeku`).text(`${data[currentPosition].price * numberPaperoni} Грн`);
    totalPrice += data[currentPosition].price
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaBarbeku`).click(function () {
    if (numberBarbeku <= 1) {
        numberPizzaBasket--;
        $(`.cardSelectedPizzaBarbeku`).hide();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= data[currentPosition].price;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.priceCardSelectedPizzaBarbeku`).text(`${data[currentPosition].price * numberBarbeku} Грн`);
        numberBarbeku = 0
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberBarbeku > 0) {
        $(`.numberPizzaBarbeku`).text(numberBarbeku - 1);
        numberBarbeku--;
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaBarbeku`).text(`${data[currentPosition].price * numberBarbeku} Грн`);
        totalPrice -= data[currentPosition].price
        $(`.price`).text(`${totalPrice} Грн`);
    }
})


$(`.arrowPluscardSelectedPizzaPaperoni`).click(function () {
    $(`.numberPizzaPaperoni`).text(numberPaperoni + 1);
    numberPaperoni++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket)
    $(`.priceCardSelectedPizzaPaperoni`).text(`${data[currentPosition].price * numberPaperoni} Грн`);
    totalPrice += data[currentPosition].price
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaPaperoni`).click(function () {
    if (numberPaperoni <= 1) {
        $(`.cardSelectedPizzaPaperoni`).hide();
        $(`.priceCardSelectedPizzaPaperoni`).text(`${data[currentPosition].price * numberPaperoni} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= data[currentPosition].price;
        $(`.price`).text(`${totalPrice} Грн`);
        numberPaperoni = 0;
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberPaperoni > 0) {
        $(`.numberPizzaPaperoni`).text(numberPaperoni - 1);
        numberPaperoni--;
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaPaperoni`).text(`${data[currentPosition].price * numberPaperoni} Грн`);
        totalPrice -= data[currentPosition].price;
        $(`.price`).text(`${totalPrice} Грн`);
    }
})


$(`.arrowPluscardSelectedPizzaKarbonara`).click(function () {
    $(`.numberPizzaKarbonara`).text(numberKarbonara + 1);
    numberKarbonara++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket)
    $(`.priceCardSelectedPizzaKarbonara`).text(`${data[currentPosition].price * numberKarbonara} Грн`);
    totalPrice += data[currentPosition].price
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaKarbonara`).click(function () {
    if (numberKarbonara <= 1) {
        $(`.cardSelectedPizzaKarbonara`).hide();
        $(`.priceCardSelectedPizzaKarbonara`).text(`${data[currentPosition].price * numberKarbonara} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= data[currentPosition].price;
        $(`.price`).text(`${totalPrice} Грн`);
        numberKarbonara = 0;
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberKarbonara > 0) {
        $(`.numberPizzaKarbonara`).text(numberKarbonara - 1);
        numberKarbonara--;
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaKarbonara`).text(`${data[currentPosition].price * numberKarbonara} Грн`);
        totalPrice -= data[currentPosition].price;
        $(`.price`).text(`${totalPrice} Грн`);
    }
})

$(`.arrowPluscardSelectedPizzaKantri`).click(function () {
    $(`.numberPizzaKantri`).text(numberKantri + 1);
    numberKantri++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket)
    $(`.priceCardSelectedPizzaKantri`).text(`${data[currentPosition].price * numberKantri} Грн`);
    totalPrice += data[currentPosition].price
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaKantri`).click(function () {
    if (numberKantri <= 1) {
        $(`.cardSelectedPizzaKantri`).hide();
        $(`.priceCardSelectedPizzaKantri`).text(`${data[currentPosition].price * numberKantri} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= data[currentPosition].price;
        $(`.price`).text(`${totalPrice} Грн`);
        numberKantri = 0;
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberKantri > 0) {
        $(`.numberPizzaKantri`).text(numberKantri - 1);
        numberKantri--;
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaKantri`).text(`${data[currentPosition].price * numberKantri} Грн`);
        totalPrice -= data[currentPosition].price;
        $(`.price`).text(`${totalPrice} Грн`);
    }
})

function showInfo() {
    $('.ingredientContainer').empty();
    $(`.nameActionItem`).empty();
    $(`.priceItem`).empty();
    $('.ingredientContainer').append(`
        <li>Соуси: ${data[currentPosition].souses}</li>
        <li>М'ясо: ${data[currentPosition].meets}</li>
        <li>Сири: ${data[currentPosition].cheeses}</li>
        <li>Овочі: ${data[currentPosition].vegitables}</li>
        `
    )
    $(`.nameActionItem`).text(`${data[currentPosition].pizzaName}`)
    $(`.priceItem`).text(`${data[currentPosition].price} Грн`)
}

showInfo();


// Сторінка піци
let peiceSweePizza = 300;
let priceAddedSweePizza1 = false;
let priceAddedSweePizza2 = false;
let priceAddedSweePizza3 = false;


function checkPeiceSweePizza() {
    if ($(`.pizzaSelectionSizeBtnStandardsweetpizza`).hasClass(`chosenSizePizzaItem`)) {
        peiceSweePizza = 300
        priceAddedSweePizza1 = false;
        priceAddedSweePizza2 = false;
        priceAddedSweePizza3 = false;
        $(`.pizzaSelectionPricesweetpizza`).text(`${peiceSweePizza} Грн`);
    } else if ($(`.pizzaSelectionSizeBtnLargesweetpizza`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedSweePizza1 == false) {
            peiceSweePizza = 300
            peiceSweePizza += 55;
            priceAddedSweePizza1 = true;
            $(`.pizzaSelectionPricesweetpizza`).text(`${peiceSweePizza} Грн`);
            priceAddedSweePizza2 = false;
            priceAddedSweePizza3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnExtraLargesweetpizza`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedSweePizza2 == false) {
            peiceSweePizza = 300
            peiceSweePizza += 105;
            priceAddedSweePizza2 = true;
            $(`.pizzaSelectionPricesweetpizza`).text(`${peiceSweePizza} Грн`);
            priceAddedSweePizza1 = false;
            priceAddedSweePizza3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnThelargestsweetpizza`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedSweePizza3 == false) {
            peiceSweePizza = 300
            peiceSweePizza += 150;
            priceAddedSweePizza3 = true;
            $(`.pizzaSelectionPricesweetpizza`).text(`${peiceSweePizza} Грн`);
            priceAddedSweePizza1 = false;
            priceAddedSweePizza2 = false;
        }
    }
}

let peicebeefandcrispy = 310;
let priceAddedbeefandcrispy1 = false;
let priceAddedbeefandcrispy2 = false;
let priceAddedbeefandcrispy3 = false;


function checkPeicepeicebeefandcrispy() {
    if ($(`.pizzaSelectionSizeBtnStandardbeefandcrispy`).hasClass(`chosenSizePizzaItem`)) {
        peicebeefandcrispy = 310
        priceAddedbeefandcrispy1 = false;
        priceAddedbeefandcrispy2 = false;
        priceAddedbeefandcrispy3 = false;
        $(`.pizzaSelectionPricebeefandcrispy`).text(`${peicebeefandcrispy} Грн`);
    } else if ($(`.pizzaSelectionSizeBtnLargebeefandcrispy`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedbeefandcrispy1 == false) {
            peicebeefandcrispy = 310
            peicebeefandcrispy += 55;
            priceAddedbeefandcrispy1 = true;
            $(`.pizzaSelectionPricebeefandcrispy`).text(`${peicebeefandcrispy} Грн`);
            priceAddedbeefandcrispy2 = false;
            priceAddedbeefandcrispy3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnExtraLargebeefandcrispy`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedbeefandcrispy2 == false) {
            peicebeefandcrispy = 310
            peicebeefandcrispy += 100;
            priceAddedbeefandcrispy2 = true;
            $(`.pizzaSelectionPricebeefandcrispy`).text(`${peicebeefandcrispy} Грн`);
            priceAddedbeefandcrispy1 = false;
            priceAddedbeefandcrispy3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnThelargestbeefandcrispy`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedbeefandcrispy3 == false) {
            peicebeefandcrispy = 310
            peicebeefandcrispy += 145;
            priceAddedbeefandcrispy3 = true;
            $(`.pizzaSelectionPricebeefandcrispy`).text(`${peicebeefandcrispy} Грн`);
            priceAddedbeefandcrispy1 = false;
            priceAddedbeefandcrispy2 = false;
        }
    }
}

$(`.pizzaSelectionSizeBtnStandardsweetpizza`).addClass(`chosenSizePizzaItem`);
$(`.pizzaSelectionSizeBtnStandardbeefandcrispy`).addClass(`chosenSizePizzaItem`);

checkPeicepeicebeefandcrispy()
checkPeiceSweePizza()

$(`.pizzaSelectionSizeBtnStandardbeefandcrispy`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardbeefandcrispy`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicebeefandcrispy()
})

$(`.pizzaSelectionSizeBtnLargebeefandcrispy`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargebeefandcrispy`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicebeefandcrispy()
})

$(`.pizzaSelectionSizeBtnExtraLargebeefandcrispy`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargebeefandcrispy`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicebeefandcrispy()
})

$(`.pizzaSelectionSizeBtnThelargestbeefandcrispy`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestbeefandcrispy`).addClass(`chosenSizePizzaItem`);
    checkPeicepeicebeefandcrispy()
})


$(`.pizzaSelectionSizeBtnStandardsweetpizza`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardsweetpizza`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargesweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargesweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestsweetpizza`).removeClass(`chosenSizePizzaItem`);
    checkPeiceSweePizza()
})

$(`.pizzaSelectionSizeBtnLargesweetpizza`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardsweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargesweetpizza`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargesweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestsweetpizza`).removeClass(`chosenSizePizzaItem`);
    checkPeiceSweePizza()
})

$(`.pizzaSelectionSizeBtnExtraLargesweetpizza`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardsweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargesweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargesweetpizza`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestsweetpizza`).removeClass(`chosenSizePizzaItem`);
    checkPeiceSweePizza()
})

$(`.pizzaSelectionSizeBtnThelargestsweetpizza`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardsweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargesweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargesweetpizza`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestsweetpizza`).addClass(`chosenSizePizzaItem`);
    checkPeiceSweePizza()
})

$(`.pizzaSelectionAddCartBtnCherrysweetpizza`).addClass(`chosenSizePizzaItem`);

$(`.pizzaSelectionAddCartBtnLoosebeefandcrispy`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosebeefandcrispy`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiabeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnThinbeefandcrispy`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinbeefandcrispy`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiabeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnPhiladelphiabeefandcrispy`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiabeefandcrispy`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnHotDogbeefandcrispy`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosebeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinbeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiabeefandcrispy`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogbeefandcrispy`).addClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnLoosebeefandcrispy`).addClass(`chosenSizePizzaItem`);


let peicepearandbluecheese = 310;
let priceAddedpearandbluecheese1 = false;
let priceAddedpearandbluecheese2 = false;
let priceAddedpearandbluecheese3 = false;


function checkPeicepeicepearandbluecheese() {
    if ($(`.pizzaSelectionSizeBtnStandardpearandbluecheese`).hasClass(`chosenSizePizzaItem`)) {
        peicepearandbluecheese = 310
        priceAddedpearandbluecheese1 = false;
        priceAddedpearandbluecheese2 = false;
        priceAddedpearandbluecheese3 = false;
        $(`.pizzaSelectionPricepearandbluecheese`).text(`${peicepearandbluecheese} Грн`);
    } else if ($(`.pizzaSelectionSizeBtnLargepearandbluecheese`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedpearandbluecheese1 == false) {
            peicepearandbluecheese = 310
            peicepearandbluecheese += 55;
            priceAddedpearandbluecheese1 = true;
            $(`.pizzaSelectionPricepearandbluecheese`).text(`${peicepearandbluecheese} Грн`);
            priceAddedpearandbluecheese2 = false;
            priceAddedpearandbluecheese3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnExtraLargepearandbluecheese`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedpearandbluecheese2 == false) {
            peicepearandbluecheese = 310
            peicepearandbluecheese += 100;
            priceAddedpearandbluecheese2 = true;
            $(`.pizzaSelectionPricepearandbluecheese`).text(`${peicepearandbluecheese} Грн`);
            priceAddedpearandbluecheese1 = false;
            priceAddedpearandbluecheese3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnThelargestpearandbluecheese`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedpearandbluecheese3 == false) {
            peicepearandbluecheese = 310
            peicepearandbluecheese += 145;
            priceAddedpearandbluecheese3 = true;
            $(`.pizzaSelectionPricepearandbluecheese`).text(`${peicepearandbluecheese} Грн`);
            priceAddedpearandbluecheese1 = false;
            priceAddedpearandbluecheese2 = false;
        }
    }
}

$(`.pizzaSelectionSizeBtnStandardpearandbluecheese`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardpearandbluecheese`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicepearandbluecheese()
})

$(`.pizzaSelectionSizeBtnLargepearandbluecheese`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargepearandbluecheese`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicepearandbluecheese()
})

$(`.pizzaSelectionSizeBtnExtraLargepearandbluecheese`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargepearandbluecheese`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicepearandbluecheese()
})

$(`.pizzaSelectionSizeBtnThelargestpearandbluecheese`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestpearandbluecheese`).addClass(`chosenSizePizzaItem`);
    checkPeicepeicepearandbluecheese()
})

$(`.pizzaSelectionSizeBtnStandardpearandbluecheese`).addClass(`chosenSizePizzaItem`);

$(`.pizzaSelectionAddCartBtnLoosepearandbluecheese`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosepearandbluecheese`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiapearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnThinpearandbluecheese`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinpearandbluecheese`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiapearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnPhiladelphiapearandbluecheese`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiapearandbluecheese`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnHotDogpearandbluecheese`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosepearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinpearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiapearandbluecheese`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogpearandbluecheese`).addClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnLoosepearandbluecheese`).addClass(`chosenSizePizzaItem`);
checkPeicepeicepearandbluecheese();

let peicejb = 305;
let priceAddedjb1 = false;
let priceAddedjb2 = false;
let priceAddedjb3 = false;


function checkPeicepeicejb() {
    if ($(`.pizzaSelectionSizeBtnStandardjb`).hasClass(`chosenSizePizzaItem`)) {
        peicejb = 305
        priceAddedjb1 = false;
        priceAddedjb2 = false;
        priceAddedjb3 = false;
        $(`.pizzaSelectionPricejb`).text(`${peicejb} Грн`);
    } else if ($(`.pizzaSelectionSizeBtnLargejb`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedjb1 == false) {
            peicejb = 305
            peicejb += 55;
            priceAddedjb1 = true;
            $(`.pizzaSelectionPricejb`).text(`${peicejb} Грн`);
            priceAddedjb2 = false;
            priceAddedjb3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnExtraLargejb`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedjb2 == false) {
            peicejb = 305
            peicejb += 105;
            priceAddedjb2 = true;
            $(`.pizzaSelectionPricejb`).text(`${peicejb} Грн`);
            priceAddedjb1 = false;
            priceAddedjb3 = false;
        }
    } else if ($(`.pizzaSelectionSizeBtnThelargestjb`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedjb3 == false) {
            peicejb = 305
            peicejb += 150;
            priceAddedjb3 = true;
            $(`.pizzaSelectionPricejb`).text(`${peicejb} Грн`);
            priceAddedjb1 = false;
            priceAddedjb2 = false;
        }
    }
}

$(`.pizzaSelectionSizeBtnStandardjb`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardjb`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestjb`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicejb()
})

$(`.pizzaSelectionSizeBtnLargejb`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardjb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargejb`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestjb`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicejb()
})

$(`.pizzaSelectionSizeBtnExtraLargejb`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardjb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargejb`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestjb`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeicejb()
})

$(`.pizzaSelectionSizeBtnThelargestjb`).click(function () {
    $(`.pizzaSelectionSizeBtnStandardjb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnLargejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnExtraLargejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionSizeBtnThelargestjb`).addClass(`chosenSizePizzaItem`);
    checkPeicepeicejb()
})

$(`.pizzaSelectionSizeBtnStandardjb`).addClass(`chosenSizePizzaItem`);
checkPeicepeicejb()

$(`.pizzaSelectionAddCartBtnLoosejb`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosejb`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinjb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiajb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogjb`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnThinjb`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinjb`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiajb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogjb`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnPhiladelphiajb`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinjb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiajb`).addClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogjb`).removeClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnHotDogjb`).click(function () {
    $(`.pizzaSelectionAddCartBtnLoosejb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnThinjb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnPhiladelphiajb`).removeClass(`chosenSizePizzaItem`);
    $(`.pizzaSelectionAddCartBtnHotDogjb`).addClass(`chosenSizePizzaItem`);
})

$(`.pizzaSelectionAddCartBtnLoosejb`).addClass(`chosenSizePizzaItem`);


$(`.filterDrinksItemAll`).addClass(`chosenFilterItem`);

$(`.filterDrinksItemAll`).click(function () {
    $(`.filterDrinksItemAll`).addClass(`chosenFilterItem`);
    $(`.filterDrinksItemTea`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemCoffee`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemWater`).removeClass(`chosenFilterItem`);
    checkfilterDrinksItem()
})

$(`.filterDrinksItemTea`).click(function () {
    $(`.filterDrinksItemAll`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemTea`).addClass(`chosenFilterItem`);
    $(`.filterDrinksItemCoffee`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemWater`).removeClass(`chosenFilterItem`);
    checkfilterDrinksItem()
})

$(`.filterDrinksItemCoffee`).click(function () {
    $(`.filterDrinksItemAll`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemTea`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemCoffee`).addClass(`chosenFilterItem`);
    $(`.filterDrinksItemWater`).removeClass(`chosenFilterItem`);
    checkfilterDrinksItem()
})

$(`.filterDrinksItemWater`).click(function () {
    $(`.filterDrinksItemAll`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemTea`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemCoffee`).removeClass(`chosenFilterItem`);
    $(`.filterDrinksItemWater`).addClass(`chosenFilterItem`);
    checkfilterDrinksItem()
})

function checkfilterDrinksItem() {
    if ($(`.filterDrinksItemAll`).hasClass(`chosenFilterItem`)) {
        $(`.Tea`).show();
        $(`.Coffee`).show();
        $(`.Water`).show();
    } else if ($(`.filterDrinksItemTea`).hasClass(`chosenFilterItem`)) {
        $(`.Tea`).show();
        $(`.Coffee`).hide();
        $(`.Water`).hide();
    } else if ($(`.filterDrinksItemCoffee`).hasClass(`chosenFilterItem`)) {
        $(`.Tea`).hide();
        $(`.Coffee`).show();
        $(`.Water`).hide();
    } else if ($(`.filterDrinksItemWater`).hasClass(`chosenFilterItem`)) {
        $(`.Tea`).hide();
        $(`.Coffee`).hide();
        $(`.Water`).show();
    }
}

let peiceCola = 37;
let priceAddedCola1 = false;
let priceAddedCola2 = false;


function checkPeicepeiceCola() {
    if ($(`.drinkVolumeBtnMinCola`).hasClass(`chosenSizePizzaItem`)) {
        peiceCola = 37
        priceAddedCola1 = false;
        priceAddedCola2 = false;
        $(`.drinksSelectionPricengminCola`).text(`${peiceCola} Грн`);
    } else if ($(`.drinkVolumeBtnmediumCola`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedCola1 == false) {
            peiceCola = 37
            peiceCola += 10;
            priceAddedCola1 = true;
            $(`.drinksSelectionPricengminCola`).text(`${peiceCola} Грн`);
            priceAddedCola2 = false;
        }
    } else if ($(`.drinkVolumeBtnMaxCola`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedCola2 == false) {
            peiceCola = 37
            peiceCola += 20;
            priceAddedCola2 = true;
            $(`.drinksSelectionPricengminCola`).text(`${peiceCola} Грн`);
            priceAddedCola1 = false;
        }
    }
}

$(`.drinkVolumeBtnMinCola`).click(function () {
    $(`.drinkVolumeBtnMinCola`).addClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnmediumCola`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnMaxCola`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeiceCola()
})

$(`.drinkVolumeBtnmediumCola`).click(function () {
    $(`.drinkVolumeBtnMinCola`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnmediumCola`).addClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnMaxCola`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeiceCola()
})

$(`.drinkVolumeBtnMaxCola`).click(function () {
    $(`.drinkVolumeBtnMinCola`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnmediumCola`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnMaxCola`).addClass(`chosenSizePizzaItem`);
    checkPeicepeiceCola()
})


$(`.drinkVolumeBtnMinCola`).addClass(`chosenSizePizzaItem`);
checkPeicepeiceCola()

let peiceColaZero = 37;
let priceAddedColaZero1 = false;
let priceAddedColaZero2 = false;


function checkPeicepeiceColaZero() {
    if ($(`.drinkVolumeBtnMinColaZero`).hasClass(`chosenSizePizzaItem`)) {
        peiceColaZero = 37
        priceAddedColaZero1 = false;
        priceAddedColaZero2 = false;
        $(`.drinksSelectionPricengminColaZero`).text(`${peiceColaZero} Грн`);
    } else if ($(`.drinkVolumeBtnmediumColaZero`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedColaZero1 == false) {
            peiceColaZero = 37
            peiceColaZero += 10;
            priceAddedColaZero1 = true;
            $(`.drinksSelectionPricengminColaZero`).text(`${peiceColaZero} Грн`);
            priceAddedColaZero2 = false;
        }
    } else if ($(`.drinkVolumeBtnMaxColaZero`).hasClass(`chosenSizePizzaItem`)) {
        if (priceAddedColaZero2 == false) {
            peiceColaZero = 37
            peiceColaZero += 20;
            priceAddedColaZero2 = true;
            $(`.drinksSelectionPricengminColaZero`).text(`${peiceColaZero} Грн`);
            priceAddedColaZero1 = false;
        }
    }
}

$(`.drinkVolumeBtnMinColaZero`).click(function () {
    $(`.drinkVolumeBtnMinColaZero`).addClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnmediumColaZero`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnMaxColaZero`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeiceColaZero()
})

$(`.drinkVolumeBtnmediumColaZero`).click(function () {
    $(`.drinkVolumeBtnMinColaZero`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnmediumColaZero`).addClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnMaxColaZero`).removeClass(`chosenSizePizzaItem`);
    checkPeicepeiceColaZero()
})

$(`.drinkVolumeBtnMaxColaZero`).click(function () {
    $(`.drinkVolumeBtnMinColaZero`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnmediumColaZero`).removeClass(`chosenSizePizzaItem`);
    $(`.drinkVolumeBtnMaxColaZero`).addClass(`chosenSizePizzaItem`);
    checkPeicepeiceColaZero()
})


$(`.drinkVolumeBtnMinColaZero`).addClass(`chosenSizePizzaItem`);
checkPeicepeiceColaZero()

$(`.sitesFilterItemAll`).addClass(`chosenFilterItem`);

$(`.sitesFilterItemAll`).click(function () {
    $(`.sitesFilterItemAll`).addClass(`chosenFilterItem`);
    $(`.sitesFilterItemMinirolls`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemBreads`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemChicken`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemPotatoes`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemSalads`).removeClass(`chosenFilterItem`);
    checkfilterSitesItem()
})

$(`.sitesFilterItemMinirolls`).click(function () {
    $(`.sitesFilterItemAll`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemMinirolls`).addClass(`chosenFilterItem`);
    $(`.sitesFilterItemBreads`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemChicken`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemPotatoes`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemSalads`).removeClass(`chosenFilterItem`);
    checkfilterSitesItem()
})

$(`.sitesFilterItemBreads`).click(function () {
    $(`.sitesFilterItemAll`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemMinirolls`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemBreads`).addClass(`chosenFilterItem`);
    $(`.sitesFilterItemChicken`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemPotatoes`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemSalads`).removeClass(`chosenFilterItem`);
    checkfilterSitesItem()
})

$(`.sitesFilterItemChicken`).click(function () {
    $(`.sitesFilterItemAll`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemMinirolls`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemBreads`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemChicken`).addClass(`chosenFilterItem`);
    $(`.sitesFilterItemPotatoes`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemSalads`).removeClass(`chosenFilterItem`);
    checkfilterSitesItem()
})

$(`.sitesFilterItemPotatoes`).click(function () {
    $(`.sitesFilterItemAll`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemMinirolls`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemBreads`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemChicken`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemPotatoes`).addClass(`chosenFilterItem`);
    $(`.sitesFilterItemSalads`).removeClass(`chosenFilterItem`);
    checkfilterSitesItem()
})

$(`.sitesFilterItemSalads`).click(function () {
    $(`.sitesFilterItemAll`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemMinirolls`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemBreads`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemChicken`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemPotatoes`).removeClass(`chosenFilterItem`);
    $(`.sitesFilterItemSalads`).addClass(`chosenFilterItem`);
    checkfilterSitesItem()
})

function checkfilterSitesItem() {
    if ($(`.sitesFilterItemAll`).hasClass(`chosenFilterItem`)) {
        $(`.Minirolls`).show();
        $(`.Breads`).show();
        $(`.Chicken`).show();
        $(`.Potatoes`).show();
        $(`.Salads`).show();
    } else if ($(`.sitesFilterItemMinirolls`).hasClass(`chosenFilterItem`)) {
        $(`.Minirolls`).show();
        $(`.Breads`).hide();
        $(`.Chicken`).hide();
        $(`.Potatoes`).hide();
        $(`.Salads`).hide();
    } else if ($(`.sitesFilterItemBreads`).hasClass(`chosenFilterItem`)) {
        $(`.Minirolls`).hide();
        $(`.Breads`).show();
        $(`.Chicken`).hide();
        $(`.Potatoes`).hide();
        $(`.Salads`).hide();
    } else if ($(`.sitesFilterItemChicken`).hasClass(`chosenFilterItem`)) {
        $(`.Minirolls`).hide();
        $(`.Breads`).hide();
        $(`.Chicken`).show();
        $(`.Potatoes`).hide();
        $(`.Salads`).hide();
    } else if ($(`.sitesFilterItemPotatoes`).hasClass(`chosenFilterItem`)) {
        $(`.Minirolls`).hide();
        $(`.Breads`).hide();
        $(`.Chicken`).hide();
        $(`.Potatoes`).show();
        $(`.Salads`).hide();
    } else if ($(`.sitesFilterItemSalads`).hasClass(`chosenFilterItem`)) {
        $(`.Minirolls`).hide();
        $(`.Breads`).hide();
        $(`.Chicken`).hide();
        $(`.Potatoes`).hide();
        $(`.Salads`).show();
    }
}

$(`.dessertsFilterItemAll`).addClass(`chosenFilterItem`);

$(`.dessertsFilterItemAll`).click(function () {
    $(`.dessertsFilterItemAll`).addClass(`chosenFilterItem`);
    $(`.dessertsFilterItemDesserts`).removeClass(`chosenFilterItem`);
    $(`.dessertsFilterItemIceCream`).removeClass(`chosenFilterItem`);
    checkfilterItem()
})

$(`.dessertsFilterItemDesserts`).click(function () {
    $(`.dessertsFilterItemAll`).removeClass(`chosenFilterItem`);
    $(`.dessertsFilterItemDesserts`).addClass(`chosenFilterItem`);
    $(`.dessertsFilterItemIceCream`).removeClass(`chosenFilterItem`);
    checkfilterItem()
})

$(`.dessertsFilterItemIceCream`).click(function () {
    $(`.dessertsFilterItemAll`).removeClass(`chosenFilterItem`);
    $(`.dessertsFilterItemDesserts`).removeClass(`chosenFilterItem`);
    $(`.dessertsFilterItemIceCream`).addClass(`chosenFilterItem`);
    checkfilterItem()
})

function checkfilterItem() {
    if ($(`.dessertsFilterItemAll`).hasClass(`chosenFilterItem`)) {
        $(`.Desserts`).show();
        $(`.IceCream`).show();
    } else if ($(`.dessertsFilterItemDesserts`).hasClass(`chosenFilterItem`)) {
        $(`.Desserts`).show();
        $(`.IceCream`).hide();
    } else if ($(`.dessertsFilterItemIceCream`).hasClass(`chosenFilterItem`)) {
        $(`.Desserts`).hide();
        $(`.IceCream`).show();
    }
}

// $('.cleanBtn').click(function(){
//     numberPizzaBasket = 0.;
//     totalPrice = 0;
//     $(`.price`).text(`${totalPrice} Грн`);
//     $(`.txtNmberOrders`).text(numberPizzaBasket);
//     numberSweet = 0;
//     numberCrispy = 0;
//     numberpearandbluecheese = 0;
//     numberjb = 0;
//     numberlemongrassGinger = 0;
//     numberbasilcurrant = 0;
//     numberraspberrymint = 0;
//     numbericepressolatte = 0;
//     numbericepresso = 0;
//     numberbonaquabig = 0;
//     numberngmin = 0;
//     numberCola = 0;
//     numberColaZero = 0;
//     numberpepperonipeppers = 0;
//     numberbeefonions = 0;
//     numberhammushrooms = 0;
//     numberkhlebets = 0;
//     numberproduct = 0;
//     numbervyshneiu = 0;
//     numberchocoroll = 0;
//     numberkrem = 0;
//     numbepizzaConstructor = 0;
//     $(`.cardSelectedPizza`).hide()
//     $(`.SelectedOrderContainer`).hide()
// })


let numberSweet = 0;
$(`.pizzaSelectionAddCartBtnSweet`).click(function () {
    if (numberSweet == 0) {
        numberPizzaBasket++;
        numberSweet++;
        $(`.cardSelectedPizzaTxtNamenumberPizza`).text(`Піца Солодка`);
        $(`.priceCardSelectedPizzaSweet`).text(`${peiceSweePizza} Грн`);
        $(`.cardSelectedPizzaSweet`).show();
        totalPrice += peiceSweePizza;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket)
    } else if (numberSweet >= 1) {
        $(`.numberPizzaSweet`).text(numberSweet + 1);
        numberSweet++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaSweet`).text(`${peiceSweePizza * numberSweet} Грн`);
        totalPrice += peiceSweePizza
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaSweet`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket)
    }
});

$(`.arrowPluscardSelectedPizzaSweet`).click(function () {
    $(`.numberPizzaSweet`).text(numberSweet + 1);
    numberSweet++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket)
    $(`.priceCardSelectedPizzaSweet`).text(`${peiceSweePizza * numberSweet} Грн`);
    totalPrice += peiceSweePizza;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaSweet`).click(function () {
    if (numberSweet <= 1) {
        $(`.cardSelectedPizzaSweet`).hide();
        $(`.priceCardSelectedPizzaSweet`).text(`${peiceSweePizza * numberSweet} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= peiceSweePizza;
        $(`.price`).text(`${totalPrice} Грн`);
        numberSweet = 0;
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberSweet > 0) {
        numberSweet--;
        $(`.numberPizzaSweet`).text(numberSweet);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaSweet`).text(`${peiceSweePizza * numberSweet} Грн`);
        totalPrice -= peiceSweePizza;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});


let numberCrispy = 0;
$(`.pizzaSelectionAddCartBtnCrispy`).click(function () {
    if (numberCrispy == 0) {
        numberPizzaBasket++;
        numberCrispy++;
        $(`.cardSelectedPizzaTxtNamenumberPizzaCrispy`).text(`Піца Біф енд Кріспі`);
        $(`.priceCardSelectedPizzaCrispy`).text(`${peicebeefandcrispy} Грн`);
        $(`.cardSelectedPizzaCrispy`).show();
        totalPrice += peicebeefandcrispy;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberCrispy >= 1) {
        $(`.numberPizzaCrispy`).text(numberCrispy + 1);
        numberCrispy++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaCrispy`).text(`${peicebeefandcrispy * numberCrispy} Грн`);
        totalPrice += peicebeefandcrispy;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaCrispy`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzaCrispy`).click(function () {
    $(`.numberPizzaCrispy`).text(numberCrispy + 1);
    numberCrispy++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzaCrispy`).text(`${peicebeefandcrispy * numberCrispy} Грн`);
    totalPrice += peicebeefandcrispy;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaCrispy`).click(function () {
    if (numberCrispy == 1) {
        $(`.priceCardSelectedPizzaCrispy`).text(`${peicebeefandcrispy} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= peicebeefandcrispy;
        $(`.price`).text(`${totalPrice} Грн`);
        numberCrispy = 0;
        $(`.cardSelectedPizzaCrispy`).hide();
        if (numberPizzaBasket === 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberCrispy >= 1) {
        numberCrispy--;
        $(`.numberPizzaCrispy`).text(numberCrispy);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaCrispy`).text(`${peicebeefandcrispy * numberCrispy} Грн`);
        totalPrice -= peicebeefandcrispy;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});


let numberpearandbluecheese = 0;
$(`.pizzaSelectionAddCartBtnpearandbluecheese`).click(function () {
    if (numberpearandbluecheese == 0) {
        numberPizzaBasket++;
        numberpearandbluecheese++;
        $(`.cardSelectedPizzaTxtNamepearandbluecheese`).text(`Піца з грушею і блакитним сиром`);
        $(`.priceCardSelectedPizzapearandbluecheese`).text(`${peicepearandbluecheese} Грн`);
        $(`.cardSelectedPizzapearandbluecheese`).show();
        totalPrice += peicepearandbluecheese;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberpearandbluecheese >= 1) {
        $(`.numberPizzapearandbluecheese`).text(numberpearandbluecheese + 1);
        numberpearandbluecheese++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaCrispy`).text(`${peicepearandbluecheese * numberpearandbluecheese} Грн`);
        totalPrice += peicepearandbluecheese;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzapearandbluecheese`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzapearandbluecheese`).click(function () {
    $(`.numberPizzapearandbluecheese`).text(numberpearandbluecheese + 1);
    numberpearandbluecheese++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzapearandbluecheese`).text(`${peicepearandbluecheese * numberpearandbluecheese} Грн`);
    totalPrice += peicepearandbluecheese;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzapearandbluecheese`).click(function () {
    if (numberpearandbluecheese <= 1) {
        $(`.priceCardSelectedPizzapearandbluecheese`).text(`${peicepearandbluecheese * numberpearandbluecheese} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= peicepearandbluecheese;
        $(`.price`).text(`${totalPrice} Грн`);
        numberpearandbluecheese = 0;
        $(`.cardSelectedPizzaCrispy`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberpearandbluecheese > 0) {
        numberpearandbluecheese--;
        $(`.numberPizzapearandbluecheese`).text(numberpearandbluecheese);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzapearandbluecheese`).text(`${peicebeefandcrispy * numberpearandbluecheese} Грн`);
        totalPrice -= peicebeefandcrispy;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});


let numberjb = 0;
$(`.pizzaSelectionAddCartBtnjb`).click(function () {
    if (numberjb == 0) {
        numberPizzaBasket++;
        numberjb++;
        $(`.cardSelectedPizzaTxtNamejb`).text(`Піца Джамайка Бомбастик`);
        $(`.priceCardSelectedPizzajb`).text(`${peicejb} Грн`);
        $(`.cardSelectedPizzajb`).show();
        totalPrice += peicejb;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberjb >= 1) {
        $(`.numberPizzajb`).text(numberjb + 1);
        numberjb++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzajb`).text(`${peicejb * numberjb} Грн`);
        totalPrice += peicejb;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzajb`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzajb`).click(function () {
    $(`.numberPizzajb`).text(numberjb + 1);
    numberjb++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzajb`).text(`${peicejb * numberjb} Грн`);
    totalPrice += peicejb;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzajb`).click(function () {
    if (numberjb <= 1) {
        $(`.priceCardSelectedPizzajb`).text(`${peicejb * numberjb} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= peicejb;
        $(`.price`).text(`${totalPrice} Грн`);
        numberjb = 0;
        $(`.cardSelectedPizzajb`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberjb > 0) {
        numberjb--;
        $(`.numberPizzajb`).text(numberjb);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzajb`).text(`${peicejb * numberjb} Грн`);
        totalPrice -= peicejb;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});



let numberlemongrassGinger = 0;
$(`.drinksSelectionAddCartBtnimbyr`).click(function () {
    if (numberlemongrassGinger == 0) {
        numberPizzaBasket++;
        numberlemongrassGinger++;
        $(`.cardSelectedPizzaTxtNamelemongrassGinger`).text(`Чай імбир лемонграс`);
        $(`.priceCardSelectedPizzalemongrassGinger`).text(`${40} Грн`);
        $(`.cardSelectedPizzalemongrassGinger`).show();
        totalPrice += 40;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberlemongrassGinger >= 1) {
        $(`.numberPizzalemongrassGinger`).text(numberlemongrassGinger + 1);
        numberlemongrassGinger++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzalemongrassGinger`).text(`${40 * numberlemongrassGinger} Грн`);
        totalPrice += 40;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzalemongrassGinger`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzalemongrassGinger`).click(function () {
    $(`.numberPizzalemongrassGinger`).text(numberlemongrassGinger + 1);
    numberlemongrassGinger++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzalemongrassGinger`).text(`${40 * numberlemongrassGinger} Грн`);
    totalPrice += 40;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzalemongrassGinger`).click(function () {
    if (numberlemongrassGinger <= 1) {
        $(`.priceCardSelectedPizzalemongrassGinger`).text(`${40 * numberlemongrassGinger} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 40;
        $(`.price`).text(`${totalPrice} Грн`);
        numberlemongrassGinger = 0;
        $(`.cardSelectedPizzalemongrassGinger`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberlemongrassGinger > 0) {
        numberlemongrassGinger--;
        $(`.numberPizzalemongrassGinger`).text(numberlemongrassGinger);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzalemongrassGinger`).text(`${40 * numberlemongrassGinger} Грн`);
        totalPrice -= 40;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberbasilcurrant = 0;
$(`.drinksSelectionAddCartBtnsmorodyna`).click(function () {
    if (numberbasilcurrant == 0) {
        numberPizzaBasket++;
        numberbasilcurrant++;
        $(`.cardSelectedPizzaTxtNamebasilcurrant`).text(`Чай смородина базилік`);
        $(`.priceCardSelectedPizzabasilcurrant`).text(`${40} Грн`);
        $(`.cardSelectedPizzabasilcurrant`).show();
        totalPrice += 40;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberbasilcurrant >= 1) {
        $(`.numberPizzabasilcurrant`).text(numberbasilcurrant + 1);
        numberbasilcurrant++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzabasilcurrant`).text(`${40 * numberbasilcurrant} Грн`);
        totalPrice += 40;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzabasilcurrant`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzabasilcurrant`).click(function () {
    $(`.numberPizzabasilcurrant`).text(numberbasilcurrant + 1);
    numberbasilcurrant++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzabasilcurrant`).text(`${40 * numberbasilcurrant} Грн`);
    totalPrice += 40;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzabasilcurrant`).click(function () {
    if (numberbasilcurrant <= 1) {
        $(`.priceCardSelectedPizzabasilcurrant`).text(`${40 * numberbasilcurrant} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 40;
        $(`.price`).text(`${totalPrice} Грн`);
        numberbasilcurrant = 0;
        $(`.cardSelectedPizzabasilcurrant`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberbasilcurrant > 0) {
        numberbasilcurrant--;
        $(`.numberPizzabasilcurrant`).text(numberbasilcurrant);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzabasilcurrant`).text(`${40 * numberbasilcurrant} Грн`);
        totalPrice -= 40;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberraspberrymint = 0;
$(`.drinksSelectionAddCartBtnmalyna`).click(function () {
    if (numberraspberrymint == 0) {
        numberPizzaBasket++;
        numberraspberrymint++;
        $(`.cardSelectedPizzaTxtNameraspberrymint`).text(`Чай малина м'ята`);
        $(`.priceCardSelectedPizzaraspberrymint`).text(`${40} Грн`);
        $(`.cardSelectedPizzaraspberrymint`).show();
        totalPrice += 40;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberraspberrymint >= 1) {
        $(`.numberPizzaraspberrymint`).text(numberraspberrymint + 1);
        numberraspberrymint++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaraspberrymint`).text(`${40 * numberraspberrymint} Грн`);
        totalPrice += 40;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaraspberrymint`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzaraspberrymint`).click(function () {
    $(`.numberPizzaraspberrymint`).text(numberraspberrymint + 1);
    numberraspberrymint++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzaraspberrymint`).text(`${40 * numberraspberrymint} Грн`);
    totalPrice += 40;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaraspberrymint`).click(function () {
    if (numberraspberrymint <= 1) {
        $(`.priceCardSelectedPizzaraspberrymint`).text(`${40 * numberraspberrymint} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 40;
        $(`.price`).text(`${totalPrice} Грн`);
        numberraspberrymint = 0;
        $(`.cardSelectedPizzabasilcurrant`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberraspberrymint > 0) {
        numberraspberrymint--;
        $(`.numberPizzaraspberrymint`).text(numberraspberrymint);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaraspberrymint`).text(`${40 * numberraspberrymint} Грн`);
        totalPrice -= 40;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numbericepressolatte = 0;
$(`.drinksSelectionAddCartBtnicepressolatte`).click(function () {
    if (numbericepressolatte == 0) {
        numberPizzaBasket++;
        numbericepressolatte++;
        $(`.cardSelectedPizzaTxtNameicepressolatte`).text(`Холодний кавовий напій АйсПрессо Латте`);
        $(`.priceCardSelectedPizzaicepressolatte`).text(`${59} Грн`);
        $(`.cardSelectedPizzaicepressolatte`).show();
        totalPrice += 59;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numbericepressolatte >= 1) {
        $(`.numberPizzaicepressolatte`).text(numbericepressolatte + 1);
        numbericepressolatte++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaicepressolatte`).text(`${59 * numbericepressolatte} Грн`);
        totalPrice += 59;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaicepressolatte`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzaicepressolatte`).click(function () {
    $(`.numberPizzaicepressolatte`).text(numbericepressolatte + 1);
    numbericepressolatte++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzaicepressolatte`).text(`${59 * numbericepressolatte} Грн`);
    totalPrice += 59;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaicepressolatte`).click(function () {
    if (numbericepressolatte <= 1) {
        $(`.priceCardSelectedPizzaicepressolatte`).text(`${59 * numbericepressolatte} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 59;
        $(`.price`).text(`${totalPrice} Грн`);
        numbericepressolatte = 0;
        $(`.cardSelectedPizzaicepressolatte`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numbericepressolatte > 0) {
        numbericepressolatte--;
        $(`.numberPizzaicepressolatte`).text(numbericepressolatte);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaicepressolatte`).text(`${59 * numbericepressolatte} Грн`);
        totalPrice -= 59;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numbericepresso = 0;
$(`.drinksSelectionAddCartBtnicepresso`).click(function () {
    if (numbericepresso == 0) {
        numberPizzaBasket++;
        numbericepresso++;
        $(`.cardSelectedPizzaTxtNameicepresso`).text(`Холодний кавовий напій АйсПрессо Класік`);
        $(`.priceCardSelectedPizzaicepresso`).text(`${59} Грн`);
        $(`.cardSelectedPizzaicepresso`).show();
        totalPrice += 59;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numbericepresso >= 1) {
        $(`.numberPizzaicepresso`).text(numbericepresso + 1);
        numbericepresso++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaicepresso`).text(`${59 * numbericepresso} Грн`);
        totalPrice += 59;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaicepresso`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzaicepresso`).click(function () {
    $(`.numberPizzaicepresso`).text(numbericepresso + 1);
    numbericepresso++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzaicepresso`).text(`${59 * numbericepresso} Грн`);
    totalPrice += 59;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaicepresso`).click(function () {
    if (numbericepresso <= 1) {
        $(`.priceCardSelectedPizzaicepresso`).text(`${59 * numbericepresso} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 59;
        $(`.price`).text(`${totalPrice} Грн`);
        numbericepresso = 0;
        $(`.cardSelectedPizzaicepresso`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numbericepresso > 0) {
        numbericepresso--;
        $(`.numberPizzaicepresso`).text(numbericepresso);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaicepresso`).text(`${59 * numbericepresso} Грн`);
        totalPrice -= 59;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberbonaquabig = 0;
$(`.drinksSelectionAddCartBtnbonaquabig`).click(function () {
    if (numberbonaquabig == 0) {
        numberPizzaBasket++;
        numberbonaquabig++;
        $(`.cardSelectedPizzaTxtNamebonaquabig`).text(`BonAqua газована 0,5`);
        $(`.priceCardSelectedPizzabonaquabig`).text(`${39} Грн`);
        $(`.cardSelectedPizzabonaquabig`).show();
        totalPrice += 39;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberbonaquabig >= 1) {
        $(`.numberPizzabonaquabig`).text(numberbonaquabig + 1);
        numberbonaquabig++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzabonaquabig`).text(`${39 * numberbonaquabig} Грн`);
        totalPrice += 39;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzabonaquabig`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzabonaquabig`).click(function () {
    $(`.numberPizzabonaquabig`).text(numberbonaquabig + 1);
    numberbonaquabig++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzabonaquabig`).text(`${39 * numberbonaquabig} Грн`);
    totalPrice += 39;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzabonaquabig`).click(function () {
    if (numberbonaquabig <= 1) {
        $(`.priceCardSelectedPizzabonaquabig`).text(`${39 * numberbonaquabig} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 39;
        $(`.price`).text(`${totalPrice} Грн`);
        numberbonaquabig = 0;
        $(`.cardSelectedPizzabonaquabig`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberbonaquabig > 0) {
        numberbonaquabig--;
        $(`.numberPizzabonaquabig`).text(numberbonaquabig);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzabonaquabig`).text(`${39 * numberbonaquabig} Грн`);
        totalPrice -= 39;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});


let numberngmin = 0;
$(`.drinksSelectionAddCartBtnngmin`).click(function () {
    if (numberngmin == 0) {
        numberPizzaBasket++;
        numberngmin++;
        $(`.cardSelectedPizzaTxtNamengmin`).text(`BonAqua негазована 0,5`);
        $(`.priceCardSelectedPizzangmin`).text(`${39} Грн`);
        $(`.cardSelectedPizzangmin`).show();
        totalPrice += 39;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberngmin >= 1) {
        $(`.numberPizzangmin`).text(numberngmin + 1);
        numberngmin++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzangmin`).text(`${39 * numberngmin} Грн`);
        totalPrice += 39;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzangmin`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzangmin`).click(function () {
    $(`.numberPizzangmin`).text(numberngmin + 1);
    numberngmin++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzangmin`).text(`${39 * numberngmin} Грн`);
    totalPrice += 39;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzangmin`).click(function () {
    if (numberngmin <= 1) {
        $(`.priceCardSelectedPizzangmin`).text(`${39 * numberngmin} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 39;
        $(`.price`).text(`${totalPrice} Грн`);
        numberngmin = 0;
        $(`.cardSelectedPizzangmin`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberngmin > 0) {
        numberngmin--;
        $(`.numberPizzangmin`).text(numberngmin);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzangmin`).text(`${39 * numberngmin} Грн`);
        totalPrice -= 39;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberCola = 0;
$(`.drinksSelectionAddCartBtnCola`).click(function () {
    if (numberCola == 0) {
        numberPizzaBasket++;
        numberCola++;
        $(`.cardSelectedPizzaTxtNameCola`).text(`Coca-Cola`);
        $(`.priceCardSelectedPizzaCola`).text(`${peiceCola} Грн`);
        $(`.cardSelectedPizzaCola`).show();
        totalPrice += peiceCola;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberCola >= 1) {
        $(`.numberPizzaCola`).text(numberCola + 1);
        numberCola++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaCola`).text(`${peiceCola * numberCola} Грн`);
        totalPrice += peiceCola;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaCola`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzaCola`).click(function () {
    $(`.numberPizzaCola`).text(numberCola + 1);
    numberCola++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzaCola`).text(`${peiceCola * numberCola} Грн`);
    totalPrice += peiceCola;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaCola`).click(function () {
    if (numberCola <= 1) {
        $(`.priceCardSelectedPizzaCola`).text(`${peiceCola * numberCola} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= peiceCola;
        $(`.price`).text(`${totalPrice} Грн`);
        numberCola = 0;
        $(`.cardSelectedPizzaCola`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberCola > 0) {
        numberCola--;
        $(`.numberPizzaCola`).text(numberCola);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaCola`).text(`${peiceCola * numberCola} Грн`);
        totalPrice -= peiceCola;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberColaZero = 0;
$(`.drinksSelectionAddCartBtnColaZero`).click(function () {
    if (numberColaZero == 0) {
        numberPizzaBasket++;
        numberColaZero++;
        $(`.cardSelectedPizzaTxtNameColaZero`).text(`Coca-Cola Zero`);
        $(`.priceCardSelectedPizzaColaZero`).text(`${peiceColaZero} Грн`);
        $(`.cardSelectedPizzaColaZero`).show();
        totalPrice += peiceColaZero;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberColaZero >= 1) {
        $(`.numberPizzaColaZero`).text(numberColaZero + 1);
        numberColaZero++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaColaZero`).text(`${peiceColaZero * numberColaZero} Грн`);
        totalPrice += peiceColaZero;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaColaZero`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzaColaZero`).click(function () {
    $(`.numberPizzaColaZero`).text(numberColaZero + 1);
    numberColaZero++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzaColaZero`).text(`${peiceColaZero * numberColaZero} Грн`);
    totalPrice += peiceColaZero;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaColaZero`).click(function () {
    if (numberColaZero <= 1) {
        $(`.priceCardSelectedPizzaColaZero`).text(`${peiceColaZero * numberColaZero} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= peiceColaZero;
        $(`.price`).text(`${totalPrice} Грн`);
        numberColaZero = 0;
        $(`.cardSelectedPizzaColaZero`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberColaZero > 0) {
        numberColaZero--;
        $(`.numberPizzaColaZero`).text(numberColaZero);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaColaZero`).text(`${peiceColaZero * numberColaZero} Грн`);
        totalPrice -= peiceColaZero;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberpepperonipeppers = 0;
$(`.sitessSelectionAddCartBtnpepperonipeppers`).click(function () {
    if (numberpepperonipeppers == 0) {
        numberPizzaBasket++;
        numberpepperonipeppers++;
        $(`.cardSelectedPizzaTxtNamepepperonipeppers`).text(`Мініроли з пепероні та перцем`);
        $(`.priceCardSelectedPizzapepperonipeppers`).text(`${99} Грн`);
        $(`.cardSelectedPizzapepperonipeppers`).show();
        totalPrice += 99;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberpepperonipeppers >= 1) {
        $(`.numberPizzapepperonipeppers`).text(numberpepperonipeppers + 1);
        numberpepperonipeppers++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzapepperonipeppers`).text(`${99 * numberpepperonipeppers} Грн`);
        totalPrice += 99;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzapepperonipeppers`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzapepperonipeppers`).click(function () {
    $(`.numberPizzapepperonipeppers`).text(numberpepperonipeppers + 1);
    numberpepperonipeppers++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzapepperonipeppers`).text(`${numberpepperonipeppers * numberColaZero} Грн`);
    totalPrice += 99;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzapepperonipeppers`).click(function () {
    if (numberpepperonipeppers <= 1) {
        $(`.priceCardSelectedPizzapepperonipeppers`).text(`${numberpepperonipeppers * numberColaZero} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 99;
        $(`.price`).text(`${totalPrice} Грн`);
        numberpepperonipeppers = 0;
        $(`.cardSelectedPizzapepperonipeppers`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberpepperonipeppers > 0) {
        numberpepperonipeppers--;
        $(`.numberPizzapepperonipeppers`).text(numberpepperonipeppers);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzapepperonipeppers`).text(`${99 * numberpepperonipeppers} Грн`);
        totalPrice -= 99;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberbeefonions = 0;
$(`.sitessSelectionAddCartBtnbeefonions`).click(function () {
    if (numberbeefonions == 0) {
        numberPizzaBasket++;
        numberbeefonions++;
        $(`.cardSelectedPizzaTxtNamebeefonions`).text(`Мініроли із рваною яловичиною та цибулею`);
        $(`.priceCardSelectedPizzabeefonions`).text(`${99} Грн`);
        $(`.cardSelectedPizzabeefonions`).show();
        totalPrice += 99;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberbeefonions >= 1) {
        $(`.numberPizzabeefonions`).text(numberbeefonions + 1);
        numberbeefonions++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzabeefonions`).text(`${99 * numberbeefonions} Грн`);
        totalPrice += 99;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzabeefonions`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzabeefonions`).click(function () {
    $(`.numberPizzabeefonions`).text(numberbeefonions + 1);
    numberbeefonions++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzabeefonions`).text(`${numberbeefonions * numberColaZero} Грн`);
    totalPrice += 99;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzabeefonions`).click(function () {
    if (numberbeefonions <= 1) {
        $(`.priceCardSelectedPizzabeefonions`).text(`${numberbeefonions * numberColaZero} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 99;
        $(`.price`).text(`${totalPrice} Грн`);
        numberbeefonions = 0;
        $(`.cardSelectedPizzabeefonions`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberbeefonions > 0) {
        numberbeefonions--;
        $(`.numberPizzabeefonions`).text(numberbeefonions);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzabeefonions`).text(`${99 * numberbeefonions} Грн`);
        totalPrice -= 99;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberhammushrooms = 0;
$(`.sitessSelectionAddCartBtnhammushrooms`).click(function () {
    if (numberhammushrooms == 0) {
        numberPizzaBasket++;
        numberhammushrooms++;
        $(`.cardSelectedPizzaTxtNamehammushrooms`).text(`Мініроли з шинкою та грибами`);
        $(`.priceCardSelectedPizzahammushrooms`).text(`${99} Грн`);
        $(`.cardSelectedPizzahammushrooms`).show();
        totalPrice += 99;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberhammushrooms >= 1) {
        $(`.numberPizzahammushrooms`).text(numberhammushrooms + 1);
        numberhammushrooms++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzahammushrooms`).text(`${99 * numberhammushrooms} Грн`);
        totalPrice += 99;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzahammushrooms`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzahammushrooms`).click(function () {
    $(`.numberPizzahammushrooms`).text(numberhammushrooms + 1);
    numberhammushrooms++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzahammushrooms`).text(`${numberhammushrooms * numberColaZero} Грн`);
    totalPrice += 99;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzahammushrooms`).click(function () {
    if (numberhammushrooms <= 1) {
        $(`.priceCardSelectedPizzahammushrooms`).text(`${numberhammushrooms * numberColaZero} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 99;
        $(`.price`).text(`${totalPrice} Грн`);
        numberhammushrooms = 0;
        $(`.cardSelectedPizzahammushrooms`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberhammushrooms > 0) {
        numberhammushrooms--;
        $(`.numberPizzahammushrooms`).text(numberhammushrooms);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzahammushrooms`).text(`${99 * numberhammushrooms} Грн`);
        totalPrice -= 99;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberkhlebets = 0;
$(`.sitessSelectionAddCartBtnkhlebets`).click(function () {
    if (numberkhlebets == 0) {
        numberPizzaBasket++;
        numberkhlebets++;
        $(`.cardSelectedPizzaTxtNamekhlebets`).text(`Хлібці з шинкою та грибами`);
        $(`.priceCardSelectedPizzakhlebets`).text(`${138} Грн`);
        $(`.cardSelectedPizzakhlebets`).show();
        totalPrice += 138;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberkhlebets >= 1) {
        $(`.numberPizzakhlebets`).text(numberkhlebets + 1);
        numberkhlebets++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzakhlebets`).text(`${138 * numberkhlebets} Грн`);
        totalPrice += 138;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzakhlebets`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzakhlebets`).click(function () {
    $(`.numberPizzakhlebets`).text(numberkhlebets + 1);
    numberkhlebets++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzakhlebets`).text(`${numberkhlebets * 138} Грн`);
    totalPrice += 138;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzakhlebets`).click(function () {
    if (numberkhlebets <= 1) {
        $(`.priceCardSelectedPizzakhlebets`).text(`${numberkhlebets * 138} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 138;
        $(`.price`).text(`${totalPrice} Грн`);
        numberkhlebets = 0;
        $(`.cardSelectedPizzakhlebets`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberkhlebets > 0) {
        numberkhlebets--;
        $(`.numberPizzakhlebets`).text(numberkhlebets);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzakhlebets`).text(`${138 * numberkhlebets} Грн`);
        totalPrice -= 138;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberproduct = 0;
$(`.dessertsSelectionAddCartBtnproduct`).click(function () {
    if (numberproduct == 0) {
        numberPizzaBasket++;
        numberproduct++;
        $(`.cardSelectedPizzaTxtNameproduct`).text(`Сіннамон роли`);
        $(`.priceCardSelectedPizzaproduct`).text(`${95} Грн`);
        $(`.cardSelectedPizzaproduct`).show();
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberproduct >= 1) {
        $(`.numberPizzaproduct`).text(numberproduct + 1);
        numberproduct++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzaproduct`).text(`${95 * numberproduct} Грн`);
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzaproduct`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzaproduct`).click(function () {
    $(`.numberPizzaproduct`).text(numberproduct + 1);
    numberproduct++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzaproduct`).text(`${numberproduct * 95} Грн`);
    totalPrice += 95;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzaproduct`).click(function () {
    if (numberproduct <= 1) {
        $(`.priceCardSelectedPizzaproduct`).text(`${numberproduct * 95} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
        numberproduct = 0;
        $(`.cardSelectedPizzaproduct`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberproduct > 0) {
        numberproduct--;
        $(`.numberPizzaproduct`).text(numberproduct);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzaproduct`).text(`${95 * numberproduct} Грн`);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numbervyshneiu = 0;
$(`.dessertsSelectionAddCartBtnvyshneiu`).click(function () {
    if (numbervyshneiu == 0) {
        numberPizzaBasket++;
        numbervyshneiu++;
        $(`.cardSelectedPizzaTxtNamevyshneiu`).text(`Вишневі роли`);
        $(`.priceCardSelectedPizzavyshneiu`).text(`${95} Грн`);
        $(`.cardSelectedPizzavyshneiu`).show();
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numbervyshneiu >= 1) {
        $(`.numberPizzavyshneiu`).text(numbervyshneiu + 1);
        numbervyshneiu++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzavyshneiu`).text(`${95 * numbervyshneiu} Грн`);
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzavyshneiu`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzavyshneiu`).click(function () {
    $(`.numberPizzavyshneiu`).text(numbervyshneiu + 1);
    numbervyshneiu++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzavyshneiu`).text(`${numbervyshneiu * 95} Грн`);
    totalPrice += 95;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzavyshneiu`).click(function () {
    if (numbervyshneiu <= 1) {
        $(`.priceCardSelectedPizzavyshneiu`).text(`${numbervyshneiu * 95} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
        numbervyshneiu = 0;
        $(`.cardSelectedPizzavyshneiu`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numbervyshneiu > 0) {
        numbervyshneiu--;
        $(`.numberPizzavyshneiu`).text(numbervyshneiu);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzavyshneiu`).text(`${95 * numbervyshneiu} Грн`);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberchocoroll = 0;
$(`.dessertsSelectionAddCartBtnchocoroll`).click(function () {
    if (numberchocoroll == 0) {
        numberPizzaBasket++;
        numberchocoroll++;
        $(`.cardSelectedPizzaTxtNamechocoroll`).text(`Шоколадні роли`);
        $(`.priceCardSelectedPizzachocoroll`).text(`${95} Грн`);
        $(`.cardSelectedPizzachocoroll`).show();
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberchocoroll >= 1) {
        $(`.numberPizzachocoroll`).text(numberchocoroll + 1);
        numberchocoroll++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzachocoroll`).text(`${95 * numberchocoroll} Грн`);
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzachocoroll`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzachocoroll`).click(function () {
    $(`.numberPizzachocoroll`).text(numberchocoroll + 1);
    numberchocoroll++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzachocoroll`).text(`${numberchocoroll * 95} Грн`);
    totalPrice += 95;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzachocoroll`).click(function () {
    if (numberchocoroll <= 1) {
        $(`.priceCardSelectedPizzachocoroll`).text(`${numberchocoroll * 95} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
        numberchocoroll = 0;
        $(`.cardSelectedPizzachocoroll`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberchocoroll > 0) {
        numberchocoroll--;
        $(`.numberPizzachocoroll`).text(numberchocoroll);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzachocoroll`).text(`${95 * numberchocoroll} Грн`);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numberkrem = 0;
$(`.dessertsSelectionAddCartBtnkrem`).click(function () {
    if (numberkrem == 0) {
        numberPizzaBasket++;
        numberkrem++;
        $(`.cardSelectedPizzaTxtNamekrem`).text(`Крем-сир роли`);
        $(`.priceCardSelectedPizzakrem`).text(`${95} Грн`);
        $(`.cardSelectedPizzakrem`).show();
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numberkrem >= 1) {
        $(`.numberPizzakrem`).text(numberkrem + 1);
        numberkrem++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzakrem`).text(`${95 * numberkrem} Грн`);
        totalPrice += 95;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzakrem`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzakrem`).click(function () {
    $(`.numberPizzakrem`).text(numberkrem + 1);
    numberkrem++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzakrem`).text(`${numberkrem * 95} Грн`);
    totalPrice += 95;
    $(`.price`).text(`${totalPrice} Грн`);
})

$(`.arrowMinuscardSelectedPizzakrem`).click(function () {
    if (numberkrem <= 1) {
        $(`.priceCardSelectedPizzakrem`).text(`${numberkrem * 95} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
        numberkrem = 0;
        $(`.cardSelectedPizzakrem`).hide();
        if (numberPizzaBasket == 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numberkrem > 0) {
        numberkrem--;
        $(`.numberPizzakrem`).text(numberkrem);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzakrem`).text(`${95 * numberkrem} Грн`);
        totalPrice -= 95;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

let numbepizzaConstructor = 0;
$(`.payBtnpizzaConstructor`).click(function () {
    if (numbepizzaConstructor == 0) {
        numberPizzaBasket++;
        numbepizzaConstructor++;
        $(`.cardSelectedPizzaTxtNamepizzaConstructor`).text(`Піца конструктор`);
        $(`.priceCardSelectedPizzapizzaConstructor`).text(`${priseProduct} Грн`);
        $(`.cardSelectedPizzapizzaConstructor`).show();
        totalPrice += priseProduct;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    } else if (numbepizzaConstructor >= 1) {
        $(`.numberPizzapizzaConstructor`).text(numbepizzaConstructor + 1);
        numbepizzaConstructor++;
        numberPizzaBasket++;
        $(`.priceCardSelectedPizzapizzaConstructor`).text(`${priseProduct * numbepizzaConstructor} Грн`);
        totalPrice += priseProduct;
        $(`.price`).text(`${totalPrice} Грн`);
        $(`.cardSelectedPizzapizzaConstructor`).show();
        $(`.txtNmberOrders`).text(numberPizzaBasket);
    }
});

$(`.arrowPluscardSelectedPizzapizzaConstructor`).click(function () {
    $(`.numberPizzapizzaConstructor`).text(numbepizzaConstructor + 1);
    numbepizzaConstructor++;
    numberPizzaBasket++;
    $(`.txtNmberOrders`).text(numberPizzaBasket);
    $(`.priceCardSelectedPizzapizzaConstructor`).text(`${numbepizzaConstructor * 95} Грн`);
    totalPrice += priseProduct;
    $(`.price`).text(`${totalPrice} Грн`);
});

$(`.arrowMinuscardSelectedPizzapizzaConstructor`).click(function () {
    if (numbepizzaConstructor <= 1) {
        $(`.priceCardSelectedPizzapizzaConstructor`).text(`${numbepizzaConstructor * 95} Грн`);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        totalPrice -= priseProduct;
        $(`.price`).text(`${totalPrice} Грн`);
        numbepizzaConstructor = 0;
        $(`.cardSelectedPizzapizzaConstructor`).hide();
        if (numberPizzaBasket === 0) {
            $(`.SelectedOrderContainer`).hide();
        }
    } else if (numbepizzaConstructor > 0) {
        numbepizzaConstructor--;
        $(`.numberPizzapizzaConstructor`).text(numbepizzaConstructor);
        numberPizzaBasket--;
        $(`.txtNmberOrders`).text(numberPizzaBasket);
        $(`.priceCardSelectedPizzapizzaConstructor`).text(`${priseProduct * numbepizzaConstructor} Грн`);
        totalPrice -= priseProduct;
        $(`.price`).text(`${totalPrice} Грн`);
    }
});

// Сторінка піца конструктора
$(`.popupContainer`).hide();
$(`.standard`).addClass('chosenSizePizzaItem');
$(`.loose`).addClass('chosenSizePizzaItem');
$(`.allItem`).addClass('chosenFilterItem');

$(`.btnclose`).click(function () {
    $(`.popupContainer`).hide();
});

let priseProduct = 210;

$(`.standard`).click(function () {
    $(`.standard`).addClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    priseProduct = 210
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.large`).click(function () {
    $(`.standard`).removeClass('chosenSizePizzaItem');
    $(`.large`).addClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    priseProduct = 247
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.extralarge`).click(function () {
    $(`.standard`).removeClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).addClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    priseProduct = 284
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.thelargest`).click(function () {
    $(`.standard`).removeClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).addClass('chosenSizePizzaItem');
    priseProduct = 321
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.loose`).click(function () {
    $(`.loose`).addClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');

});

$(`.thin`).click(function () {
    $(`.loose`).removeClass('chosenSizePizzaItem');
    $(`.thin`).addClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');
});

$(`.philadelphia`).click(function () {
    $(`.loose`).removeClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).addClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');
});

$(`.hotDog`).click(function () {
    $(`.loose`).removeClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).addClass('chosenSizePizzaItem');
});

$(`.allItem`).click(function () {
    $(`.allItem`).addClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `flex`);
    $(`.meatBox`).css(`display`, `flex`);
    $(`.cheeseBox`).css(`display`, `flex`);
    $(`.vegetablesBox`).css(`display`, `flex`);
});

$(`.saucesItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).addClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `flex`);
    $(`.meatBox`).css(`display`, `none`);
    $(`.cheeseBox`).css(`display`, `none`);
    $(`.vegetablesBox`).css(`display`, `none`);
});

$(`.meatItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).addClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `none`);
    $(`.meatBox`).css(`display`, `flex`);
    $(`.cheeseBox`).css(`display`, `none`);
    $(`.vegetablesBox`).css(`display`, `none`);
});

$(`.cheeseItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).addClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `none`);
    $(`.meatBox`).css(`display`, `none`);
    $(`.cheeseBox`).css(`display`, `flex`);
    $(`.vegetablesBox`).css(`display`, `none`);
});

$(`.vegetablesItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).addClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `none`);
    $(`.meatBox`).css(`display`, `none`);
    $(`.cheeseBox`).css(`display`, `none`);
    $(`.vegetablesBox`).css(`display`, `flex`);
});

let numberProduct = 0;
$(`.prise`).text(priseProduct);
let checkPrise = function () {
    if ($('.standard').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 210
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 244
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 278
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 312
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 346
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 380
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 414
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 448
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 482
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 516
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 550
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 584
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 618
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 652
            $(`.prise`).text(priseProduct);
        }
    } else if ($('.large').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 247
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 285
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 323
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 361
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 399
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 437
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 475
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 513
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 551
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 589
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 627
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 665
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 703
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 741
            $(`.prise`).text(priseProduct);
        }
    } else if ($('.extralarge').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 284
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 326
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 368
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 410
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 452
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 494
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 536
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 578
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 620
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 662
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 704
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 746
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 788
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 830
            $(`.prise`).text(priseProduct);
        }
    } else if ($('.thelargest').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 321
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 367
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 413
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 459
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 505
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 551
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 597
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 643
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 689
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 735
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 781
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 827
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 873
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 919
            $(`.prise`).text(priseProduct);
        }
    }
}

let numberchesnochnyi = 0;
$(`.arrowchesnochnyiPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberalfredo == 0 && numbersousdomynos == 0 && numbersousbbk == 0) {
            if (numberchesnochnyi < 2) {
                numberProduct++;
                numberchesnochnyi++;
                $(`.amountIngredientchesnochnyi`).text(numberchesnochnyi);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowchesnochnyiMinus`).click(function () {
    if (numberchesnochnyi > 0) {
        numberchesnochnyi--;
        numberProduct--;
        $(`.amountIngredientchesnochnyi`).text(numberchesnochnyi);
    }
});

let numberalfredo = 0;
$(`.arrowalfredoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberchesnochnyi == 0 && numbersousdomynos == 0 && numbersousbbk == 0) {
            if (numberalfredo < 2) {
                numberProduct++;
                numberalfredo++;
                $(`.amountIngredientalfredo`).text(numberalfredo);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowalfredoMinus`).click(function () {
    if (numberalfredo > 0) {
        numberalfredo--;
        numberProduct--;
        $(`.amountIngredientalfredo`).text(numberalfredo);
    }
});

let numbersousdomynos = 0;
$(`.arrowsousdomynosPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberalfredo == 0 && numberchesnochnyi == 0 && numbersousbbk == 0) {
            if (numbersousdomynos < 2) {
                numberProduct++;
                numbersousdomynos++;
                $(`.amountIngredientsousdomynos`).text(numbersousdomynos);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowsousdomynosMinus`).click(function () {
    if (numbersousdomynos > 0) {
        numbersousdomynos--;
        numberProduct--;
        $(`.amountIngredientsousdomynos`).text(numbersousdomynos);
    }
});

let numbersousbbk = 0;
$(`.arrowsousbbkPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberalfredo == 0 && numbersousdomynos == 0 && numberchesnochnyi == 0) {
            if (numbersousbbk < 2) {
                numberProduct++;
                numbersousbbk++;
                $(`.amountIngredientsousbbk`).text(numbersousbbk);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowsousbbkMinus`).click(function () {
    if (numbersousbbk > 0) {
        numbersousbbk--;
        numberProduct--;
        $(`.amountIngredientsousbbk`).text(numbersousbbk);
    }
});

let numbertyrkey = 0;
$(`.arrowtyrkeyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertyrkey < 3) {
            numberProduct++;
            numbertyrkey++;
            checkPrise();
            $(`.amountIngredienttyrkey`).text(numbertyrkey);
        }
    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtyrkeyMinus`).click(function () {
    if (numbertyrkey > 0) {
        numbertyrkey--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttyrkey`).text(numbertyrkey);
    }
});

let numberchorizo = 0;
$(`.arrowchorizoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberchorizo < 3) {
            numberProduct++;
            numberchorizo++;
            checkPrise();
            $(`.amountIngredientchorizo`).text(numberchorizo);
        }
    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowchorizoMinus`).click(function () {
    if (numberchorizo > 0) {
        numberchorizo--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientchorizo`).text(numberchorizo);
    }
});

let numberohotnichikolbaski = 0;
$(`.arrowohotnichikolbaskiPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberohotnichikolbaski < 3) {
            numberProduct++;
            numberohotnichikolbaski++;
            checkPrise();
            $(`.amountIngredientohotnichikolbaski`).text(numberohotnichikolbaski);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowohotnichikolbaskiMinus`).click(function () {
    if (numberohotnichikolbaski > 0) {
        numberohotnichikolbaski--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientohotnichikolbaski`).text(numberohotnichikolbaski);
    }
});

let numberkolbasky = 0;
$(`.arrowkolbaskyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkolbasky < 3) {
            numberProduct++;
            numberkolbasky++;
            checkPrise();
            $(`.amountIngredientkolbasky`).text(numberkolbasky);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkolbaskyMinus`).click(function () {
    if (numberkolbasky > 0) {
        numberkolbasky--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkolbasky`).text(numberkolbasky);
    }
});

let numberbifteliatyna = 0;
$(`.arrowbifteliatynaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberbifteliatyna < 3) {
            numberProduct++;
            numberbifteliatyna++;
            checkPrise();
            $(`.amountIngredientbifteliatyna`).text(numberbifteliatyna);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowbifteliatynaMinus`).click(function () {
    if (numberbifteliatyna > 0) {
        numberbifteliatyna--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientbifteliatyna`).text(numberbifteliatyna);
    }
});

let numberlargevetchinanarez = 0;
$(`.arrowlargevetchinanarezPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberlargevetchinanarez < 3) {
            numberProduct++;
            numberlargevetchinanarez++;
            checkPrise();
            $(`.amountIngredientlargevetchinanarez`).text(numberlargevetchinanarez);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowlargevetchinanarezMinus`).click(function () {
    if (numberlargevetchinanarez > 0) {
        numberlargevetchinanarez--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientlargevetchinanarez`).text(numberlargevetchinanarez);
    }
});

let numberzavantazhennia = 0;
$(`.arrowzavantazhenniaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberzavantazhennia < 3) {
            numberProduct++;
            numberzavantazhennia++;
            checkPrise();
            $(`.amountIngredientzavantazhennia`).text(numberzavantazhennia);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowzavantazhenniaMinus`).click(function () {
    if (numberzavantazhennia > 0) {
        numberzavantazhennia--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientzavantazhennia`).text(numberzavantazhennia);
    }
});

let numbertunets = 0;
$(`.arrowtunetsPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertunets < 3) {
            numbertunets++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienttunets`).text(numbertunets);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtunetsMinus`).click(function () {
    if (numbertunets > 0) {
        numbertunets--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttunets`).text(numbertunets);
    }
});

let numberkolbaskimyunhenskie = 0;
$(`.arrowkolbaskimyunhenskiePlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkolbaskimyunhenskie < 3) {
            numberProduct++;
            numberkolbaskimyunhenskie++;
            checkPrise();
            $(`.amountIngredientkolbaskimyunhenskie`).text(numberkolbaskimyunhenskie);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkolbaskimyunhenskieMinus`).click(function () {
    if (numberkolbaskimyunhenskie > 0) {
        numberkolbaskimyunhenskie--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkolbaskimyunhenskie`).text(numberkolbaskimyunhenskie);
    }
});

let numberpepp = 0;
$(`.arrowpeppPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberpepp < 3) {
            numberpepp++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientpepp`).text(numberpepp);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowpeppMinus`).click(function () {
    if (numberpepp > 0) {
        numberpepp--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientpepp`).text(numberpepp);
    }
});

let numbertirasdepollo = 0;
$(`.arrowtirasdepolloPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertirasdepollo < 3) {
            numbertirasdepollo++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienttirasdepollo`).text(numbertirasdepollo);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtirasdepolloMinus`).click(function () {
    if (numbertirasdepollo > 0) {
        numbertirasdepollo--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttirasdepollo`).text(numbertirasdepollo);
    }
});

let numberchedder = 0;
$(`.arrowchedderPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberchedder < 3) {
            numberchedder++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientchedder`).text(numberchedder);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowchedderMinus`).click(function () {
    if (numberchedder > 0) {
        numberchedder--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientchedder`).text(numberchedder);
    }
});

let numbermozzarella = 0;
$(`.arrowmozzarellaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbermozzarella < 3) {
            numbermozzarella++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientmozzarella`).text(numbermozzarella);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowmozzarellaMinus`).click(function () {
    if (numbermozzarella > 0) {
        numbermozzarella--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientmozzarella`).text(numbermozzarella);
    }
});

let numberdorblu = 0;
$(`.arrowdorbluPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberdorblu < 3) {
            numberdorblu++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientdorblu`).text(numberdorblu);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowdorbluMinus`).click(function () {
    if (numberdorblu > 0) {
        numberdorblu--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientdorblu`).text(numberdorblu);
    }
});

let numberparmezan = 0;
$(`.arrowparmezanPlus`).click(function () {
    console.log(numberProduct);
    if (numberProduct <= 14) {
        if (numberparmezan < 3) {
            numberparmezan++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientparmezan`).text(numberparmezan);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowparmezanMinus`).click(function () {
    console.log(numberProduct);
    if (numberparmezan > 0) {
        numberparmezan--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientparmezan`).text(numberparmezan);
    }
});

let numberfeta = 0;
$(`.arrowfetaPlus`).click(function () {
    console.log(numberProduct);
    if (numberProduct <= 14) {
        if (numberfeta < 3) {
            numberfeta++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientfeta`).text(numberfeta);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowfetaMinus`).click(function () {
    if (numberfeta > 0) {
        numberfeta--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientfeta`).text(numberfeta);
    }
});

let numbercherrytomatoes = 0;
$(`.arrowcherrytomatoesPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbercherrytomatoes < 3) {
            numbercherrytomatoes++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientcherrytomatoes`).text(numbercherrytomatoes);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowcherrytomatoesMinus`).click(function () {
    if (numbercherrytomatoes > 0) {
        numbercherrytomatoes--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientcherrytomatoes`).text(numbercherrytomatoes);
    }
});

let numbershpinat = 0;
$(`.arrowshpinatPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbershpinat < 3) {
            numbershpinat++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientshpinat`).text(numbershpinat);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowshpinatMinus`).click(function () {
    if (numbershpinat > 0) {
        numbershpinat--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientshpinat`).text(numbershpinat);
    }
});

let numberkhalapeno = 0;
$(`.arrowkhalapenoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkhalapeno < 3) {
            numberkhalapeno++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientkhalapeno`).text(numberkhalapeno);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkhalapenoMinus`).click(function () {
    if (numberkhalapeno > 0) {
        numberkhalapeno--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkhalapeno`).text(numberkhalapeno);
    }
});

let numbertomato = 0;
$(`.arrowtomatoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertomato < 3) {
            numbertomato++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienttomato`).text(numbertomato);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtomatoMinus`).click(function () {
    if (numbertomato > 0) {
        numbertomato--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttomato`).text(numbertomato);
    }
});

let numberhorchytsa = 0;
$(`.arrowhorchytsaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberhorchytsa < 3) {
            numberhorchytsa++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienthorchytsa`).text(numberhorchytsa);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowhorchytsaMinus`).click(function () {
    if (numberhorchytsa > 0) {
        numberhorchytsa--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienthorchytsa`).text(numberhorchytsa);
    }
});

let numberolyvky = 0;
$(`.arrowolyvkyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberolyvky < 3) {
            numberolyvky++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientolyvky`).text(numberolyvky);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowolyvkyMinus`).click(function () {
    if (numberolyvky > 0) {
        numberolyvky--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientolyvky`).text(numberolyvky);
    }
});

let numberpear = 0;
$(`.arrowpearPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberpear < 3) {
            numberpear++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientpear`).text(numberpear);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowpearMinus`).click(function () {
    if (numberpear > 0) {
        numberpear--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientpear`).text(numberpear);
    }
});

let numbermarinovannyeogurcy = 0;
$(`.arrowmarinovannyeogurcyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbermarinovannyeogurcy < 3) {
            numbermarinovannyeogurcy++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientmarinovannyeogurcy`).text(numbermarinovannyeogurcy);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowmarinovannyeogurcyMinus`).click(function () {
    if (numbermarinovannyeogurcy > 0) {
        numbermarinovannyeogurcy--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientmarinovannyeogurcy`).text(numbermarinovannyeogurcy);
    }
});

let numberperets = 0;
$(`.arrowperetsPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberperets < 3) {
            numberperets++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientperets`).text(numberperets);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowperetsMinus`).click(function () {
    if (numberperets > 0) {
        numberperets--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientperets`).text(numberperets);
    }
});

let numberananasa = 0;
$(`.arrowananasaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberananasa < 3) {
            numberananasa++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientananasa`).text(numberananasa);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowananasaMinus`).click(function () {
    if (numberananasa > 0) {
        numberananasa--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientananasa`).text(numberananasa);
    }
});

let numbershampinony = 0;
$(`.arrowshampinonyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbershampinony < 3) {
            numbershampinony++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientshampinony`).text(numbershampinony);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowshampinonyMinus`).click(function () {
    if (numbershampinony > 0) {
        numbershampinony--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientshampinony`).text(numbershampinony);
    }
});

let numberluk = 0;
$(`.arrowlukPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberluk < 3) {
            numberluk++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientluk`).text(numberluk);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowlukMinus`).click(function () {
    if (numberluk > 0) {
        numberluk--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientluk`).text(numberluk);
    }
});

let numberkukurudzu = 0;
$(`.arrowkukurudzuPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkukurudzu < 3) {
            numberkukurudzu++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientkukurudzu`).text(numberkukurudzu);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkukurudzuMinus`).click(function () {
    if (numberkukurudzu > 0) {
        numberkukurudzu--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkukurudzu`).text(numberkukurudzu);
    }
});

let numbercrispy = 0;
$(`.arrowcrispyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbercrispy < 3) {
            numbercrispy++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientcrispy`).text(numbercrispy);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowcrispyMinus`).click(function () {
    if (numbercrispy > 0) {
        numbercrispy--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientcrispy`).text(numbercrispy);
    }
});

let numbersousbbktop = 0;
$(`.arrowsousbbktopPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbersousbbktop < 1) {
            numbersousbbktop++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientsousbbktop`).text(numbersousbbktop);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowsousbbktopMinus`).click(function () {
    if (numbersousbbktop > 0) {
        numbersousbbktop--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientsousbbktop`).text(numbersousbbktop);
    }
});

$(`.resetBtn`).click(function () {
    numberchesnochnyi = 0;
    numberalfredo = 0;
    numbersousdomynos = 0;
    numbersousbbk = 0;
    numbertyrkey = 0;
    numberchorizo = 0;
    numberohotnichikolbaski = 0;
    numberkolbasky = 0;
    numberbifteliatyna = 0;
    numberlargevetchinanarez = 0;
    numberzavantazhennia = 0;
    numbertunets = 0;
    numberkolbaskimyunhenskie = 0;
    numberpepp = 0;
    numbertirasdepollo = 0;
    numberchedder = 0;
    numbermozzarella = 0;
    numberdorblu = 0;
    numberparmezan = 0;
    numberfeta = 0;
    numbercherrytomatoes = 0;
    numbershpinat = 0;
    numberkhalapeno = 0;
    numbertomato = 0;
    numberhorchytsa = 0;
    numberolyvky = 0;
    numberpear = 0;
    numbermarinovannyeogurcy = 0;
    numberperets = 0;
    numberananasa = 0;
    numbershampinony = 0;
    numberluk = 0;
    numberkukurudzu = 0;
    numbercrispy = 0;
    numbersousbbktop = 0;
    $(`.amountIngredientsousbbktop`).text(numbersousbbktop);
    $(`.amountIngredientcrispy`).text(numbercrispy);
    $(`.amountIngredientkukurudzu`).text(numberkukurudzu);
    $(`.amountIngredientluk`).text(numberluk);
    $(`.amountIngredientshampinony`).text(numbershampinony);
    $(`.amountIngredientananasa`).text(numberananasa);
    $(`.amountIngredientperets`).text(numberperets);
    $(`.amountIngredientmarinovannyeogurcy`).text(numbermarinovannyeogurcy);
    $(`.amountIngredientpear`).text(numberpear);
    $(`.amountIngredientolyvky`).text(numberolyvky);
    $(`.amountIngredienthorchytsa`).text(numberhorchytsa);
    $(`.amountIngredienttomato`).text(numbertomato);
    $(`.amountIngredientkhalapeno`).text(numberkhalapeno);
    $(`.amountIngredientshpinat`).text(numbershpinat);
    $(`.amountIngredientcherrytomatoes`).text(numbercherrytomatoes);
    $(`.amountIngredientfeta`).text(numberfeta);
    $(`.amountIngredientparmezan`).text(numberparmezan);
    $(`.amountIngredientdorblu`).text(numberdorblu);
    $(`.amountIngredientmozzarella`).text(numbermozzarella);
    $(`.amountIngredientchedder`).text(numberchedder);
    $(`.amountIngredienttirasdepollo`).text(numbertirasdepollo);
    $(`.amountIngredientpepp`).text(numberpepp);
    $(`.amountIngredientkolbaskimyunhenskie`).text(numberkolbaskimyunhenskie);
    $(`.amountIngredienttunets`).text(numbertunets);
    $(`.amountIngredientzavantazhennia`).text(numberzavantazhennia);
    $(`.amountIngredientlargevetchinanarez`).text(numberlargevetchinanarez);
    $(`.amountIngredientbifteliatyna`).text(numberbifteliatyna);
    $(`.amountIngredientkolbasky`).text(numberkolbasky);
    $(`.amountIngredientohotnichikolbaski`).text(numberohotnichikolbaski);
    $(`.amountIngredientchorizo`).text(numberchorizo);
    $(`.amountIngredienttyrkey`).text(numbertyrkey);
    $(`.amountIngredientsousbbk`).text(numbersousbbk);
    $(`.amountIngredientsousdomynos`).text(numbersousdomynos);
    $(`.amountIngredientalfredo`).text(numberalfredo);
    $(`.amountIngredientchesnochnyi`).text(numberchesnochnyi);
    priseProduct = 210;
    $(`.prise`).text(priseProduct);
    numberProduct = 0;
    $(`.standard`).addClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    $(`.loose`).addClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');
});