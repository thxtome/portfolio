const vaildDispacher = (items, addToast) => {
  let result = true;
  items.some(item => {
    //빈값 체크
    if (item.required && isEmpty(addToast, item)) {
      result = false;
      return true;
    }

    //양식체크
    switch (item.type) {
      case '이메일':
        result = isEmail(addToast, item);
        break;
      case '핸드폰번호':
        result = isPnum(addToast, item);
        break;
      default:
        break;
    }

    if (result === false) {
      return true;
    }
  });

  return result;
};

const isEmail = (addToast, { input: { value }, type }) => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (regExp.test(value)) {
    return true;
  }
  addToast({ text: `${type}이 양식에 맞지 않습니다.`, type: 'error' });
  return false;
};

const isPnum = (addToast, { input: { value }, type }) => {
  const regExp = /^[0-9]{2,3}[.-]?[0-9]{3,4}[.-]*[0-9]{3,4}$/;
  if (regExp.test(value)) {
    return true;
  }
  addToast({ text: `${type}가 양식에 맞지 않습니다.`, type: 'error' });
  return false;
};

const isEmpty = (addToast, { input: { value }, type }) => {
  if (!value || value.trim().length === 0) {
    let lastChar = type.charCodeAt(type.length - 1);
    type += (lastChar - 0xac00) % 28 > 0 ? '을' : '를';
    addToast({ text: `${type} 입력해주세요.`, type: 'error' });
    return true;
  }
  return false;
};

export { vaildDispacher };
