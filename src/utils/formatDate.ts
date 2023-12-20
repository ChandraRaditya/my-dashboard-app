const formatDate = () => {
  const formatMonthYear = (date: Date) => {
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().slice(-2);

    return `${month}/${year}`;
  };

  const formatDayMonth = (date: Date) => {};

  const formatDayMonthYear = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);

    const parts = formattedDate.split(" ");
    const formatted = `${parts[1]} ${parts[0]}, ${parts[2]}`;
    return (
      formatted.charAt(0).toUpperCase() + formatted.slice(1).replace(",", "")
    );
  };

  const formatFullWithTime = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);

    const suffix = date.getHours() >= 12 ? "pm" : "am";
    const formattedTime = formattedDate
      .replace(",", ` at`)
      .replace(/(\d+):(\d+)/, `$1.$2 ${suffix}`)
      .slice(0, -2)
      .replace(" at", ",");

    return formattedTime;
  };

  return {
    formatMonthYear,
    formatDayMonth,
    formatDayMonthYear,
    formatFullWithTime,
  };
};

export default formatDate;
