const CardanocliJs = require('cardanocli-js');
var cardanocliJs;

const express = require('express');
const app     = express();
const server  = app.listen(55555, () => {
  const { exec } = require('child_process');
  exec('cat ~/cardano/cfg/net.cardano', (x,o,e) => {
    const path = require('path');
    const os   = require('os');
    const home = os.homedir();
    
    if(o == null || o.trim().length == 0) {
      cardanocliJs = new CardanocliJs({
        network: 'testnet-magic 1097911063',
        era: 'babbage',
        dir: path.join(home,
          'cardano-src',
          'cardano-node'
        ),
        shelleyGenesisPath: path.join(home,
          'cardano-src', 'cardano-node',
          'configuration', 'cardano',
          'testnet-shelley-genesis.json'
        ),
        socketPath: path.join(home,
          'cardano', 'node.socket'
        )
      });
      return;
    }
    else {
      o = o.trim();
    }
    
    var net = 'mainnet-magic 764824073';
    var era = 'babbage';
    
    var dir = path.join(home,
      'cardano', 'src',
      'cardano-node'
    );
    var shePath = path.join(dir,
      'configuration', 'cardano',
      o + '-shelley-genesis.json'
    );
    const socPath = path.join(home,
      'cardano', 'node.socket'
    );
    
    switch(o) {
      case 'testnet':
        net = 'testnet-magic 1097911063';
        dir = path.join(home,
          'cardano-src',
          'cardano-node'
        );
        shePath = path.join(dir,
          'configuration', 'cardano',
          'testnet-shelley-genesis.json'
        );
        break;
      case 'preview':
        net = 'testnet-magic 2';
        break;
      case 'preprod':
        net = 'testnet-magic 1';
        era = 'alonzo';
        break;
      default:
        break;
    }
    
    cardanocliJs = new CardanocliJs({
      network: net,
      era: era,
      dir: dir,
      shelleyGenesisPath: shePath,
      socketPath: socPath
    });
  });
});

app.get('/queryTip', function(req, rsp) {
  const tip = cardanocliJs.queryTip();
  const str = JSON.stringify(tip, null, 4);
  console.log('"queryTip": ' + str);
  rsp.send(str);
});

