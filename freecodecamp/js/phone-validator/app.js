function telephoneCheck(str) {
   let re = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
   return re.test(str, '');
}

telephoneCheck('555-555-5555');
telephoneCheck('1 555-555-5555');
