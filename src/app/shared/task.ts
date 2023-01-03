export class Task {
    private content: string;
  
    public constructor(content: string) {
      this.content = content;
    }
  
    public getContent(): string {
      return this.content;
    }
  }