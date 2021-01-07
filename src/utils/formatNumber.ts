/**
 * 格式化整数  1000 -> 1,000
 * @param num
 */
function _formatInteger(num: number | string): string {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1.");
}

/**
 * @param num 原来的数字
 */
function formatNumber(num: number | string) {
  return _formatInteger(num);
}

export { formatNumber };
