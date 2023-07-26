"use client"; 

interface ITodo {
	id: string;
	title: string;
	complete: boolean;
}

type IProps = {
	todo: ITodo;
	toggleTodo: (id: string, complete: boolean) => void; 
};

export function TodoItem({ todo, toggleTodo }: IProps) {
	return (
		<li className="flex gap-1 items-center">
			<input id={todo.id} type="checkbox"
				defaultChecked={todo.complete}	
				onChange={e => toggleTodo(todo.id, e.target.checked)}
				className="cursor-pointer peer" />
			<label htmlFor={todo.id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
				{todo.title}
			</label>
		</li>
	);
}
