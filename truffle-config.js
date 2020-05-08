require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain method guess climb olympic song'; 
let testAccounts = [
"0xb8158a6d3b133c6962768ef77cc4ba45f7be8ac6c87232fd7641db2c4183ae8a",
"0x607f68c51f3b79ab28147f6750cecaefee9ae092fc9672abc1bdccfbbbf5f0ef",
"0x9a92a1b52fc6a277d926a01d14488d866018614fb4935402118f9169a55d68eb",
"0xfd361ac3f413a56e38a719a4f2d6f9336f8e70070a0b51768ea8a1abb07f7ec1",
"0xebcdf4e5d315837d5182f335b995f7fe610a41a97b243140db0388f470706f73",
"0x61e1f85e1d2455699932a5c99a01bd8490427ffbed6059e1b474966fa2213689",
"0x040fbf4992e36787e3682bffdf25618538571b85abd806f3a3a7e4c9b3e20486",
"0x8b8bdecf49099507b90f58e7c89d83843cdb62aa6a085f123e2b84d32f60da96",
"0x8b03dfa63af2cb9b34d073a666980d5e24813d5d40055cbfd69acf15dfcd93bb",
"0xea690a21eb6a4c6acb657e50ab689afd69f0eb2e392effa9e7ae0f9cd7ef36fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
