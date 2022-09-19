export const isMagnet = (link: string) => {
  return link.startsWith("magnet:");
};

export const fromMagnet = (magnetLink: string) => {
  if (!isMagnet(magnetLink)) return null;

  const names = window.decodeURI(magnetLink).match(/dn=([^&]+)/);
  if (names) return names[1];

  return null;
};

export default {
  isMagnet,
  fromMagnet,
}
