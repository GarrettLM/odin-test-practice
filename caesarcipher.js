function encrypt(plaintext, key) {
  let cipherText = plaintext.split("").map(letter => {
    return String.fromCharCode(letter.charCodeAt(0) + key);
  }).join("");

  return cipherText;
}

module.exports = { encrypt };