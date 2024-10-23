import { customChars, EncodedValue, DecodedValue } from './settings';

function customToBuffer(encoded: string): ArrayBuffer {
  const output: number[] = [];
  for (let i = 0; i < encoded.length; i += 4) {
    const char1 = customChars.indexOf(encoded[i]);
    const char2 = customChars.indexOf(encoded[i + 1]);
    const char3 = customChars.indexOf(encoded[i + 2]);
    const char4 = customChars.indexOf(encoded[i + 3]);

    // eslint-disable-next-line no-bitwise
    const combined = (char1 << 18) | (char2 << 12) | (char3 << 6) | char4;

    // eslint-disable-next-line no-bitwise
    output.push((combined >> 16) & 255);

    // eslint-disable-next-line no-bitwise
    if (encoded[i + 2] !== '=') output.push((combined >> 8) & 255);
    // eslint-disable-next-line no-bitwise
    if (encoded[i + 3] !== '=') output.push(combined & 255);
  }
  return new Uint8Array(output).buffer;
}

function decodeNumber(enc: string): number {
  const buffer = customToBuffer(enc);
  const view = new DataView(buffer);
  return view.getFloat64(0);
}

function decodeString(enc: string): string {
  const buffer = customToBuffer(enc);
  let txt = new TextDecoder().decode(buffer);
  // remove trailing spaces
  txt = txt.replace(/\0/g, '');
  return txt.trim();
}

function decodeBoolean(enc: string): boolean {
  return enc === 'T';
}

function decodeArray(enc: string): any[] {
  const str = decodeString(enc.slice(0));
  const spl = str.split('-');
  const elements: Array<any> = [];
  for (let i = 0; i < spl.length; i += 1) {
    // eslint-disable-next-line no-use-before-define
    const { value, length } = decode(spl[i]);
    elements.push(value);
  }
  return elements;
}

function decodeObject(enc: string): { [key: string]: any } {
  const str = decodeString(enc.slice(0));
  const objSplit = str.split('-');
  const objToReturn: { [key: string]: any } = {};

  for (let i = 0; i < objSplit.length; i += 1) {
    const [key, value] = objSplit[i].split('_');
    // eslint-disable-next-line no-use-before-define
    const decodedKey = decode(key);
    // eslint-disable-next-line no-use-before-define
    const decodedValue = decode(value);
    objToReturn[String(decodedKey.value)] = decodedValue.value;
  }
  return objToReturn;
}

function decode(enc: string): { value: DecodedValue, length: number } {
  const type = enc[0];
  switch (type) {
    case 'N':
      return { value: decodeNumber(enc.slice(1)), length: 12 };
    case 'S': {
      const value = decodeString(enc.slice(1));
      return { value, length: enc.length + 1 };
    }
    case 'B': {
      const value = decodeBoolean(enc.slice(1));
      return { value, length: 2 };
    }
    case 'A': {
      const value = decodeArray(enc.slice(1));
      return { value, length: enc.length + 1 };
    }
    case 'O': {
      const value = decodeObject(enc.slice(1));
      return { value, length: enc.length + 1 };
    }
    default:
      throw new Error('Invalid type');
  }
}

export default decode;
