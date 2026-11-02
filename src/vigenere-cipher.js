/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this.transform(message, key, 1);
  }

  decrypt(message, key) {
    return this.transform(message, key, -1);
  }

  transform(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const text = message.toUpperCase();
    const keyword = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (const character of text) {
      const index = alphabet.indexOf(character);
      if (index === -1) {
        result += character;
      } else {
        const shift = alphabet.indexOf(keyword[keyIndex % keyword.length]);
        result += alphabet[(index + direction * shift + 26) % 26];
        keyIndex++;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
