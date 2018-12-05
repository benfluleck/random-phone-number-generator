export default (options) => {
  const classNames = Object.keys(options).map((option, index) => {
    try {
      if (options[ option ]) {
        return option;
      }
    } catch (e) {
      throw new Error(`An invalid boolean value has been provided to key "${option}"`);
    }
  });

  return classNames.join(' ').trim();
};
