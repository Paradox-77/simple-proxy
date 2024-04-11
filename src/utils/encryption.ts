import CryptoJS from 'crypto-js';

const KEY = process.env.KEY ?? null;
const IV = process.env.IV ?? null;

if (!KEY || !IV) throw new Error('KEY or IV is not defined');

const key = CryptoJS.enc.Utf8.parse(KEY);
const iv = CryptoJS.enc.Utf8.parse(IV);

export function encrypt(message: string) {
  return CryptoJS.AES.encrypt(message, key, { iv: iv }).toString();
}

export function decrypt(ciphertext: string) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key, { iv: iv });
  return bytes.toString(CryptoJS.enc.Utf8);
}
