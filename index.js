// jshint esversion:6

const fs   = require('fs');
const path = require('path');

module.exports = listFiles;


/**
 * Find files inside a dir, recursively. 
 * 
 * @param  {string} dir Dir path string.
 * @param  {string} (optional) String or regexp to match. Can be a '\\.html$' or /\.html$/
 * @return {string[]} Array of file names that are inside the directory. Otionaly filtered.
 */
function listFiles(dir,regexp){
    if (fs.statSync(dir).isDirectory()==false) return [dir];
    
    var re  = new RegExp(regexp);
    return  fs.readdirSync(dir)
              .map( name => listFiles( path.join(dir,name) ) )
              .reduce ( (sum, arr) => sum.concat(arr), [])
              .filter( name => re.test(name) );

}
