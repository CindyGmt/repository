
import CryptoJS from 'crypto-js'
const aeskey = "chdxncuhyqtriorbxfcb";

const KEY = CryptoJS.enc.Utf8.parse("unicomecssunicom"); //""中与后台一样 16位 密码
const IV = CryptoJS.enc.Utf8.parse("9842403632257163"); //""中与后台一样   16位


let utils = {
    // 清除cookie
 delCookie() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie =
        name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
    if (cookies.length > 0) {
        for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        var domain = location.host.substr(location.host.indexOf("."));
        document.cookie =
            name +
            "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" +
            domain;
        }
    }
 },
  encrypt(word) {
    let key = KEY
    let iv = IV
    let srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    // console.log("-=-=-=-", encrypted.ciphertext)
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
},
//解密
decrypt(word) {
    let key = KEY
    let iv = IV
    let base64 = CryptoJS.enc.Base64.parse(word);
    let src = CryptoJS.enc.Base64.stringify(base64);

    var decrypt = CryptoJS.AES.decrypt(src, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });

    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
}
export default utils