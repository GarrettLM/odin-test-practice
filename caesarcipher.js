function encrypt(plaintext, key) {
  let cipherText = plaintext.split("").map(letter => {
    return (letter.match("[^a-z]") && letter.match("[^A-Z]")) ? letter
     : String.fromCharCode(letter.charCodeAt(0) + key);
  }).join("");

  return cipherText;
}

function decrypt(cipherText, key) {
  let plainText = cipherText;

  return plainText;
}

module.exports = { encrypt, decrypt };