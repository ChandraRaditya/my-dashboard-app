const formatNumber = (value: number | undefined) => {
  return new Intl.NumberFormat("id-ID").format(value ?? 0);
};

export default formatNumber;
