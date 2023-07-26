interface ITodo {
	id: string;
	title: string;
}
type IProps = {
	todo: ITodo;
};

export function TodoItem({ todo }: IProps) {
	return (
		<li className="flex gap-1 items-center">
			<input id={todo.id} type="checkbox" className="cursor-pointer peer"/>
			<label htmlFor={todo.id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
				{todo.title}
			</label>
		</li>
	);
}
