export class Note {
  name: string;
  header: string;
  content: string;

  constructor(name: string, header: string, content: string) {
    this.name = name;
    this.header = header;
    this.content = content;
  }
}
