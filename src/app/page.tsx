import { TodoItem } from '@/components/TodoItem';
import { prisma } from '@/db';
import Link from 'next/link';

const toggleTodo = async (id: string, complete: boolean) => {
	'use server';
	await prisma.todo.update({ where: { id }, data: { complete } });
}

const getTodos = () => {
	return prisma.todo.findMany();
};

export default async function Home() {
	const todos = await getTodos();

	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">Todos</h1>
				<Link
					className="border border-slate-300 text-slate-300 px-1 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
					href="/add"
				>
					Add Todo
				</Link>
			</header>
			<ul className="">
				{todos.map((todo) => (
					<TodoItem todo={todo} toggleTodo={toggleTodo} key={todo.id} />
				))}
			</ul>
		</>
	);
}
