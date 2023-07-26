interface ITodo {
	title: string;
}
type IProps = {
	todo: ITodo;
}

export function TodoItem({ todo }: IProps) {
	return <li>{todo.title}</li>;
}