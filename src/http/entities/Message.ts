import { randomUUID } from "crypto";

export interface MessageProps {
  content: string;
  authorId: string;
  chatId: string;
  date?: Date;
}

export class Message {
  private _id: string;
  private props: MessageProps;
  constructor(props: MessageProps) {
    this._id = randomUUID();
    props.date = new Date();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }
  public get content(): string {
    return this.props.content;
  }
  public get chatId(): string {
    return this.props.chatId;
  }
  public get authorId(): string {
    return this.props.authorId;
  }
  public get date(): Date {
    return this.props.date;
  }
  
  public set id(value: string) {
    this._id = value;
  }
  public set chatId(value: string) {
    this.props.chatId = value;
  }
  public set content(value: string) {
    this.props.content = value;
  }
  public set authorId(value: string) {
    this.props.authorId = value;
  }
  public set date(value: Date) {
    this.props.date = value;
  }
}