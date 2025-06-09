export interface CategoryProps {
  id: string;
  name: string;
  description?: string;
}

export class Category {
  constructor(private props: CategoryProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }
}
