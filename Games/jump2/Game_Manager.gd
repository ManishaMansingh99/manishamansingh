extends Node
@onready var panel_label = %Panel_label

var points=0

func  add_point():
	points+=1
	print(points)
	panel_label.text="Points: " + str(points)

func get_points():
	return points
	

#func load_hearts():
	#$HeartsFull.rect_size.x = Global.lives * 53
	#$HeartsEmpty.rect_size.x = (Global.max_lives - Global.lives) * 53
	#$HeartsFull.rect_position.x =$HeartsFull.rect_position.x + $HearsFull.rect_size.x * $HeartsFull.rect_scale.x
#
#func ready():
	#load_hearts()
