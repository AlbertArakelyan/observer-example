const setHtmlFromArray = ($element, arr = [], rendererFunction) => {
  const markup = arr && arr.length ? arr.map(rendererFunction).join('') : null;
  $element.innerHTML = markup;
};

export default setHtmlFromArray;