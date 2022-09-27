const cutPostsText = () => {
  let postCardTextElems = document.querySelectorAll('.post-card__text');

  postCardTextElems.forEach((textElem) => {
    setFontSize(textElem)

    let text = textElem.textContent;
    textElem.textContent = cutText(text);
  });

  function setFontSize(elem) {
    let text = elem.textContent;

    if (text.length < 50) {
      elem.style.fontSize = '44px'
    } else if (text.length > 50 && text.length < 120) {
      elem.style.fontSize = '38px'
    } else {
      elem.style.fontSize = '36px'
    }

  }

  function cutText (text)  {
    let maxLength = 150;

    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + '...';
    }

    return text;
  };
};

export default cutPostsText;
