/**
 * Created by zyq on 2018/1/16.
 */
let titleFun = function(chunkName,title){
    let titleDef = 'XXX网站';
    if(chunkName.indexOf('index') !==-1){
        return titleDef;
    }else{
        return title + '_' + titleDef;
    }
};
module.exports = {
    titleFun:titleFun
};