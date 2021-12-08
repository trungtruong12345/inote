# Create todoList
(1..20).each do |i|
  params = {
    title: (0...15).map { (65 + rand(26)).chr }.join,
    # est: ["4h", "3h", "12p"].sample,
    order: i,
    status: [0,1,2,3].sample,
    user_id: 2,
    color: ["#FFFFFF", "#FFC1C1", "#E4C1FF", "#FFE6C1", "#C1FFCF", "#C1F4FF"].sample,
  }
  TodoList.create(params)
end