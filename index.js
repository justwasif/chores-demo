export function greet(name) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("greet() expects a non-empty string");
  }
  return `Hello, ${name.trim()}!`;
}

export function shout(name) {
  return greet(name).toUpperCase();
}
