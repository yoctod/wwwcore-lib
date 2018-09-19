'use strict';

var wwwcore = module.exports;

// module information
wwwcore.version = 'v' + require('./package.json').version;
wwwcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of wwwcore-lib found. ' +
      'Please make sure to require wwwcore-lib and check that submodules do' +
      ' not also include their own wwwcore-lib dependency.';
    throw new Error(message);
  }
};
//wwwcore.versionGuard(global.wwwcore);
global._wwwcore = wwwcore.version;

// crypto
wwwcore.crypto = {};
wwwcore.crypto.BN = require('./lib/crypto/bn');
wwwcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
wwwcore.crypto.Hash = require('./lib/crypto/hash');
wwwcore.crypto.Random = require('./lib/crypto/random');
wwwcore.crypto.Point = require('./lib/crypto/point');
wwwcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
wwwcore.encoding = {};
wwwcore.encoding.Base58 = require('./lib/encoding/base58');
wwwcore.encoding.Base58Check = require('./lib/encoding/base58check');
wwwcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
wwwcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
wwwcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
wwwcore.util = {};
wwwcore.util.buffer = require('./lib/util/buffer');
wwwcore.util.js = require('./lib/util/js');
wwwcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
wwwcore.errors = require('./lib/errors');

// main bitcoin library
wwwcore.Address = require('./lib/address');
wwwcore.Block = require('./lib/block');
wwwcore.MerkleBlock = require('./lib/block/merkleblock');
wwwcore.BlockHeader = require('./lib/block/blockheader');
wwwcore.HDPrivateKey = require('./lib/hdprivatekey.js');
wwwcore.HDPublicKey = require('./lib/hdpublickey.js');
wwwcore.Networks = require('./lib/networks');
wwwcore.Opcode = require('./lib/opcode');
wwwcore.PrivateKey = require('./lib/privatekey');
wwwcore.PublicKey = require('./lib/publickey');
wwwcore.Script = require('./lib/script');
wwwcore.Transaction = require('./lib/transaction');
wwwcore.URI = require('./lib/uri');
wwwcore.Unit = require('./lib/unit');

// dependencies, subject to change
wwwcore.deps = {};
wwwcore.deps.bnjs = require('bn.js');
wwwcore.deps.bs58 = require('bs58');
wwwcore.deps.Buffer = Buffer;
wwwcore.deps.elliptic = require('elliptic');
wwwcore.deps.scryptsy = require('scryptsy');
wwwcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
wwwcore._HDKeyCache = require('./lib/hdkeycache');
wwwcore.Transaction.sighash = require('./lib/transaction/sighash');
