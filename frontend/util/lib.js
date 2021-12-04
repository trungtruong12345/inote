export function addElement(arr, val) {
	arr.push(val)
}

export function removeElement(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			arr.splice(i, 1)
			break
		}
	}
}

export function changeElement(arr, callback, newVal) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			arr.fill(newVal, i, i + 1)
			break
		}
	}
}

export function insertbefore(arr, callback, newElement) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			arr.splice(i, 0, newElement)
			break
		}
	}
}

export function updateElement(arr, callback, newVal) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			arr[i] = newVal
			break
		}
	}
}
