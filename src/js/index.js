let firstNumber = 0; let secondNumber = 0;
let op = null;

const operationChange = {
    "/": "/",
    "X": "*",
    "-": "-",
    "+": "+",
}

const pageInit = () => {
    document.querySelectorAll("button").forEach(item => {
        item.addEventListener("click", clickEvent);
    });
}

const clickEvent = (e) => {
    const className = e.target.className;

    switch (className) {
        case "digit":
            insertNumber(e);
            break;
        case "modifier":
            allClear(e);
            break;
        case "operation":
            setOperation(e);
            break;
    }
}

const insertNumber = (e) => {
    const $total = document.querySelector("#total");
    const numVal = e.target.textContent.trim();
    let val = $total.textContent.trim();

    val = (val === "0") ? numVal : val.toString() + numVal;

    if (firstNumber != 0 && secondNumber == 0) {

        $total.innerText = numVal;

        secondNumber = Number(numVal);
    }
    else {
        if (val.length > 3) return alert("숫자는 한번에 최대 3자리 수까지 입력 가능합니다.");

        $total.innerText = val.toString();
    }
}

const allClear = (e) => {
    document.querySelector("#total").textContent = "0";
    firstNumber = 0;
    secondNumber = 0;
    op = null;
}

const setOperation = (e) => {
    const $result = document.querySelector("#total");
    const operation = e.target.textContent;

    if (operation === "=") {

        $result.textContent = eval(firstNumber + op + $result.textContent);

        firstNumber = Number($result.textContent);
        secondNumber = 0;

        op = null;
    }
    else {
        if (firstNumber > 0 && secondNumber > 0 && op !== null) return alert("두번은 안대요.");

        firstNumber = $result.textContent;

        op = operationChange[operation];
    }
}

pageInit();