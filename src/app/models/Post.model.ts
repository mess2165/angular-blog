export class Post {
    loveIts: number;
    createdAt: Date;
    createdAtFormatted: string;

  constructor(public title: string, public content: string) {
    this.createdAt = new Date();
    this.createdAtFormatted = this.createdAt.toISOString()
    this.loveIts = 0;
  }
}
