extends CharacterBody2D
@onready var animated_sprite_2d = $AnimatedSprite2D

var direction = Vector2.RIGHT
#var velocity = Vector2.ZERO

@onready var edge_check_l: = $edgecheckleft
@onready var edge_check_r: = $edgecheckright

func _physics_process(delta):
	var found_wall = is_on_wall()
	var found_edge_l = not edge_check_l.is_colliding()
	var found_edge_r = not edge_check_l.is_colliding()
	
	if found_wall or found_edge_l or found_edge_r:
		direction *= -1
		
	
	velocity = direction * 55
	move_and_slide()
	
	var isRight = velocity.x > 0
	animated_sprite_2d.flip_h = isRight
