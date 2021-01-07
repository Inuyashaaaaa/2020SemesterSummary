/**
 * 3 => 0003
 * @param num 数字
 * @param length 长度
 */
const addZero = (num: number, length: number) => {
  const numStr = num.toString();
  const len = numStr.length;
  if (len >= length) return numStr;
  return "0".repeat(length - len) + numStr;
};

export { addZero };
