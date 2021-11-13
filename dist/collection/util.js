const padZeroes = (value) => {
  const [month, day, year] = value.split('/');
  return `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
};
const formatDate = (value) => {
  if (!(value instanceof Date))
    return value;
  return padZeroes(`${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`);
};
const formatTime = (value, hour24 = false) => {
  if (!(value instanceof Date))
    return value;
  if (hour24)
    return `${value.getHours()}:${value.getMinutes().toString().padStart(2, '0')}`;
  const hour = value.getHours() % 12 || 12;
  const meridiem = value.getHours() < 12 ? 'AM' : 'PM';
  return `${hour}:${value.getMinutes().toString().padStart(2, '0')} ${meridiem}`;
};
export const handleTimestamp = (value, useTime = false, hour24 = false) => {
  if (!(value instanceof Date) && typeof value !== 'string') {
    throw new TypeError('Timestamp prop must be a Date object or a string.');
  }
  return useTime ? formatTime(value, hour24) : formatDate(value);
};
export const findSlotElement = (elements, name) => {
  return Array.from(elements).find((child) => (child === null || child === void 0 ? void 0 : child.slot) === name);
};
export const IMAGE_EXTENSION = /\.(bmp|jpe?g|png|gif|webp|tiff)$/i;
export const validateImageExtension = (url) => {
  if (!IMAGE_EXTENSION.test(url))
    throw new Error(`The url of an image for discord-attachment should match the regex ${IMAGE_EXTENSION}`);
};
