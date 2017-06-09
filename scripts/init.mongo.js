#!/usr/bin/mongo

var db = new Mongo().getDB("bugsdb");

db.bugs.remove({});

db.bugs.insert([
  {id: 1, priority: 'P1', status:'Open', owner:'Jessica Bánh Bèo', title:'Jessica Bánh Bèo'},
  {id: 2, priority: 'P2', status:'New', owner:'Eddie Tí Tèo', title:'Thiếu canh lề CSS cho văn bản trong table'},

]);

