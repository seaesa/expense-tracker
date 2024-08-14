import unidecode from 'unidecode';

export const formatString = (string: string) => {
  const unicode = unidecode(string) as string
  return unicode.replace(/\s/g, '')
  // return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');

}