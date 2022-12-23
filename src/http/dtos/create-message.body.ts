import { IsNotEmpty, Length, IsUUID } from "class-validator";

export class CreateMessageBody {
  @IsNotEmpty()
  @Length(1, 190)
  content: string;
  @IsNotEmpty()
  @IsUUID()
  authorId: string;
  @IsNotEmpty()
  @IsUUID()
  chatId: string;
}