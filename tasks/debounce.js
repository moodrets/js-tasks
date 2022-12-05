function fn(value) {
    console.log(value);
}

function debounce(func, wait) {
    let timeoutId = null;
    let lastArguments = null;
    let lastThis = null;

    return (...args) => {
        lastArguments = args;
        lastThis = this;

        const fnCall = () => {
            func.apply(lastThis, lastArguments);

            lastArguments = null;
            lastThis = null;
        };

        clearTimeout(timeoutId);

        timeoutId = setTimeout(fnCall, wait);
    };
}

const debounceCall = debounce(fn(1), 1000);
