var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('0xf7a77eff'), //Changed
  addressVersion: 0x1e, // Changed
  privKeyVersion: 0x9e, 
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: { 
    hash: hex('7872d790c74c30631400a1df5bd701c60d20533bdb0cb2ae7f469236c60f000064'),
    merkle_root: hex('00fd75e6dce5e8c50ed0df2b0b73c2c37c8329d837ec3aec1e7151915d27831c'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1231006505,
    bits: 486604799,
  },
  dnsSeeds: [
   'e1.verge-electrum.com',
   'e2.verge-electrum.com',
   'e3.verge-electrum.com'
  ],
  defaultClientPort: 8333
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
