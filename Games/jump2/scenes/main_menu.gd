extends Node

func _on_start_pressed():
	get_tree().change_scene_to_file("res://scenes/Level1.tscn")


func _on_tuitorial_pressed():
	get_tree().change_scene_to_file("res://scenes/Tuitorial_menu.tscn")


func _on_levels_pressed():
	get_tree().change_scene_to_file("res://scenes/Level_menu.tscn")
