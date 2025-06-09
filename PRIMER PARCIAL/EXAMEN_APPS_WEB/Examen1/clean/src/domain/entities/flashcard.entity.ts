export interface FlashcardProps {
  id: string;
  question: string;
  answer: string;
  categories: string[]; // array de IDs de categorías
  createdBy: string; // ID del usuario
  createdAt: Date;
}

export class Flashcard {
  constructor(private props: FlashcardProps) {}

  get id() {
    return this.props.id;
  }

  get question() {
    return this.props.question;
  }

  get answer() {
    return this.props.answer;
  }

  get categories() {
    return this.props.categories;
  }

  get createdBy() {
    return this.props.createdBy;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
