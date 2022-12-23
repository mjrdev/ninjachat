import { randomUUID } from "crypto";

export interface NinjaProps {
  id?: string;
  name: string;
  createdAt: Date
  chats?: string
}

export class Ninja {
  public props: NinjaProps;

  constructor(props: NinjaProps) {

    const id = randomUUID();
    props.id = id;

    this.props = props;
  }

  public get id(): string {
    return this.props.id;
  }

  public set id(value) {
    this.props.id = value;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(value: string) {
    this.props.name = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set createdAt(value: Date) {
    this.props.createdAt = value;
  }

  public get chats(): string {
    return this.props.chats;
  }

  public set chats(value: string) {
    this.props.chats = value;
  }
}