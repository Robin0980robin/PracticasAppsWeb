export interface StudySessionProps {
  id: string;
  userId: string;
  categoryId: string;
  flashcardIds: string[];
  startedAt: Date;
  finishedAt?: Date;
}

export class StudySession {
  constructor(private props: StudySessionProps) {}

  get id() {
    return this.props.id;
  }

  get userId() {
    return this.props.userId;
  }

  get categoryId() {
    return this.props.categoryId;
  }

  get flashcardIds() {
    return this.props.flashcardIds;
  }

  get startedAt() {
    return this.props.startedAt;
  }

  get finishedAt() {
    return this.props.finishedAt;
  }
}
