const convertBinToBase = (bin, base = -1, convertDict = {}) => {
  const divBy = base;
  let mutBin = `${bin.trim()}`;
  if (base !== -1) {
    let adjustSizeBy = bin.length % divBy;
    while (adjustSizeBy % divBy != 0) {
      mutBin = "0" + mutBin;
      adjustSizeBy++;
    }
  }
  let returnString = "";
  let binExponent = 0;
  let tempSum = 0;
  for (let i = mutBin.length - 1; i >= 0; i--) {
    const char = mutBin.charAt(i);
    if (char === "1") {
      let result = Math.pow(2, binExponent);

      tempSum += result;
    }
    binExponent++;
    if (binExponent === divBy) {
      returnString = `${convertDict[tempSum] || tempSum}${returnString}`;
      tempSum = 0;
      binExponent = 0;
    }
  }
  if (base === -1) {
    return `${tempSum}`;
  }
  return returnString;
};

const convertBaseToBin = (number, base = -1, convertDict = {}) => {
  let returnString = "";
  if (`${number}`.trim() === "") return returnString;

  let mutNumber =
    convertDict[number] || Number.parseInt((number + "").trim()) || 0;
  while (mutNumber > 1) {
    returnString = `${mutNumber % 2}${returnString}`;
    mutNumber = Math.floor(mutNumber / 2);
  }
  returnString = `${mutNumber}${returnString}`;
  if (base > -1) {
    while (returnString.length < base) {
      returnString = `0${returnString}`;
    }
  }
  return returnString;
};

const convertHelper = {
  convertBinaryToOctal: (bin) => {
    return convertBinToBase(bin, 3);
  },
  convertBinaryToHex: (bin) => {
    return convertBinToBase(bin, 4, {
      10: "A",
      11: "B",
      12: "C",
      13: "D",
      14: "E",
      15: "F",
    });
  },
  convertBinaryToDec: (bin) => {
    return convertBinToBase(bin);
  },
  convertOctalToBinary: (octal) => {
    let returnString = "";
    for (let char of octal) {
      returnString = `${returnString}${convertBaseToBin(char, 3)}`;
    }
    return returnString;
  },
  convertHexToBinary: (hex) => {
    let returnString = "";
    for (let char of hex) {
      returnString = `${returnString}${convertBaseToBin(char.toUpperCase(), 4, {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
      })}`;
    }
    return returnString;
  },
  convertDecToBinary: (decNumber) => {
    return convertBaseToBin(decNumber);
  },
};

export default convertHelper;
