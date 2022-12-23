import { randomUUID } from "crypto";

export interface ChatProps {
  name: string;
}

export class Chat {
  private _id: string;
  private props: ChatProps;
  constructor(props: ChatProps) {
    this._id = randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }
  public get name(): string {
    return this.props.name;
  }

  public set id(value: string) {
    this._id = value;
  }
  public set name(value: string) {
    this.props.name = value;
  }
}