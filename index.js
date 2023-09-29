const prompt = require("prompt");
const colors = require("colors");
const axios = require("axios");
console.log("\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510".green);
console.log("\u2502\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2502".green);
console.log("\u2502\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2502".green);
console.log("\u2502\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2502".green);
console.log("\u2502\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2502".green);
console.log("\u2502\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2502".green);
console.log("\u2502\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D  \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u2502".green);
console.log("\u2502                                          \u2502".green);
console.log("\u2502\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557\u2588\u2588\u2557                 \u2502".green);
console.log("\u2502\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551                 \u2502".green);
console.log("\u2502\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551                 \u2502".green);
console.log("\u2502\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551                 \u2502".green);
console.log("\u2502\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557            \u2502".green);
console.log("\u2502\u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D            \u2502".green);
console.log("\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518".green);
prompt.message = null;
prompt.start();
prompt.get([{
  'name': "email",
  'description': colors.green("[FloodMail.net] Enter Email".inverse),
  'required': true
}], function (_0x45a639, _0x1b5ffb) {
  if (_0x45a639) {
    console.error(_0x45a639);
    return;
  }
  var _0x1a9c7a = _0x1b5ffb.email;
  if (_0x1a9c7a.length < 0x4) {
    console.log("[Error] Invalid Email! (Min Length: 4)".red.inverse);
    process.exit();
  }
  if (_0x1a9c7a.length > 0x140) {
    console.log("[Error] Invalid Email! (Max Length: 320)".red.inverse);
    process.exit();
  }
  if (!_0x1a9c7a.includes('@')) {
    console.log("[Error] Invalid Email! (Missing: @)".red.inverse);
    process.exit();
  }
  if (!_0x1a9c7a.includes('.')) {
    console.log("[Error] Invalid Email! (Missing: .)".red.inverse);
    process.exit();
  }
  if (_0x1a9c7a.match(/[^a-zA-Z0-9@._-]/)) {
    console.log("[Error] Illegal Characters!".red.inverse);
    process.exit();
  }
  main(_0x1a9c7a);
});
async function main(_0x567162) {
  try {
    let _0x314e47 = await axios.get("https://floodmail.net/free", {
      'params': {
        'email': _0x567162
      },
      'headers': {
        'User-Agent': "floodmailprivateservices"
      }
    });
    if (_0x314e47.status === 0xc8) {
      console.log(_0x314e47.data.green);
    }
  } catch (_0xa8f83e) {
    console.log("[Error]: Floodmail.net Not Responding!".green);
  }
}
