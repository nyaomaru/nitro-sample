export class StringDecoder {
  constructor(encoding = 'utf-8') {
    console.warn(`StringDecoder(${encoding}) is not implemented in Deno.`);
    this.encoding = encoding;
  }

  write(buffer) {
    return new TextDecoder(this.encoding).decode(buffer);
  }

  end() {
    return '';
  }
}
