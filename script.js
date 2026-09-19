const result = document.getElementById("result");

function appendValue(value) {
    if (result.value === "0") {
        result.value = value;
    } else {
        result.value += value;
    }
}

function clearResult() {
    result.value = "0";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);

    if (result.value === "") {
        result.value = "0";
    }
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}