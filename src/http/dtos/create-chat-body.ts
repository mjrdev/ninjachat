import { IsNotEmpty, Length } from "class-validator";

export class CreateChatBody {
  @IsNotEmpty()
  @Length(5, 255)
  name: string;
}