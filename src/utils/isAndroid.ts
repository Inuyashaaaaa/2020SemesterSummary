const isAndroud = () => {
  const u = navigator.userAgent;
  return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
};

export { isAndroud }
