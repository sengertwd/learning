Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn Emberjs!',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Awesome!',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Money, Money, Money!'
	}
]