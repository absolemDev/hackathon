export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function isPromise(value) {
  return value !== undefined && value !== null && typeof value.then === 'function';
}

export function silencePromise(value) {
  if (isPromise(value)) {
    value.then(null, () => {});
  }
}