require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy repeat place attitude gloom praise army gasp'; 
let testAccounts = [
"0xae3949e363dde6db7983efb0793119280113c788685b006b2c4003b82235d77e",
"0x7c514ea392b215be63910f362b6ca9d937033fce7fcf1d8a28cdc4cf79954dca",
"0x31722a510e576897260c5c0787790d59908c5e9b5faafd23b814f7f414e669fe",
"0xfd8b807b111aae5650e10c8497fe44c09348b3c1af287947b2e99ac55800bd20",
"0xee2439a35bdace281df5b6f268d5ae89c466aff75441e48b3fc014e2620a028f",
"0x0a299365dffcf18b0635886fb0cfe3cf829e0cd0092d8b1ff303395f8c1d1e98",
"0xe4e224960b620c253b1cafbeba76254b215f75d774dbf9cf3b556c0db04740fc",
"0xbed0e0889a0697b4d85dca8631439efd03d58802371d390de25873cae5110b16",
"0xdfe5847f3e2c9f6cff0d80336473349629d4ba38198d5ca3cdf3600e6adfd07e",
"0xbf97fcd27a57b3ff6044b29fe6e73dc5f889d6c89ee4361f56b147f69ffd4128"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
