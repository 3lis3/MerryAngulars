export class Task {
    private content: string;
    private _status: boolean;
      
    public constructor(content: string) {
      this.content = content;
      this._status = false;
    }
  
    public getContent(): string {
      return this.content;
    }
    
    public getStatus(): boolean {
        return this._status;
    }

    public toggle(): void {
        this._status = !this._status;
        console.log(this._status);

    }

  }