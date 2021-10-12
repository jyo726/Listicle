const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformtxtNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if (node.nodeType == Node.txt_NODE){
    const splittxt = node.txtContent.split(" ");
    for (let i = 0; i < splittxt.length; i ++){
      if (MATCH_LIST.hasOwnProperty(splittxt[i].trim())){
        splittxt[i] = splittxt[i].replace(splittxt[i].trim(), MATCH_LIST[splittxt[i].trim()]);
      }
    }
    node.txtContent = splittxt.join(" ");
  }
  for (const child of node.childNodes){
    transformtxtNodes(child);
  }
}

transformtxtNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
