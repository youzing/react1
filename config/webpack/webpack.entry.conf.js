/**
 * Created by zyq on 2018/1/16.
 */
const entryBuild = require('../entry/entry');
let entry = {};
entryBuild.map((data) => {
    entry[data.name] = ['./entryBuild/' + data.name + '.js', data.title];
});
module.exports = entry;