extends Area2D

signal player_hit

func _on_body_entered(body):
	#print(body.name)
	if body is CharacterBody2D:
		emit_signal("player_hit")
		get_tree().change_scene_to_file("res://scenes/ending_screen.tscn")

