const strContains = (string, substring) => {
  if (string.toLowerCase().includes(substring.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export default strContains;
