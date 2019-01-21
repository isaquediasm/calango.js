function filterBasedOnList(config) {
  const { whitelist = [], blacklist = [] } = config;

  if (!!whitelist.length) {
    return method => whitelist.includes(method);
  }

  if (!!blacklist.lenght) {
    return method => !blacklist.includes(method);
  }

  return Boolean;
}

export default filterBasedOnList;
