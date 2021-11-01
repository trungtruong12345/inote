todos = []
(1..4).each do |i|
  title = (0...14).map { ('a'..'z').to_a[rand(26)] }.join
  
  content = (0...50).map { ('a'..'z').to_a[rand(26)] }.join

  todos << {title: title, content: rand(0..1) == 1 ? '' : content, est: 3, status: rand(0..1)} 
end

(1..4).each do |item|
  todoList = User.find(2).todo_lists.create(est: rand(1..5))

  todos.each do |todo|
    todoList.todos.create(todo)
  end
end