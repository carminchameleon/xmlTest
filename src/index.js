/*
validator's isValidXML function receives a string, checks if a string is a valid xml, and returns a boolean.

<a /> => true
<a></a> => true
<a>test</a> => true
<a><b></b></a> => true
<a></a><b></b> => true

<a> => false
<<a></a> => false
<a><b></a></b> => false

IMPORTANT: Please note that we have our own internal rules about validity.
1. A node cannot contain a node with the same tag. ex) <a><a></a></a> => false
2. A node cannot be followed by a node with the same tag. ex) <a></a><a></a> => false
3. An xml cannot be more than 2 levels deep. ex) <a><b><c><d></d></c></b></a> => false

IMPORTANT: Feel free to use any open source libraries you find necessary. You can use xml parsing libraries as well.
IMPORTANT: Don't worry about XML declaration, node attributes, or unicode characters.

For further examples, please check basic_spec.js file.

DO NOT MODIFY
*/

/*
@param xmlString: a string, possibly a valid xml string
@return boolean;
*/
exports.isValidXML = xmlString => {
  if (xmlString.length === 0) {
    return false;
  // 태그 하나 짜리인 경우
  } else if( xmlString.length < 4){
    return false
  }
let firstResult = xmlString.split(">")
firstResult.pop()
  const open = []
  const close = []  
  // 태그가 겹치는 경우
  for ( let i = 0; i < firstResult.length; i++){
    if( firstResult[i][1] === '<'){
      return false
    } 
  if( firstResult[i][0] === '<' && firstResult[i][1] !== '/'){
    open.push(firstResult[i][1])
  } else if( firstResult[i][1] === '/'){
    close.push(firstResult[i][2])
  }

  }
  if(open[0] === close[0]){
    return false
  }
  if(open[0] === open[1] === close[0] === close[1]){
    return false
  }
  
return true

}

