const DEFAULT_LOCALE = 'de-DE';
const DEFAULT_OPTIONS = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "shortOffset"
};

export function createDateTimeFormatter(locale = DEFAULT_LOCALE) {
    const formatter = new Intl.DateTimeFormat(locale, DEFAULT_OPTIONS);
    return input => formatter.format(input);
}