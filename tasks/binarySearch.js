const data = Array.from(Array(10000).keys());

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearch(data, 90));
