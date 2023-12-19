const truncate = (str: string, maxLength: number = 16): string => {
  if (!str) return "";

  if (str.length < maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + "...";
};

export { truncate };
