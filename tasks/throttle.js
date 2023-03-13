function throttle(func, wait) {
    let timeoutId = null;
    let lastArguments = null;
    let lastThis = null;

    return (...args) => {
        if (timeoutId) {
            lastArguments = args;
            lastThis = this;
            return;
        }

        func.apply(this, args);

        timeoutId = setTimeout(() => {
            if (lastArguments) {
                func.apply(lastThis, lastArguments);

                timeoutId = null;
                lastArguments = null;
                lastThis = null;
            }
        }, wait);
    };
}

function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            savedThis = this;
            savedArgs = arguments;
            return;
        }
        func.apply(this, arguments);
        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
